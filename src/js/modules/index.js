import toggleBodyLock from './../helpers/toggleBodyLock';
import { html, firstScreen, header } from './../helpers/elementsNodeList';

// Проверка браузера на поддержку .webp изображений ======================================================
function isWebp() {
  // Проверка поддержки webp
  const testWebp = (callback) => {
    const webP = new Image();

    webP.onload = webP.onerror = () => callback(webP.height === 2);
    webP.src =
      'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  };

  // Добавление класса _webp или _no-webp для HTML
  testWebp((support) => {
    const className = support ? 'webp' : 'no-webp';
    html.classList.add(className);

    console.log(support ? 'webp поддерживается' : 'webp не поддерживается');
  });
}

/* Проверка мобильного браузера */
const isMobile = {
  Android: () => navigator.userAgent.match(/Android/i),
  BlackBerry: () => navigator.userAgent.match(/BlackBerry/i),
  iOS: () => navigator.userAgent.match(/iPhone|iPad|iPod/i),
  Opera: () => navigator.userAgent.match(/Opera Mini/i),
  Windows: () => navigator.userAgent.match(/IEMobile/i),
  any: () =>
    isMobile.Android() ||
    isMobile.BlackBerry() ||
    isMobile.iOS() ||
    isMobile.Opera() ||
    isMobile.Windows(),
};

/* Добавление класса touch для HTML если браузер мобильный */
function addTouchClass() {
  // Добавление класса _touch для HTML если браузер мобильный
  if (isMobile.any()) {
    html.classList.add('touch');
  }
}

// Добавление loaded для HTML после полной загрузки страницы
function addLoadedClass() {
  window.addEventListener('load', () => {
    setTimeout(() => {
      html.classList.add('loaded');
    }, 0);
  });
}

// Получение хеша в адресе сайта
const getHash = () => location.hash?.replace('#', '');

// Указание хеша в адресе сайта
function setHash(hash) {
  hash = hash ? `#${hash}` : location.href.split('#')[0];
  history.pushState('', '', hash);
}

// Функция для фиксированной шапки при скролле ===========================================================
function headerFixed() {
  const headerStickyObserver = new IntersectionObserver(([entry]) => {
    header.classList.toggle('header-white', !entry.isIntersecting);
  });

  if (firstScreen) {
    headerStickyObserver.observe(firstScreen);
  }
}

// Универсальная функция для открытия и закрытия попапов ==================================================
const togglePopupWindows = () => {
  document.addEventListener('click', ({ target }) => {

    if (target.closest('[data-type]')) {
      const popup = document.querySelector(
        `[data-popup]`
      );

      if (document.querySelector('._is-open')) {
        document.querySelectorAll('._is-open').forEach((modal) => {
          modal.classList.remove('_is-open');
        });
      }

      popup.classList.add('_is-open');
      toggleBodyLock(true);
    }

    if (
      target.classList.contains('_overlay-bg') ||
      target.closest('.button-close')
    ) {
      const popup = target.closest('._is-open');
      popup.classList.remove('_is-open');
      toggleBodyLock(false);
    }
  });
};

const Tabs = (linkWrapper, link, content) => {
  const toggleTab = (index) => {
    for(let i = 0; i < content.length; i++) {
      if (index === i) {
        link[i].classList.add('active');
        content[i].classList.add('active');
      } else {
        link[i].classList.remove('active');
        content[i].classList.remove('active');
      }
    }
  }

  if (linkWrapper) {
    linkWrapper.addEventListener('click', (e) => {
      let target = e.target;
      const linkClass = '.' + link[0].classList[0];

      if (target.matches(linkClass)) {
        console.log('test')
        link.forEach((item, i) => {
          if (item === target) {
            toggleTab(i);
          }
        })
      }
    })
  }
}

//Валидация

const validateEmail = (email) => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email);
}

const validateText = (input) => {
  const regex = /^[а-яА-Яa-zA-Z0-9 ]+$/;
  const value = input.value;
  const warningSpan = input.nextElementSibling;

  if (!regex.test(value)) {
    input.value = value.replace(/[^а-яА-Яa-zA-Z0-9 ]/g, '');
    errorMessage(input, warningSpan);
  }
}

const errorMessage = (input, warning) => {
  input.style.cssText = 'background:#ffe0e0;color:#801010';
  warning.style.cssText = 'opacity:1;color:#801010;';
  warning.textContent = 'Поле заполнено неверно';

  input.addEventListener('input', () => {
    input.style.cssText = 'background:#f2f4f5;color:#272727';
    warning.style.cssText = 'opacity:0;color:#801010;';
  })
}


const submitForm = (formName) => {
  const form = formName;
  const name = form?.querySelector('input[name="name"]')


  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    validateText(name);

  })
}

const animation = () => {
  const bw = document.body.clientWidth;

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  if (bw > 1300) {
    const car = document.querySelector('.services .car');
    let panels = gsap.utils.toArray(".car__wheel");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: car,
        start: 'top 80%',
        end: '+=50%',
        toggleActions: 'restart none reverse pause',
        scrub: 1,
      }
    });

    ScrollTrigger.defaults({
      scroller: window,
      throttle: 0.1 // Используйте подходящее значение throttle для вашего случая.
    });


    tl.addLabel('carAndPanel')
        .to(car, { right: '-50%', duration: 5 }, 'carAndPanel')
        .to(panels, { rotation: -576, duration: 5, }, 'carAndPanel');
  }

  function animateValue(id, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const currentCount = Math.floor(progress * (end - start) + start);
    document.getElementById(id).textContent = currentCount;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
    window.requestAnimationFrame(step);
  }


  function handleScroll() {
    const counterElement = document.querySelector('.clients__title');
    if (counterElement && isElementInViewport(counterElement)) {
      animateValue('count', 0, 1358, 1300);
      window.removeEventListener('scroll', handleScroll);
    }
  }
    window.addEventListener('scroll', handleScroll);
}

const toggleSliderImg = () => {
  const slide = document.querySelectorAll('.priorities-slider__slide');
  const openImgPopup = document.querySelector('.open-img__popup');
  const iframe = openImgPopup?.querySelector('iframe');
  const img = openImgPopup?.querySelector('img');

  slide.forEach(item => {
    item.addEventListener('click', () => {
      if(item.dataset.link.includes('youtube')) {
        openImgPopup.style.display = 'flex';
        iframe.style.display = 'block';
        iframe.src = item.dataset.link;
      } else if(item.dataset.link !== '') {
        openImgPopup.style.display = 'flex';
        img.style.display = 'block';
        img.src = item.dataset.link;
      } else {
        return
      }
    });
  });

  openImgPopup?.addEventListener('click', e => {
    if(e.target.closest('.open-img-popup__cross')) {
      openImgPopup.style.display = 'none';
      iframe.style.display = 'none';
      img.style.display = 'none';
    }
  });
}


export {
  isWebp,
  isMobile,
  addTouchClass,
  headerFixed,
  togglePopupWindows,
  addLoadedClass,
  getHash,
  setHash,
  Tabs,
  submitForm,
  animation,
  toggleSliderImg
};
