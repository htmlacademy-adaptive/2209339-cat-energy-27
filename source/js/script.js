let navMain = document.querySelector('.main-nav');
let navList = document.querySelector('.main-nav__list');
let headerToggle = document.querySelector('.main-header__toggle')
let textToggle = document.querySelector('.main-header__toggle-text')

navList.classList.remove('main-nav__list--nojs')
headerToggle.classList.remove('main-header__toggle--nojs')
navMain.classList.add('main-nav--closed')
headerToggle.classList.add('main-header__toggle--closed')

headerToggle.addEventListener('click',function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    headerToggle.classList.remove('main-header__toggle--closed');
    headerToggle.classList.add('main-header__toggle--opened');
    textToggle.textContent = 'Закрыть меню навигациию';
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    headerToggle.classList.add('main-header__toggle--closed');
    headerToggle.classList.remove('main-header__toggle--opened');
    textToggle.textContent = 'Открыть меню навигациию';
  }
})
