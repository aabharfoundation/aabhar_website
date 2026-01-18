

// Small helpers
const $ = (sel, ctx=document) => ctx.querySelector(sel);
const $$ = (sel, ctx=document) => Array.from((ctx || document).querySelectorAll(sel));

function normalize(v){ return (v||'').toString().trim().toLowerCase(); }

// Filter visible cards by search query (title/location/category/visible text)
function filterCards(query){
  const q = normalize(query);
  const cards = $$('.card');
  if(!q){
    cards.forEach(c => { c.style.display = ''; });
    return;
  }

  cards.forEach(card => {
    const title = normalize(card.dataset.title || card.querySelector('h3')?.textContent);
    const location = normalize(card.dataset.location || '');
    const category = normalize(card.dataset.category || '');
    const text = normalize(card.textContent || '');
    const visible = title.includes(q) || location.includes(q) || category.includes(q) || text.includes(q);
    card.style.display = visible ? '' : 'none';
  });
}

// Wire gallery prev/next buttons for each card
function wireGalleries(){
  $$('.card').forEach(card => {
    const gallery = card.querySelector('.gallery');
    if(!gallery) return;
    const prev = card.querySelector('.prev');
    const next = card.querySelector('.next');
    const step = Math.round(gallery.clientWidth * 0.6) || 220;

    if(prev) prev.addEventListener('click', () => gallery.scrollBy({ left: -step, behavior: 'smooth' }));
    if(next) next.addEventListener('click', () => gallery.scrollBy({ left: step, behavior: 'smooth' }));

    // Allow left/right keys when gallery is focused
    gallery.addEventListener('keydown', (ev) => {
      if(ev.key === 'ArrowRight') { gallery.scrollBy({ left: 120, behavior: 'smooth' }); }
      if(ev.key === 'ArrowLeft') { gallery.scrollBy({ left: -120, behavior: 'smooth' }); }
    });
  });
}

// Staggered reveal
function revealCards(){
  const cards = $$('.card');
  cards.forEach((c,i) => setTimeout(()=> c.classList.add('show'), 70 * i));
}

// WhatsApp Share Function
function shareOnWhatsApp(storyTitle){
  // Get the current page URL
  const pageUrl = window.location.href;
  
  // Marathi message with story title
  const message = `आबांचे जीवन पाहा: ${storyTitle}\n\n${pageUrl}`;
  
  // Try Web Share API first (works on mobile browsers that support it)
  if(navigator.share){
    navigator.share({
      title: storyTitle,
      text: `आबांचे जीवन: ${storyTitle}`,
      url: pageUrl
    }).catch(err => {
      // User cancelled or error occurred, fallback to WhatsApp direct link
      openWhatsAppShare(message);
    });
  } else {
    // Fallback: Open WhatsApp Web/App with direct message link
    openWhatsAppShare(message);
  }
}

// Fallback function to open WhatsApp with message
function openWhatsAppShare(message){
  // WhatsApp Share URL (works on Android and iOS)
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
  
  // Try to open WhatsApp app on mobile, fallback to WhatsApp Web
  window.open(whatsappUrl, '_blank');
}

function init(){
  const search = $('#search');
  if(search){
    let t = null;
    search.addEventListener('input', (e) => { clearTimeout(t); t = setTimeout(()=> filterCards(e.target.value), 140); });
  }

  wireGalleries();
  revealCards();
}

document.addEventListener('DOMContentLoaded', init);