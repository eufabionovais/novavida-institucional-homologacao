// Variável global para controle do scroll
let lastScrollY = window.scrollY;

// -------------------------
// Definição das funções
// -------------------------

function toggleHeaderVisibility() {
  const mainHeader = document.querySelector(".main-header");
  const isDarkTheme = mainHeader.classList.contains("dark-theme");
  // const pageIsHome = document.body.classList.contains('page-home');
  // if(pageIsHome) {
  //   mainHeader.classList.add("dark-theme");
  // }

  const headerHeight = document.querySelector(".hero-home")?.clientHeight || 0;
  const novidades = document.querySelector(".novidades")?.clientHeight || 0;
  const heroHomeHeight = headerHeight + novidades;

  window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
      document.body.classList.add("is-header-hidden");
    } else {
      document.body.classList.remove("is-header-hidden");
    }

    if (isDarkTheme) {
      if (window.scrollY > heroHomeHeight) {
        mainHeader.classList.remove("dark-theme");
      } else {
        mainHeader.classList.add("dark-theme");
      }
    }
    lastScrollY = window.scrollY;
  });
}

function setAvisoPrivacidadeLinks() {
  const menuLinks = document.querySelectorAll('.item-link');
  const sections = document.querySelectorAll('.item-content');

  if (!menuLinks || !sections) {
    return;
  }

  menuLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - 100;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          menuLinks.forEach(link => link.classList.remove('current'));
          const activeLink = document.querySelector(`.item-link[href="#${entry.target.id}"]`);
          if (activeLink) {
            activeLink.classList.add('current');
          }
        }
      });
    },
    { threshold: 0.3 }
  );

  sections.forEach(section => observer.observe(section));
}

function setFaq() {
  // Accordion para os itens FAQ
  const items = document.querySelectorAll('.accordion-item');
  if (!items || items.length === 0) {
    return;
  }

  items.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');

    // Abre o item ao passar o mouse
    item.addEventListener('mouseover', function () {
      items.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.querySelector('.accordion-content').classList.remove('open');
        }
      });
      content.classList.add('open');
    });

    // Fecha o item ao sair do item inteiro
    item.addEventListener('mouseout', function (event) {
      const relatedTarget = event.relatedTarget;
      if (!relatedTarget || !item.contains(relatedTarget)) {
        content.classList.remove('open');
      }
    });
  });

  // FAQ: clique para abrir/fechar
  const faqItems = document.querySelectorAll(".faq-item");
  if (!faqItems || faqItems.length === 0) {
    return;
  }

  faqItems.forEach(item => {
    item.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      if (!isOpen) {
        item.classList.add("open");
      } else {
        item.classList.remove("open");
      }
    });
  });
}

function setItensTitulos() {
  const itensTitulos = document.querySelectorAll(".item__titulo");
  if (!itensTitulos || itensTitulos.length === 0) {
    return;
  }

  itensTitulos.forEach(item => {
    item.addEventListener("click", () => {
      debugger
      const parentItem = item.closest('.item');
      const isOpen = parentItem.classList.contains("open");
      if (!isOpen) {
        parentItem.classList.add("open");
      } else {
        parentItem.classList.remove("open");
      }
    });
  });
}

function setCurrentYear() {
  const dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();
  const anoElemento = document.querySelector("#ano");
  if (anoElemento) {
    anoElemento.innerHTML = String(anoAtual);
  }
}

function filterBlogPosts() {
  const inputs = document.querySelectorAll('input[name="categorias"]');
  if (!inputs || inputs.length === 0) {
    return;
  }

  const posts = document.querySelectorAll('[data-categoria]');
  const totalPosts = document.querySelector('#totalPosts');
  const textCategoriaSelecionada = document.querySelector('#categoriaSelecionada');

  inputs.forEach(input => {
    input.addEventListener("change", event => {
      const target = event.target;
      const categoriaSelecionada = target.value;
      if (textCategoriaSelecionada) {
        textCategoriaSelecionada.innerHTML = categoriaSelecionada;
      }
      // Se necessário, atualize também o total de posts encontrados
      const totalPostsEncontrados = document.querySelectorAll(`[data-categoria='${categoriaSelecionada}']`).length;

      posts.forEach(post => {
        if (post.getAttribute('data-categoria') !== categoriaSelecionada && categoriaSelecionada !== 'All') {
          post.classList.add('hidden');
        } else {
          post.classList.remove('hidden');
        }
      });
    });
  });
}

function devicePixelRatioAjustment() {
  const scale = window.devicePixelRatio;
  let scaleValue = 1;
  switch (scale) {
    case 1:
    case 1.25:
      scaleValue = 1;
      break;
    case 1.5:
      scaleValue = 0.8;
      break;
    case 1.75:
      scaleValue = 0.66;
      break;
    default:
      scaleValue = 1;
  }
  document.body.style.zoom = scaleValue;
}

