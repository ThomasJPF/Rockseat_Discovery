function toggleMode() {
  const html = document.documentElement;

  html.classList.toggle("light");

  //pegar a tag img
  const img = document.querySelector('#profile img')

  if (html.classList.contains("light")) {
      //se tiver light mold adicionar a imagems light
      img.setAttribute('src', './assets/avatar-light.png')
  } else {
      //se tiver normal, manter a imagem escura
      img.setAttribute('src','./assets/avatar.png')
  }


  //substituir img
}
