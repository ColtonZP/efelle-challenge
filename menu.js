const menu = document.querySelector('.menu')

function toggleMenu() {
  menu.classList.contains('hidden')
    ? menu.classList.remove('hidden')
    : menu.classList.add('hidden')
}
