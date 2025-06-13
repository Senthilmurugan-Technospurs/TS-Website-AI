

(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }
  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = (e) => {
    let position = window.scrollY + 200
    navbarlinks.forEach((navbarlink, index) => {
      if (!navbarlink.hash) return

      let section = select(navbarlink.hash)
      if (!section) return
      if (navbarlink.hash === "#hero" || navbarlink.hash === "#home") {

        if (position < 800) {
          position = position + 600
        }
      }

      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)
  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 16
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Header fixed top on scroll
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    let headerOffset = selectHeader.offsetTop
    let nextElement = selectHeader.nextElementSibling
    const headerFixed = () => {
      if ((headerOffset - window.scrollY) <= 0) {
        selectHeader.classList.add('fixed-top')
        nextElement.classList.add('scrolled-offset')
      } else {
        selectHeader.classList.remove('fixed-top')
        nextElement.classList.remove('scrolled-offset')
      }
    }
    window.addEventListener('load', headerFixed)
    onscroll(document, headerFixed)
  }

  /**
   * Back to top button
   */
  let matchwidth = window.matchMedia("(max-width: 991px)");
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = (e) => {
      if (matchwidth.matches) {
        if (e.srcElement.activeElement.classList.contains('back-to-top')) {
          $('.back-to-top').css('background', '#D24E00')
          setTimeout(() => {
            $('.back-to-top').css('background', '#ff7f5d')
          }, 200);
        }
      }
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }
  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function (e) {

    $('#navbar').css('background-color', '#F4F4F4')

    let mode = document.documentElement.dataset.mode;
    select('#navbar').classList.toggle('navbar-mobile')
    let classCheck = this.classList.contains('bi-list')

    if (classCheck) {
      $('body').css({
        'overflow': 'unset',
        'pointer-events': 'auto',
      });
      $('#navbar').css({ 'pointer-events': 'auto', 'opacity': '1' })
      $('#navbar').css('background-color', 'transparent')
      this.src = "./assets/img/menu-icon.svg";
      $("#mobile-left-menu").addClass('d-none')
      $("#mobile-left-menu").removeClass('d-block')
    }
    else {
      $('body').css({
        'overflow': 'hidden',
        'pointer-events': 'none',
      });
      $('#navbar').css({ 'pointer-events': 'auto', 'opacity': '1' })
      this.src = "./assets/img/close-icon.svg";
      $("#mobile-left-menu").addClass('text-dark')
      $("#mobile-left-menu").removeClass('text-light')

      $("#mobile-left-menu").removeClass('d-none')
      $("#mobile-left-menu").addClass('d-block')
      if (mode === "dark") {
        $('#navbar').css('background-color', '#202428')
        $('#navbar ul').css('background-color', '#2C333C')
        $('#navbar ul').css('border-radius', '20px')
        this.src = "./assets/img/close-icon-white.svg";
        $("#mobile-left-menu").removeClass('text-dark')
        $("#mobile-left-menu").addClass('text-light')
      }
      else if (mode === "light") {
        $('#navbar').css('background-color', '#F4F4F4')
        $('#navbar ul').css('background-color', '#FFFFFF')
        $('#navbar ul').css('border-radius', '20px')
        this.src = "./assets/img/close-icon.svg";
        $("#mobile-left-menu").addClass('text-dark')
        $("#mobile-left-menu").removeClass('text-light')

      }
    }

    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')

  })
  on('click', '.contact-nav-toggle', function (e) {
    $('#navbar-contact').css('background-color', '#F4F4F4')
    let mode = document.documentElement.dataset.mode;
    select('#navbar-contact').classList.toggle('navbar-mobile')
    let classCheck = this.classList.contains('bi-list')

    if (classCheck) {
      $('#navbar-contact').css({ 'pointer-events': 'auto', 'opacity': '1' })
      $('body').css({
        'overflow': 'unset',
        'pointer-events': 'auto',
      });
      $('#navbar-contact').css('background-color', 'transparent')

      // $('#navbar-contact').css('background-color', 'rgb(244 244 244 / 0%)')
      this.src = "./assets/img/mob-contact-icon.svg";
      $("#mobile-right-menu").addClass('d-none')
      $("#mobile-right-menu").removeClass('d-block')
    }
    else {
      $('body').css({
        'overflow': 'hidden',
        'pointer-events': 'none',
      });
      $('#navbar-contact').css({ 'pointer-events': 'auto', 'opacity': '1' })
      this.src = "./assets/img/close-icon.svg";
      $("#mobile-right-menu").addClass('text-dark')
      $("#mobile-right-menu").removeClass('text-light')
      $("#mobile-right-menu").removeClass('d-none')
      $("#mobile-right-menu").addClass('d-block')
      if (mode === "dark") {

        $('#navbar-contact').css('background-color', '#202428')
        $('#navbar-contact .mobile-contact').css('background-color', '#2C333C')
        $('#navbar-contact .mobile-contact').css('border-radius', '20px')
        this.src = "./assets/img/close-icon-white.svg";
        $("#mobile-right-menu").addClass('text-light')
        $("#mobile-right-menu").removeClass('text-dark')
      }
      else if (mode === "light") {
        $('#navbar-contact').css('background-color', '#F4F4F4')
        $('#navbar-contact .mobile-contact').css('background-color', '#FFFFFF')
        $('#navbar-contact .mobile-contact').css('border-radius', '20px')
        this.src = "./assets/img/close-icon.svg";
        $("#mobile-right-menu").addClass('text-dark')
        $("#mobile-right-menu").removeClass('text-light')
      }
    }

    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function (e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function (e) {
    $('body').css({
      'overflow': 'unset',
      'pointer-events': 'auto',
    });
    $('#navbar').css({ 'pointer-events': 'auto', 'opacity': '1' })
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      $('#navbar').css('background-color', 'rgb(244 244 244 / 0%)')
      $('#navbar-contact').css('background-color', 'rgb(244 244 244 / 0%)')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
        document.getElementById('ChangeToggle').src = "./assets/img/menu-icon.svg";
        $("#mobile-right-menu").addClass('d-none')
        $("#mobile-right-menu").removeClass('d-block')
        document.getElementById('contact-toggle').src = "./assets/img/mob-contact-icon.svg";
        $("#mobile-left-menu").addClass('d-none')
        $("#mobile-left-menu").removeClass('d-block')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function (e) {
        e.preventDefault();
        portfolioFilters.forEach(function (el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()