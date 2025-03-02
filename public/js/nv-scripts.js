// import Swiper from '../../node_modules/swiper';
// import { Navigation, Pagination, Autoplay } from '../../node_modules/swiper/modules';

// import {Swiper} from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js";

let lastScrollY = window.scrollY;

document.addEventListener("DOMContentLoaded", () => {

  // devicePixelRatioAjustment()

  toggleHeaderVisibility();



    const blogDestaqueSlider = document.querySelector(".slider-blog");
    if(blogDestaqueSlider) {
      new Swiper(blogDestaqueSlider, {
        // modules: [Swiper.Navigation, Swiper.Pagination, Swiper.Autoplay ],
        slidesPerView: 1,
        spaceBetween: 0,    
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },   
        speed: 1500,
        autoplay: {
          delay: 4000, 
          disableOnInteraction: false, 
        },
        loop: true, 
      });
    }

    const depoimentosSlider = document.querySelector(".slider-depoimentos");
    if(depoimentosSlider) {
      new Swiper(depoimentosSlider, {
        // modules: [Swiper.Navigation, Swiper.Pagination, Swiper.Autoplay ],
        slidesPerView: 1,
        spaceBetween: 0,    
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },   
        speed: 1500,
        autoplay: {
          delay: 4000, 
          disableOnInteraction: false, 
        },
        loop: true, 
      });
    }    


});






function devicePixelRatioAjustment() {
  const scale = window.devicePixelRatio;
  let scaleValue = 1;
  switch(scale) {
    case 1 : scaleValue = 1;
    break;
    case 1.25 : scaleValue = 1;
    break;   
    case 1.5 : scaleValue = 0.8;
    break;        
    case 1.75 : scaleValue = 0.66;
    break;          
    default: 1  
  }

  document.body.style.zoom = scaleValue


}







const body = document.querySelector("body");
function toggleHeaderVisibility() {
  const mainHeader = document.querySelector(".main-header");
  const isDarkTheme = mainHeader.classList.contains("dark-theme")
  // const pageIsHome = body.classList.contains('page-home');

  // if(pageIsHome) {
  //   mainHeader.classList.add("dark-theme");
  // }

  const headerHeight = document.querySelector(".hero-home")?.clientHeight;
  const novidades  = document.querySelector(".novidades")?.clientHeight;
  const heroHomeHeight = headerHeight + novidades;

  window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
      body.classList.add("is-header-hidden");
    } else {
      body.classList.remove("is-header-hidden");
    }


    if(isDarkTheme) {
      if(window.scrollY > heroHomeHeight) {
        mainHeader.classList.remove("dark-theme");  
      } else {
        mainHeader.classList.add("dark-theme");
      }
    }
    lastScrollY = window.scrollY; 
  });
}


$(function(){
  const mainHeader = document.querySelector(".main-header");


    const headerHeight = document.querySelector(".hero-home")?.clientHeight;
  const novidades  = document.querySelector(".novidades")?.clientHeight;
  const heroHomeHeight = headerHeight + novidades;

  if($(".submenu-toggle").length) {
    $(".submenu-toggle").on('click mouseover', function(e){
        e.preventDefault();
        $(".submenu-toggle").removeClass("opened");
        $(".submenu-wrapper").removeClass("opened")
        $(this).addClass("opened");
        $(this).next(".submenu-wrapper").addClass("opened");
        mainHeader.classList.remove("dark-theme");
    })

    $(".submenu-wrapper").on("mouseleave", function(){


        const pageName = document.body.getAttribute('data-page');
        const isHome = pageName === 'home';


        $(".submenu-toggle").removeClass("opened");
        $(".submenu-wrapper").removeClass("opened")


        if(isHome && window.scrollY < heroHomeHeight) {

          mainHeader.classList.add("dark-theme");
        }

        
    }) 

  }
})

