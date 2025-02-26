document.addEventListener("DOMContentLoaded", () => {


  //  gsap.registerPlugin(ScrollTrigger);


  /* HERO HOME */
  if(document.querySelector('.hero')) {
    const split = new SplitText(".hero h1", { type: "lines" });
    const lines = split.lines;
    const heroHomeTl = gsap.timeline();
    heroHomeTl.from(lines, {opacity: 0, y: 100, duration: 1, stagger: 0.2, ease: "power2.out" })
    heroHomeTl.from(".hero .avatar-item", {opacity: 0, x: 20, duration: 1, stagger: 0.2, ease: "power2.out" }, "-=0.5")
    heroHomeTl.from(".hero .avatares-wrapper + p", {opacity: 0, y: 20, duration: 0.5, ease: "power2.out" }, "-=1")
  }
  /* // HERO HOME */


  // TÍTULOS DE SEÇÕES E DESTAQUES
  const highlightTexts = document.querySelectorAll('.section-highlight-title, .footer-text');
  if(highlightTexts) {
    animateHighlightTexts(highlightTexts)
  }
  // / TÍTULOS DE SEÇÕES E DESTAQUES


  /* PRODUTOS HOME */
  const servicosHome = document.querySelectorAll(".servicos-wrapper .servico");
  if(servicosHome) {

    servicosHome.forEach((servico) => {
    
      const imgWrapper = servico.querySelector(".servico__img-wrapper");
      const img = servico.querySelector(".servico__img");
      const titulo = servico.querySelector(".servico__titulo");
      const descricao = servico.querySelector(".servico__descricao");
      const btn = servico.querySelector(".servico__btn");
    
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: servico,
          start: "top 80%", 
          end: "bottom 20%",
          toggleActions: "play none none none",
          markers: false, 
          
        },
      });
    
      tl.from(imgWrapper, {clipPath: 'inset(0 0 100% 0)', duration: 1 }, 0)
      .from(img, { scale: 1.8, duration: 1 }, 0)
      .from(titulo, { y: 20, opacity: 0, duration: 0.3 }, "-=0.2")
      .from(descricao, { y: 20, opacity: 0, duration: 0.3 }, "-=0.2")
      .fromTo(btn, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3 }, "-=0.2"); 
    
    });
  }
  /* // PRODUTOS HOME */

  // Configura o Intersection Observer
const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {
    const categoria = entry.target.getAttribute("data-servico-categoria");
    if (entry.isIntersecting) {
      categoriasVisiveis.set(categoria, (categoriasVisiveis.get(categoria) || 0) + 1);
    } else {
      categoriasVisiveis.set(categoria, (categoriasVisiveis.get(categoria) || 0) - 1);
    }
    updateMenu();
  });
});

// Observa cada servico para destacar menu
  servicosHome.forEach((servico) => observer.observe(servico));


  // Observa cada produto para destacar menu
  // produtosHome.forEach((produto) => observer.observe(produto));


  /* INDICADORES */
  const indicadores = document.querySelectorAll(".indicador .numero");
  if(indicadores) {
    indicadores.forEach((number) => {
      let finalValue = parseInt(number.dataset.value);
    
      gsap.to(number, {
        innerText: finalValue,
        scrollTrigger: {
          trigger: number,
          start: "top 70%", 
          end: "top 40%", 
          scrub: false,
        },
        y: 30,
        duration: 2,
        ease: "back.out(1.8)",
        snap: { innerText: 1 },
        onUpdate: function () {
          let fullText = Number(number.innerText) < 10 ? `0${number.innerText}` : number.innerText;
          number.innerText = fullText;
        },
      });
    });
  }
  /* // INDICADORES */

  /* DESTAQUES BLOG */
  // const blogDestaques = document.querySelector(".blog-destaque-wrapper");
  const contentWithSlider = document.querySelectorAll('[data-animation="content-with-slider"]');

