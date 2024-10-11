function switchTheme() {
  document.body.classList.toggle('dark-theme');
  document.body.classList.toggle('light-theme');
  
  const audioElement = document.getElementById('music');

  if (document.body.classList.contains('dark-theme')) {
    audioElement.src = 'assets/musics/inverted-world.mpeg';
  } else {
    audioElement.src = 'assets/musics/assets_musics_normal-world.mpeg';
  }
  audioElement.play();
}

window.addEventListener('load', () => {
  const audioElement = document.getElementById('music');
  
  document.addEventListener('click', () => {
    audioElement.play();
  }, { once: true });
});

