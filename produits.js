const catButtons = document.querySelectorAll('.cat-btn');
const sections = document.querySelectorAll('.produit-section');

catButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = document.getElementById(btn.dataset.target);
    if(target){
      target.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

// Met à jour la catégorie active pendant le défilement de la page
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      catButtons.forEach(b => b.classList.remove('active'));
      const activeBtn = document.querySelector(`.cat-btn[data-target="${entry.target.id}"]`);
      if(activeBtn) activeBtn.classList.add('active');
    }
  });
}, {rootMargin:'-140px 0px -60% 0px', threshold:0});

sections.forEach(sec => observer.observe(sec));
