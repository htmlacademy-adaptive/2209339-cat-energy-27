let navMain = document.querySelector('.main-nav');
let headerToggle = document.querySelector('.main-header__toggle')
let textToggle = document.querySelector('.main-header__toggle-text')

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
