/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый (не вызванный) код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */
import {
    isWebp,
    headerFixed,
    togglePopupWindows,
    addTouchClass,
    addLoadedClass,
    Tabs,
    submitForm,
    animation, toggleSliderImg,
} from './modules';

import { orderForm } from './helpers/elementsNodeList';

import BurgerMenu from './modules/BurgerMenu';

// import Tabs from 'modules/Tabs';

// import { MousePRLX } from './libs/parallaxMouse'

// import AOS from 'aos'

import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation]);
Swiper.use([Pagination]);

var prioritiesSwiper = new Swiper('.priorities-slider', {
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 16,
    loop: true,
    navigation: {
        nextEl: '.priorities__btn-next',
        prevEl: '.priorities__btn-prev'
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
        920: {
            slidesPerView: 3,
        },
        1100: {
            slidesPerView: 4,
        }
    }
});

var prioritiesSwiper = new Swiper('.services-slider', {
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 42,
    loop: true,
    navigation: {
        nextEl: '.services__btn-next',
        prevEl: '.services__btn-prev'
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            centeredSlides: true,
        },
        576: {
            slidesPerView: 2,
        },
        920: {
            slidesPerView: 3,
        },
        1100: {
            slidesPerView: 4,
        }
    }
});

$(document).ready(function() {
    $('a[href="#"]').on('click', function(e) {
        e.preventDefault();
    });
});

var teamSwiper = new Swiper('.team-slider', {
    slidesPerView: 5,
    slidesPerGroup: 1,
    spaceBetween: 41,
    loop: true,
    navigation: {
        nextEl: '.team__btn-next',
        prevEl: '.team__btn-prev'
    },
    breakpoints: {
        320: {
            slidesPerView: 1.5,
        },
        576: {
            slidesPerView: 3,
        },
        920: {
            slidesPerView: 4,
        },
        1100: {
            slidesPerView: 5,
        }
    }
});

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML
 ! (i) необходимо для корректного отображения webp из css
 */
isWebp();

/* Добавление класса touch для HTML если браузер мобильный */
// addTouchClass();

/* Добавление loaded для HTML после полной загрузки страницы */
// addLoadedClass();

/* Модуль для работы с меню (Бургер) */
new BurgerMenu().init();

/**
 *  Библиотека для анимаций
 *  документация: https://michalsnik.github.io/aos
 */
// AOS.init();

/** Параллакс мышей */
// const mousePrlx = new MousePRLX({});

/** Фиксированный header */
headerFixed();

/**
 *  Открытие/закрытие модальных окон
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * И на кнопку, которая вызывает окно так же повешай атрибут data-type="<название окна>"

 * На обертку(враппер) окна добавь класс _overlay-bg
 * На кнопку для закрытия окна добавь класс button-close
 */
togglePopupWindows();

// const tabs = new Tabs('default-tabs', {});

animation();
submitForm(orderForm);
toggleSliderImg();






// gsap.set(".left-content > *", {xPercent: -50, yPercent: -10});
//
// // Set up our scroll trigger
// const ST = ScrollTrigger.create({
//     trigger: ".content-container",
//     start: "top top",
//     end: "bottom bottom",
//     onUpdate: getCurrentSection,
//     pin: ".left-content",
//     scrub: 1,
//     markers: true,
// });
//
// const contentMarkers = gsap.utils.toArray(".contentMarker");
//
// // Set up our content behaviors
// contentMarkers.forEach(marker => {
//     marker.content = document.querySelector(`#${marker.dataset.markerContent}`);
//
//     if(marker.content.tagName === "IMG") {
//         gsap.set(marker.content, {transformOrigin: "center"});
//
//         marker.content.enter = function() {
//             gsap.fromTo(marker.content, {autoAlpha: 0, rotateY: -30}, {duration: 0.3, autoAlpha: 1, rotateY: 0});
//         }
//     }
//
//     marker.content.leave = function() {
//         gsap.to(marker.content, {duration: 0.1, autoAlpha: 0});
//     }
// });
// //
// // // Handle the updated position
// let lastContent;
// function getCurrentSection() {
//     let newContent;
//     const currScroll = scrollY;
//
//     console.log(currScroll)
//
//
//     // Find the current section
//     contentMarkers.forEach((marker, i) => {
//         if(currScroll > marker.offsetTop && currScroll > 207) {
//                 newContent = marker.content;
//         }
//     });
//
//     // If the current section is different than that last, animate in
//     if(newContent
//         && (!newContent.isSameNode(lastContent))) {
//
//         // Fade out last section
//         if(lastContent) {
//             lastContent.leave();
//         }
//
//
//         // Animate in new section
//         newContent.enter();
//
//         lastContent = newContent;
//     }
// }



// learn what all this code means at
// https://www.creativecodingclub.com/bundles/creative-coding-club
// unlock over 250 GSAP lessons today


const details = gsap.utils.toArray(".desktopContentSection:not(:first-child)")
const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)")


gsap.set(photos, {yPercent:101})

const allPhotos = gsap.utils.toArray(".desktopPhoto")


// create
let mm = gsap.matchMedia();

// add a media query. When it matches, the associated function will run
mm.add("(min-width: 600px)", () => {
    ScrollTrigger.create({
        trigger:".alternating-blocks__animations",
        start:"top top",
        end:"bottom bottom",
        pin:".alternating-blocks__right-content"
    });

    details.forEach((detail, index)=> {
        let headline = detail.querySelector("h2")
        let animation = gsap.timeline()
            .to(photos[index], {yPercent:0})
            .set(allPhotos[index], {autoAlpha:0})
        ScrollTrigger.create({
            trigger:headline,
            start:"top 80%",
            end:"top 50%",
            animation:animation,
            scrub:true,
            markers:false
        })
    })
    // return () => { // optional
    //     // custom cleanup code here (runs when it STOPS matching)
    //     console.log("mobile")
    // };
});

