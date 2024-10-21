const html = document.documentElement;
const body = document.body;
const pageWrapper = document.querySelector('.page');
const header = document.querySelector('.header');
const firstScreen = document.querySelector('[data-observ]');
const burgerButton = document.querySelector('.icon-menu');
const menu = document.querySelector('.menu');
const lockPaddingElements = document.querySelectorAll('[data-lp]');
const orderForm = document.querySelector('.order__form');

export {
  html,
  body,
  pageWrapper,
  header,
  firstScreen,
  burgerButton,
  menu,
  lockPaddingElements,
  orderForm
};
