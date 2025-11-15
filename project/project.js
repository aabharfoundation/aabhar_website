/* project/project.js
   Dynamic rendering and simple filtering for the Social Work Portfolio.

   - Modify the `programs` array below to add or update cards.
   - Each program object supports: title, description, location, date, category, images (array of URLs).
*/

const programs = [
  {
    id: 1,
    title: 'School Bag Distribution to Village Children',
    description: 'Distributed school bags, stationery kits and awareness sessions for children in rural villages.',
    location: 'Galle Borgaon, Sambhajinagar',
    date: '2024-12-05',
    category: 'Education',
    images: [
      'https://via.placeholder.com/360x240?text=School+1',
      'https://via.placeholder.com/360x240?text=School+2',
      'https://via.placeholder.com/360x240?text=School+3',
      'https://via.placeholder.com/360x240?text=School+4'
    ]
  },
  {
    id: 2,
    title: 'Tree Plantation Drive',
    description: 'Community tree planting to boost green cover and environmental awareness.',
    location: 'Pune',
    date: '2025-01-20',
    category: 'Environment',
    images: [
      'https://via.placeholder.com/360x240?text=Tree+1',
      'https://via.placeholder.com/360x240?text=Tree+2',
      'https://via.placeholder.com/360x240?text=Tree+3'
    ]
  },
  {
    id: 3,
    title: 'Health Check-up Camp',
    description: 'Free medical check-ups, basic medicines and referral support for villagers.',
    location: 'Khadki Village',
    date: '2025-03-14',
    category: 'Health',
    images: [
      'https://via.placeholder.com/360x240?text=Health+1',
      'https://via.placeholder.com/360x240?text=Health+2',
      'https://via.placeholder.com/360x240?text=Health+3',
      'https://via.placeholder.com/360x240?text=Health+4',
      'https://via.placeholder.com/360x240?text=Health+5'
    ]
  }
];

// Utilities
const $ = (sel, ctx=document) => ctx.querySelector(sel);
const $$ = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));

function formatDate(d){
  try{
    const dt = new Date(d);
    return dt.toLocaleDateString(undefined, { year:'numeric', month:'short', day:'numeric' });
  }catch(e){return d}
}

// Create a single card element
function createCard(program){
  const card = document.createElement('article');
  card.className = 'card';
  card.setAttribute('data-title', program.title.toLowerCase());
  card.setAttribute('data-location', program.location.toLowerCase());
  card.setAttribute('data-category', program.category.toLowerCase());

  card.innerHTML = `
    <div class="card-header">
      <div>
        <h3>${program.title}</h3>
        <div class="meta">${program.location} • <span class="date">${formatDate(program.date)}</span></div>
      </div>
      <div>
        <span class="badge">${program.category}</span>
      </div>
    </div>
    <p class="card-desc">${program.description}</p>
    <div class="gallery-wrap">
      <div class="gallery-controls">
        <button class="g-btn prev" aria-label="Previous images">◀</button>
        <button class="g-btn next" aria-label="Next images">▶</button>
      </div>
      <div class="gallery" tabindex="0">
        ${program.images.map(src => `<img src="${src}" alt="${program.title} photo">`).join('')}
      </div>
    </div>
    <div class="card-footer">
      <div class="date">${formatDate(program.date)}</div>
    </div>
  `;

  // Add handlers for prev/next
  const gallery = card.querySelector('.gallery');
  const prev = card.querySelector('.prev');
  const next = card.querySelector('.next');

  prev.addEventListener('click', () => { gallery.scrollBy({ left: -200, behavior: 'smooth' }); });
  next.addEventListener('click', () => { gallery.scrollBy({ left: 200, behavior: 'smooth' }); });

  return card;
}

// Render cards to container
function renderCards(list){
  const container = $('#cards');
  container.innerHTML = '';
  const frag = document.createDocumentFragment();
  list.forEach((p, i) => {
    const c = createCard(p);
    frag.appendChild(c);
    // staggered reveal
    setTimeout(()=> c.classList.add('show'), 80 * i);
  });
  container.appendChild(frag);
}

// Simple filter by search text
function filterCards(query){
  const q = query.trim().toLowerCase();
  const container = $('#cards');
  if(!q){
    // show all
    renderCards(programs);
    return;
  }
  const filtered = programs.filter(p => {
    return [p.title, p.location, p.category, p.description].join(' ').toLowerCase().includes(q);
  });
  renderCards(filtered);
}

// Init
function init(){
  renderCards(programs);

  const search = $('#search');
  let timer = null;
  search.addEventListener('input', (e) => {
    clearTimeout(timer);
    timer = setTimeout(()=> filterCards(e.target.value), 160);
  });

  // Improve keyboard horizontal scrolling inside galleries
  document.addEventListener('keydown', (ev) => {
    const active = document.activeElement;
    if(active && active.classList && active.classList.contains('gallery')){
      if(ev.key === 'ArrowRight') { active.scrollBy({left:120, behavior:'smooth'}); }
      if(ev.key === 'ArrowLeft') { active.scrollBy({left:-120, behavior:'smooth'}); }
    }
  });
}

document.addEventListener('DOMContentLoaded', init);
