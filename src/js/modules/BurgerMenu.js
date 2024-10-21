import Popup from './Popup.js';
import { headerFixed } from './index.js';

class BurgerMenu extends Popup {
  constructor() {
    super();

    this.burgerButton = document.querySelector('.icon-menu');
  }

  /**
   * Initialize the menu functionality.
   */
  init() {
    if (this.burgerButton) {
      document.addEventListener('click', ({ target }) => {
        if (target.closest('.icon-menu') || target.closest('.main-page .mobile-menu .menu__link')) {
          const mobileMenu = document.querySelector('.mobile-menu');
          const header = document.querySelector('.header');


          this.html.classList.toggle('menu-open');
          this.toggleBodyLock(this.html.classList.contains('menu-open'));
          mobileMenu.classList.toggle('active');

          if (mobileMenu.classList.contains('active')) {
            header.classList.remove('header-white')

          } else {
            header.classList.add('header-white')
            headerFixed();
          }
        }
      });
    }
  }

  /**
   * Open the menu.
   */
  menuOpen() {
    this.toggleBodyLock(true);
    this.html.classList.add('menu-open');
  }

  /**
   * Close the menu.
   */
  menuClose() {
    this.toggleBodyLock(false);
    this.html.classList.remove('menu-open');
  }
}

export default BurgerMenu;