animateContentWithSlider(contentWithSlider);

  /* // DESTAQUES BLOG */


  /* CARD ÍCONES */
  const cardIcones = document.querySelectorAll(".card-icone");
  if(cardIcones) {
    animateElementsWithScrollTrigger(cardIcones)
  }
  /* // CARD ÍCONES */

    /* ANIMAÇÕES SERVIÇOS */
  const animacoesServicos = $($(".animacoes-servicos:nth-child(3)"),$(".animacoes-servicos:nth-child(1)"),$(".animacoes-servicos:nth-child(2)"));
  if(animacoesServicos) {
    animateElementsWithScrollTrigger(animacoesServicos)
  }
  /* // ANIMAÇÕES SERVIÇOS */


  /* FAQ */
  const faqItems = document.querySelectorAll(".faq-item");
  if(faqItems) {
    // animateFromBottom(faqItems);
  }
  /* // FAQ */  

  const heroBanner = document.querySelectorAll(".hero-area");
  // const heroBannerElements = $(".hero-area .hero-title, .hero-area h1, .hero-area p, .hero-area .btn");
  if(heroBanner) {
    animateHero(heroBanner);
  }


  /* ANIMAÇÃO CORTINA */
  const animacaoImagensCortina = document.querySelectorAll("[data-animation='courtain']");
  if(animacaoImagensCortina) {
    animateCourtain(animacaoImagensCortina, {
      markers: false
    })
  }
  /* // ANIMAÇÃO CORTINA */

    // TRANSIÇÃO DE TEXTO
  const listElements = document.querySelectorAll("[data-animation='color-transition'] > div");
  animateColorTransition(listElements);

  const elementosFaq = document.querySelectorAll(".faq-wrapper .faq-item");
  animateColorTransition(elementosFaq);


  const elementosBaseFAQ = document.querySelectorAll(".accordion .accordion-item");
  animateColorTransition(elementosBaseFAQ);

 

  /* IMAGE COM WRAPPERS */
  const itensAnimatedFromBottom = document.querySelectorAll(".image-wrapper, [data-animation='from-bottom']");
  if(itensAnimatedFromBottom) {
    animateFromBottom(itensAnimatedFromBottom);
  }
  /* // IMAGE COM WRAPPERS */  


  /* Lista */
  const listaItens =  document.querySelectorAll("[data-animation='lista']");
   if(listaItens && listaItens.length > 0) {

    listaItens.forEach((list) => {

      staggerOnEnterViewport(list, {
        scrollTrigger : {
          trigger: list,
          start: "top 70%"
        }
      })
    })
  }
  /* Lista  */






  const listColor = document.querySelectorAll(".grupo-lista-numerica > div");
  textColorTransition(listColor)

  const accordionHeader = document.querySelectorAll(".accordion-header");
  textColorTransition(accordionHeader)
 
  
  const horizontalStickyContent = document.querySelectorAll("[data-animation='horizontal-sticky']");
  animateHorizontalSticky(horizontalStickyContent)


    // ANIMAÇÃO DE CTA
  const callToActions = document.querySelectorAll("[data-animation='call-to-action']");
  animateCTA(callToActions);


  // animarMenuCategoriasServicos()

  const componenteBeneficios = document.querySelectorAll("[data-animation='beneficios']");
  animateBeneficios(componenteBeneficios);


  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });
})




// Menu fixo de categorias
const menuCategorias = document.querySelectorAll(".menu-categorias a");
const categoriasVisiveis = new Map();


menuCategorias.forEach((link) => {
  link.addEventListener("click", (e)=> {
    e.preventDefault();
    const target = e.target.getAttribute("id");
    const targetElement = document.querySelector("[data-servico-categoria="+target+"]");

    gsap.to(window, {
      duration: 1,
      scrollTo: { y: targetElement, offsetY: 100 },
      ease: "Power1.easeInOut",
      onComplete: () => {
        $(".menu-categorias a").removeClass("active");
        $(e.target).addClass("active");
      }
    });


  })
}) 