// Inicialização dos sliders Swiper
function initSwipers() {
  const blogDestaqueSlider = document.querySelector(".slider-blog");
  if (blogDestaqueSlider) {
    new Swiper(blogDestaqueSlider, {
      // modules: [Swiper.Navigation, Swiper.Pagination, Swiper.Autoplay ],
      slidesPerView: 1,
      spaceBetween: 0,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      speed: 1500,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false
      },
      loop: true
    });
  }

  const depoimentosSlider = document.querySelector(".slider-depoimentos");
  if (depoimentosSlider) {
    new Swiper(depoimentosSlider, {
      // modules: [Swiper.Navigation, Swiper.Pagination, Swiper.Autoplay ],
      slidesPerView: 1,
      spaceBetween: 0,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      speed: 1500,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false
      },
      loop: true
    });
  }

  const swiperNovidades = document.querySelector(".slider-novidades");
  if (swiperNovidades) {
    new Swiper(swiperNovidades, {
      slidesPerView: 1,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });
  }

  const sliderIndicadoresValiosos = document.querySelector(".slider-indicadores-valiosos");
  if (sliderIndicadoresValiosos) {
    new Swiper(sliderIndicadoresValiosos, {
      slidesPerView: 4.10,
      spaceBetween: 16
    });
  }

  const sliderIndicadoresValiososGenesis = document.querySelector(".slider-indicadores-valiosos-genesis");
  if (sliderIndicadoresValiososGenesis) {
    new Swiper(sliderIndicadoresValiososGenesis, {
      slidesPerView: 1,
      spaceBetween: 16,
      breakpoints: {
        768: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 4.10
        }
      }
    });
  }

  const sliderCards = document.querySelector(".slider-cards");
  if (sliderCards) {
    new Swiper(sliderCards, {
      slidesPerView: 1.15,
      autoHeight: true,
      breakpoints: {
        1024: {
          slidesPerView: 3.15
        }
      }
    });
  }
}

// Inicialização dos botões dos fundadores
function initFundadoresButtons() {
  const buttonsFundadores = document.querySelectorAll('.fundador .action');
  if (!buttonsFundadores || buttonsFundadores.length === 0) {
    return;
  }
  buttonsFundadores.forEach(button => {
    button.addEventListener('click', function () {
      const parentDiv = this.closest('.fundador');
      if (parentDiv) {
        parentDiv.classList.toggle('open');
        this.textContent = parentDiv.classList.contains('open') ? 'Fechar' : 'Leia mais';
      }
    });
  });
}

// Inicialização do botão do menu
function initMenuButton() {
  const btnMenu = document.querySelector(".btn-menu");
  if (btnMenu) {
    btnMenu.addEventListener("click", event => {
      event.currentTarget.classList.toggle("open");
    });
  }
}

// Função que agrupa todas as inicializações
function initScripts() {
  // Se necessário, descomente a linha abaixo para ajuste do devicePixelRatio
  // devicePixelRatioAjustment();

  toggleHeaderVisibility();
  initSwipers();
  initFundadoresButtons();
  initMenuButton();
  setFaq();
  setCurrentYear();
  filterBlogPosts();
  setAvisoPrivacidadeLinks();
  setItensTitulos();
}

// -------------------------
// Chamada das funções quando o documento estiver carregado (WordPress)
// -------------------------

jQuery(document).ready(function ($) {
  initScripts();

  // Código jQuery para submenu
  const mainHeader = document.querySelector(".main-header");
  const headerHeight = document.querySelector(".hero-home")?.clientHeight || 0;
  const novidades = document.querySelector(".novidades")?.clientHeight || 0;
  const heroHomeHeight = headerHeight + novidades;

  if ($(".submenu-toggle").length) {
    $(".submenu-toggle").on('click mouseover', function (e) {
      e.preventDefault();
      $(".submenu-toggle").removeClass("opened");
      $(".submenu-wrapper").removeClass("opened");
      $(this).addClass("opened");
      $(this).next(".submenu-wrapper").addClass("opened");
      mainHeader.classList.remove("dark-theme");
    });

    $(".submenu-wrapper").on("mouseleave", function () {
      const pageName = document.body.getAttribute('data-page');
      const isHome = pageName === 'home';
      $(".submenu-toggle").removeClass("opened");
      $(".submenu-wrapper").removeClass("opened");
      if (isHome && window.scrollY < heroHomeHeight) {
        mainHeader.classList.add("dark-theme");
      }
    });
  }
});
