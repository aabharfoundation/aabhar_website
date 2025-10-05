document.addEventListener('DOMContentLoaded', function(){
    const grid = document.getElementById('galleryGrid');
    const lightbox = document.getElementById('lightbox');
    const lbImage = document.getElementById('lbImage');
    const lbCaption = document.getElementById('lbCaption');
    const btnClose = document.querySelector('.lb-close');
    const btnPrev = document.querySelector('.lb-prev');
    const btnNext = document.querySelector('.lb-next');

    const figures = Array.from(grid.querySelectorAll('figure'));
    const items = figures.map(f => {
        const img = f.querySelector('img');
        return { src: img.getAttribute('src'), alt: img.getAttribute('alt') };
    });

    let currentIndex = 0;

    function openAt(index){
        const item = items[index];
        if(!item) return;
        lbImage.src = item.src;
        lbImage.alt = item.alt || '';
        lbCaption.textContent = item.alt || '';
        lightbox.setAttribute('aria-hidden','false');
        currentIndex = index;
        document.body.style.overflow = 'hidden';
    }

    function closeLB(){
        lightbox.setAttribute('aria-hidden','true');
        lbImage.src = '';
        document.body.style.overflow = '';
    }

    function showNext(){ openAt((currentIndex+1) % items.length); }
    function showPrev(){ openAt((currentIndex-1+items.length) % items.length); }

    figures.forEach((fig, idx) => {
        fig.addEventListener('click', () => openAt(idx));
    });

    btnClose.addEventListener('click', closeLB);
    btnNext.addEventListener('click', showNext);
    btnPrev.addEventListener('click', showPrev);

    // keyboard navigation
    document.addEventListener('keydown', (e)=>{
        if(lightbox.getAttribute('aria-hidden') === 'false'){
            if(e.key === 'Escape') closeLB();
            if(e.key === 'ArrowRight') showNext();
            if(e.key === 'ArrowLeft') showPrev();
        }
    });

    // click outside to close
    lightbox.addEventListener('click', (e)=>{
        if(e.target === lightbox) closeLB();
    });
});