function updateMenu() {

  const categoriaMaisVisivel = [...categoriasVisiveis.entries()]
    .sort((a, b) => b[1] - a[1]) 
    .map(([categoria]) => categoria)[0];

  menuCategorias.forEach((item) => {
    if (item.getAttribute("id") === categoriaMaisVisivel) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}


/* Animação de elementos a partir do bottom */
function animateFromBottom(elements, options = {}) {
  // Converte elementos para array
  elements = gsap.utils.toArray(elements);


  elements.forEach((element, index) => {
    gsap.fromTo(
      element,
      { y: options.y || 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: options.duration || 1,
        ease: options.ease || "back.out(1.7)",
        scrollTrigger: {
          trigger: element,
          start: options.start || "top 70%",  
          // end: options.end || "bottom top",
          scrub: options.scrub || false,
          stagger: options.stagger || 0.5,    
          markers: options.markers || false,  
        },
      }
    );
  });
  
}

function animateContentWithSlider(contentWithSlider) {

  const contents = gsap.utils.toArray(contentWithSlider);

    if(!contentWithSlider || contentWithSlider.length === 0) {
      return
    }

    contents.forEach((content) => {

      const blogSectionAvatars = $(content).find("[data-section-avatares] .avatar-item");
      const blogSectionTitle = $(content).find("[data-section-title]");
      const blogSectionDescription = $(content).find("[data-section-description]");
      const blogSectionContent = $(content).find("[data-section-main-content]");
      const blogSectionAction = $(content).find(".btn-action");
  
      const tlContent = gsap.timeline({
      scrollTrigger: {
        trigger: content,
        start: "top 70%",  
        // end: "bottom top",
        // onUpdate: () => {
        //   console.log("teste")
        // }
      },
    });
      tlContent.from(blogSectionTitle, {opacity: 0, y: 20, duration: 0.8, ease: "back.out(1.7)"})
                .from(blogSectionContent, { opacity: 0, y: 20, duration: 0.8, ease: "back.out(1.7)"}, "-=0.4")
                .from(blogSectionDescription,  {opacity: 0,  y: 20, duration: 0.8, ease: "back.out(1.7)"}, "-=0.6")
                .from(blogSectionAction,  {opacity: 0,  y: 20, duration: 0.8, ease: "back.out(1.7)"}, "-=0.8")    
                .from(blogSectionAvatars,  {opacity: 0,  x: 20, stagger: 0.3, duration: 0.5, ease: "back.out(1.7)"}, "-=1.5")    
    })
}

function textColorTransition(texts) {
  if (!texts || texts.length === 0) return;

  texts.forEach((text) => {
    ScrollTrigger.create({
      trigger: text,
      start: "top 70%",
      duration: 0.3,
      onEnter: () => {
        text.classList.add("dark-text");
      },
      onLeaveBack: () => {
        text.classList.remove("dark-text");
      }
    });
  });
}




/* Animação de elementos a partir do bottom */
function animateCourtain(elements, options = {}) {
  elements = gsap.utils.toArray(elements);

  elements.forEach((element) => {
    const img = element.querySelectorAll("img");
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: options.start || "top 50%",  
        end: options.end || "bottom 20%",
        scrub: options.scrub || false,
        stagger: options.stagger || 0.1,    
        markers: options.markers || false,
      }
    })

    tl.from(element, {clipPath: 'inset(0 0 100% 0)', duration: 1 }) 
    tl.from(img, {scale: 1.8, duration: 1 }, "-=1") 
  })
  
}


function animateBeneficios(elements) {  

  if(!elements || elements.length === 0) {
    return
  }

  const targets = Array.isArray(elements) ? elements : gsap.utils.toArray(elements);

  targets.forEach((target) => {

    const titulo = target.querySelector("[data-titulo]");
    const conteudo = target.querySelector("[data-conteudo]");
    const listaTitulo = target.querySelector("[data-lista-titulo]");
    const listaItens = target.querySelectorAll("[data-lista] li");
    const imagem = target.querySelector("[data-imagem]");
    
    const elementTl = gsap.timeline({
      scrollTrigger: {
        trigger: target,
        start: "top 70%",  
        end: "bottom top",
      },
    });
    elementTl.from(titulo, {y: 20, opacity: 0, duration: 0.4, ease: 'back.out(1.7)'})
    elementTl.from(conteudo, {y: 20, opacity: 0, duration: 0.4, ease: 'back.out(1.7)'}, "-=0.1")
    elementTl.from(listaTitulo, {y: 20, opacity: 0, duration: 0.4, ease: 'back.out(1.7)'}, "-=0.1")
    elementTl.from(listaItens, {x: 20, opacity: 0, duration: 0.4, stagger: 0.2, ease: 'back.out(1.7)'}, "-=0.1")
    elementTl.from(imagem, {y: 20, opacity: 0, duration: 0.4, ease: 'back.out(1.7)'}, "-=0.1")
  })
}



