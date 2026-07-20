// Écran d'introduction (page d'accueil uniquement)
const introSplash = document.getElementById('introSplash');
if(introSplash){
  document.body.classList.add('intro-active');
  const introText = introSplash.querySelector('p');
  requestAnimationFrame(() => {
    introSplash.classList.add('intro-lighten');
    setTimeout(() => introText.classList.add('show'), 300);
  });
  setTimeout(() => {
    introSplash.classList.add('intro-hide');
    document.body.classList.remove('intro-active');
  }, 4500);
  setTimeout(() => introSplash.remove(), 5700);
}

// Menu mobile
const burger = document.getElementById('burger');
const nav = document.querySelector('.main-nav');
if(burger){
  burger.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

// Lecture des blocs vidéo (à connecter à vos fichiers vidéo réels)
document.querySelectorAll('.play-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Emplacement prévu pour votre vidéo : remplacez le bloc .video-block par une balise <video> ou un lecteur intégré (YouTube/Vimeo non répertorié).');
  });
});