function animateHighlightTexts(textParents) {

  textParents.forEach((textParent) => {

    const textColor = textParent.getAttribute("class").split(' ').includes("text-highlight-on-dark") ? "light-text" : 'dark-text';

  

    // Divide o texto em linhas
    const splitLines = new SplitText(textParent, { type: "lines" });
    
    // Cria uma timeline principal para animar linha por linha
    const masterTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: textParent,
      start: "top 70%",
      end: "+=500",
      scrub: true,
      toggleActions: "play none none none",
    }
    });
    
    // Para cada linha, cria uma sub-timeline e adiciona à masterTimeline
    splitLines.lines.forEach((line, index) => {
    // Divide cada linha em palavras
    const splitWords = new SplitText(line, { type: "words" });
    
    // Cria a animação para as palavras da linha
    const lineTimeline = gsap.timeline();
    
    lineTimeline.from(splitWords.words, {
      duration: 0.4,
      stagger: {
        each: 0.1,
        onStart: function () {
          this.targets()[0].classList.add(textColor);
        }
      },
      ease: "power2.out",
    
    });
    
    // Adiciona a animação da linha na sequência, uma após a outra
    masterTimeline.add(lineTimeline, index * 0.5);
    });

  })
}


function animateHero(heroBanner, options = {}) {

  heroBanner.forEach((hero) => {
  
      const heroTitle = hero.querySelector(".hero-title, h1");
      const heroContent = hero.querySelector("p");
      const heroAction = hero.querySelector(".btn");
  
        const heroTl = gsap.timeline({
            scrollTrigger: {
              trigger: hero,
              start: options.start || "top 70%",  
              end: options.end || "bottom top",
              scrub: options.scrub || false,
              stagger: options.stagger || 0.5,    
              markers: options.markers || false,  
            },
        });
        heroTl.from(hero, {scale: 1.8, duration: 1})
        heroTl.from(heroTitle, {y: 20, opacity: 0, duration: 0.3}, "-=0.5")
        heroTl.from(heroContent, {y: 20, opacity: 0, duration: 0.3})
        heroTl.fromTo(heroAction, {y: 20, opacity: 0, duration: 0.3}, {y: 0, opacity: 1, duration: 0.3})
  })
}

function staggerOnEnterViewport(elements, options = {}) {
  const {
    duration = 0.5,
    stagger = 0.3,
    fromVars = { opacity: 0, y: 30 },
    toVars = { opacity: 1, y: 0 },
    ease = "back",
    scrollTrigger = {}
  } = options;

  // Garante que 'elements' seja sempre um array, mesmo que seja uma única referência
  const targets = Array.isArray(elements) ? elements : [elements];

  // Define o trigger e start padrão se não fornecidos
  scrollTrigger.trigger = scrollTrigger.trigger || targets[0];
  scrollTrigger.start = scrollTrigger.start || "top 70%";

  // Configura a animação 'from' e 'to'
  const animationFromVars = { ...fromVars };
  const animationToVars = {
    ...toVars,
    duration,
    ease,
    stagger,
    scrollTrigger
  };

  
  // Cria a animação com GSAP
  return gsap.fromTo(targets, animationFromVars, animationToVars);
}

// Função para animar elementos com efeito stagger e disparar a animação via ScrollTrigger
function animateElementsWithScrollTrigger(elements, options) {
  options = options || {};
  var duration = (typeof options.duration !== "undefined") ? options.duration : 0.6;
  var stagger = (typeof options.stagger !== "undefined") ? options.stagger : 0.5;
  var fromVars = options.fromVars || { opacity: 0, y: 20 };
  var ease = options.ease || "back";
  var scrollTriggerOptions = options.scrollTrigger || {};

  // Se 'elements' não for um array, encapsula em um array
  var targets;
  if (!elements.length) {
    targets = [elements];
  } else {
    // Converte NodeList para array (caso seja necessário)
    targets = Array.prototype.slice.call(elements);
  }

  // Define o trigger padrão, se não informado
  if (!scrollTriggerOptions.trigger) {
    scrollTriggerOptions.trigger = targets[0];
  }
  // Define o ponto de início padrão, se não especificado
  if (!scrollTriggerOptions.start) {
    scrollTriggerOptions.start = "top 70%";
  }

  // Monta o objeto de configuração da animação, mesclando as propriedades de 'fromVars'
  var animationVars = {};
  for (var key in fromVars) {
    if (fromVars.hasOwnProperty(key)) {
      animationVars[key] = fromVars[key];
    }
  }
  animationVars.duration = duration;
  animationVars.ease = ease;
  animationVars.stagger = stagger;
  animationVars.scrollTrigger = scrollTriggerOptions;

  // Cria a animação com GSAP
  return gsap.from(targets, animationVars);
}


function animateHorizontalSticky(items) {

  if(!items || !items.length) {
    return
  }

  items.forEach((item) => {

    const itemParent = $(item).parents("[data-animation='horizontal-sticky-wrapper']");
    const itemParentWidth = itemParent.width();

    const computedStyle = getComputedStyle(item);
    const gapValue = computedStyle.getPropertyValue('gap');
    const rawGapValue = parseInt(gapValue,10);

    let totalWidth = 0;
    $(item).children().each(function(index, item){
      totalWidth += $(this).outerWidth() + rawGapValue;
    });  

    const scrollDistance = totalWidth - itemParentWidth - rawGapValue;    

    gsap.to(item, {
      x: -scrollDistance,
      ease: "none",  
      scrollTrigger: {
        trigger: item,
        pin: true,
        
        scrub: true, 
        start: "top 30%", 
        // end: "+=5000",
        markers: false, 
      }
    });
    ScrollTrigger.refresh()
  })
}



function animateColorTransition(elements) {  
  if(!elements || !elements.length) {
    return
  }
  elements.forEach((element) => {
    gsap.to(element,  {
      scrollTrigger: {
        trigger: element,
        start: "top 50%",
        scrub: true,
        stagger: 0.5,    
        markers: false,  
        // toggleClass: "dark-text",  
        // onEnter: () => {
        //   console.log("faq item", element)
        //   element.classList.add("dark-text")
        // },     
        onStart: function () {
          this.targets()[0].classList.add('dark-text');
        },    
      },
    })
  })
  
}


function animateCTA(ctas) {

    const callToActionsList =  gsap.utils.toArray(ctas);

    if(!callToActionsList || callToActionsList.length === 0) {
      return
    }

    callToActionsList.forEach((currentItem) => {
      const currentItemImageWrapper = currentItem.querySelector(".call-to-action__image-wrapper");
      const currentItemConteudo = currentItem.querySelector(".call-to-action__conteudo");
      const currentItemTitulo = currentItem.querySelector(".call-to-action__titulo");
      const currentItemDescricao = currentItem.querySelector(".call-to-action__descricao");
      const currentItemBtn = currentItem.querySelector(".call-to-action__btn");

    
      const tlCTA = gsap.timeline({
          scrollTrigger: {
            trigger: currentItem,
            start:  "top 70%",  
            // end: "bottom top",    
            markers: false,  
          },          
      });    

      tlCTA.from(currentItemImageWrapper, {clipPath: 'inset(0 100% 0 0)',  duration: 1 }) 
      tlCTA.from(currentItemConteudo, {clipPath: 'inset(0 100% 0 0)',  duration: 1 }, 0) 
      tlCTA.from([currentItemTitulo, currentItemDescricao], { y: 20, ease: "back.out(3)", autoAlpha: 0, stagger: 0.3, duration: 0.3}, "-=0.5") 
      tlCTA.fromTo(currentItemBtn, { x: -20, autoAlpha: 0, ease: "back.out(1.7)", duration: 0.3}, { x: 0, autoAlpha: 1}, "-=0.3") 
  
    });


}