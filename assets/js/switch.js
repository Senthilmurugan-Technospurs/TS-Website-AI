/**
 *  Light Switch @version v0.1.4
 */

(function () {

  let lightSwitch = document.getElementById('myonoffswitch');
  if (!lightSwitch) {
    return;
  }
  else {
    $(".vertical-rule").css("background-color", "#0000001A");
    $(".header-item").css("color", "#000000");
    // $("#technology-stack-list .card").css("background-color", '#FFFFFF')
  }

  lightSwitch.addEventListener("change", (evt) => {
    if (!evt.target.checked) {
      $(".vertical-rule").css("background-color", "rgb(230 230 230 / 60%)");
      $(".header-item").css("color", "white");
      $("#non-active h4").removeClass("text-black")
      $("#address-2-color").removeClass("text-black")
      $("#non-active h4").css("color", "#FFFFFF")
      $("#address-2-color").css("color", "#FFFFFF")
    }
    else {
      $("#address-1-color").css("color", "#EF7717")
      $("#non-active h4").removeClass("text-white")
      $("#address-2-color").removeClass("text-white")
      $("#address-2-color").css("color", "#212529")
      $("#non-active h4").css("color", "#212529")
      $(".vertical-rule").css("background-color", "#0000001A");
      $(".header-item").css("color", "black");

    }
    document.documentElement.dataset.mode = evt.currentTarget.checked ? "light" : "dark";
  });

  /**
   * @function darkmode
   * @summary: changes the theme to 'dark mode' and save settings to local stroage.
   * Basically, replaces/toggles every CSS class that has '-light' class with '-dark'
   */
  function darkMode() {
    document.querySelectorAll('.bg-light-theme').forEach((element) => {
      element.className = element.className.replace(/-light/g, '-dark');
    });
    document.querySelectorAll('.bg-grey-theme').forEach((element) => {
      element.className = element.className.replace(/-grey/g, '-darkgrey');
    });

    document.querySelectorAll('.dark-text').forEach((element) => {
      element.className = element.className.replace(/dark/, 'light');
    });
    document.querySelectorAll('.bg-lightnew-theme').forEach((element) => {
      element.className = element.className.replace(/-lightnew/g, '-darkgreynew');
    });
    //document.body.classList.add('bg-dark');


    // Tables
    var tables = document.querySelectorAll('table');
    for (var i = 0; i < tables.length; i++) {
      // add table-dark class to each table
      tables[i].classList.add('table-dark');
    }

    // set light switch input to true
    if (lightSwitch.checked) {
      lightSwitch.checked = false;
    }
    localStorage.setItem('lightSwitch', 'light');
  }

  /**
   * @function lightmode
   * @summary: changes the theme to 'light mode' and save settings to local stroage.
   */
  function lightMode() {
    document.querySelectorAll('.bg-dark-theme').forEach((element) => {
      element.className = element.className.replace(/-dark/g, '-light');
    });
    document.querySelectorAll('.bg-darkgrey-theme').forEach((element) => {
      element.className = element.className.replace(/-darkgrey/g, '-grey');
    });

    document.querySelectorAll('.light-text').forEach((element) => {
      element.className = element.className.replace(/light/, 'dark');
    });
    document.querySelectorAll('.bg-darkgreynew-theme').forEach((element) => {
      element.className = element.className.replace(/-darkgreynew/g, '-lightnew');
    });
    //document.body.classList.add('bg-light');

    // Tables
    var tables = document.querySelectorAll('table');
    for (var i = 0; i < tables.length; i++) {
      if (tables[i].classList.contains('table-dark')) {
        tables[i].classList.remove('table-dark');
      }
    }

    if (!lightSwitch.checked) {
      lightSwitch.checked = true;
    }
    localStorage.setItem('lightSwitch', 'dark');
  }

  /**
   * @function onToggleMode
   * @summary: the event handler attached to the switch. calling @darkMode or @lightMode depending on the checked state.
   */
  function onToggleMode() {
    if (lightSwitch.checked) {
      lightMode();
    } else {
      darkMode();

    }
  }

  /**
   * @function getSystemDefaultTheme
   * @summary: get system default theme by media query
   */
  function getSystemDefaultTheme() {

    const darkThemeMq = window.matchMedia('(prefers-color-scheme: light)');
    if (darkThemeMq.matches) {
      return 'light';
    }
    return 'dark';
  }

  function setup() {

    var settings = localStorage.getItem('lightSwitch');
    if (settings == null) {
      settings = getSystemDefaultTheme();
    }

    lightSwitch.checked = true;

    lightSwitch.addEventListener('change', onToggleMode);
    onToggleMode();
  }

  setup();
})();
(function () {
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }
  let lightSwitchMobile = document.getElementById('myonoffswitchMobile');
  if (!lightSwitchMobile) {
    return;
  }

  lightSwitchMobile.addEventListener("change", (evt) => {
    $('body').css({
      'overflow': 'unset',
      'pointer-events': 'auto',
    });
    $('#navbar').css({ 'pointer-events': 'auto', 'opacity': '1' })
    select('#navbar').classList.toggle('navbar-mobile')
    $('#navbar').css('background-color', 'rgb(244 244 244 / 0%)');
    $('#navbar-contact').css('background-color', 'rgb(244 244 244 / 0%)')
    document.getElementById('ChangeToggle').classList.toggle('bi-list')
    document.getElementById('ChangeToggle').classList.toggle('bi-x')
    document.getElementById('contact-toggle').classList.remove('bi-list')
    document.getElementById('contact-toggle').classList.remove('bi-x')
    document.getElementById('ChangeToggle').src = "./assets/img/menu-icon.svg";
    document.getElementById('contact-toggle').src = "./assets/img/mob-contact-icon.svg";

    if (!evt.currentTarget.checked) {

      $("#address-header1-mobile").css("color", "#F3CCAC")
      $("#non-active_header-mobile h3").css("color", "#FFFFFF")
      $("#active_header-mobile h3").css("color", "#EF7717")
      $("#address-header2-mobile").css("color", "#DADADA")
      $('.mobile-contact p').css('color', '#DADADA')
      $('.toggle').css('width', 'unset')
      $('.toggle').css('margin-left', '2px')
      $('.toggle').css('margin', '')

    }
    else {
      $("#address-header1-mobile").css("color", "#EF7717E5")
      $("#non-active_header-mobile h3").css("color", "#4A5568")
      $("#active_header-mobile h3").css("color", "#EF7717")
      $("#address-header2-mobile").css("color", "#2D3748")
      $('.mobile-contact p').css('color', '#2D3748')
      $('.toggle').css('width', 'unset')
      $('.toggle').css('margin-left', '')
      $('.toggle').css('margin', '2px')
    }
    $("#mobile-right-menu").addClass('d-none')
    $("#mobile-right-menu").removeClass('d-block')
    $("#mobile-left-menu").addClass('d-none')
    $("#mobile-left-menu").removeClass('d-block')
    document.documentElement.dataset.mode = evt.currentTarget.checked ? "light" : "dark";
    setTimeout(() => {
      serviceAccordian();
      technologyAccordian();
      coreValuesAccordian();
      changeMap(1)
    }, 200);
  });

  /**
   * @function darkmode
   * @summary: changes the theme to 'dark mode' and save settings to local stroage.
   * Basically, replaces/toggles every CSS class that has '-light' class with '-dark'
   */
  function darkMode() {
    document.querySelectorAll('.bg-light-theme').forEach((element) => {
      element.className = element.className.replace(/-light/g, '-dark');
    });
    document.querySelectorAll('.bg-grey-theme').forEach((element) => {
      element.className = element.className.replace(/-grey/g, '-darkgrey');
    });

    document.querySelectorAll('.dark-text').forEach((element) => {
      element.className = element.className.replace(/dark/, 'light');
    });
    document.querySelectorAll('.bg-lightnew-theme').forEach((element) => {
      element.className = element.className.replace(/-lightnew/g, '-darkgreynew');
    });
    //document.body.classList.add('bg-dark');


    // Tables
    var tables = document.querySelectorAll('table');
    for (var i = 0; i < tables.length; i++) {
      // add table-dark class to each table
      tables[i].classList.add('table-dark');
    }

    // set light switch input to true

    if (lightSwitchMobile.checked) {
      lightSwitchMobile.checked = false;
    }
    localStorage.setItem('lightSwitchMobile', 'light');
  }

  /**
   * @function lightmode
   * @summary: changes the theme to 'light mode' and save settings to local stroage.
   */
  function lightMode() {
    document.querySelectorAll('.bg-dark-theme').forEach((element) => {
      element.className = element.className.replace(/-dark/g, '-light');
    });
    document.querySelectorAll('.bg-darkgrey-theme').forEach((element) => {
      element.className = element.className.replace(/-darkgrey/g, '-grey');
    });

    document.querySelectorAll('.light-text').forEach((element) => {
      element.className = element.className.replace(/light/, 'dark');
    });
    document.querySelectorAll('.bg-darkgreynew-theme').forEach((element) => {
      element.className = element.className.replace(/-darkgreynew/g, '-lightnew');
    });
    //document.body.classList.add('bg-light');

    // Tables
    var tables = document.querySelectorAll('table');
    for (var i = 0; i < tables.length; i++) {
      if (tables[i].classList.contains('table-dark')) {
        tables[i].classList.remove('table-dark');
      }
    }
    if (!lightSwitchMobile.checked) {
      lightSwitchMobile.checked = true;
    }
    localStorage.setItem('lightSwitchMobile', 'dark');
  }

  /**
   * @function onToggleMode
   * @summary: the event handler attached to the switch. calling @darkMode or @lightMode depending on the checked state.
   */
  function onToggleMode() {
    if (lightSwitchMobile.checked) {
      lightMode();
    } else {
      darkMode();

    }
  }

  /**
   * @function getSystemDefaultTheme
   * @summary: get system default theme by media query
   */
  function getSystemDefaultTheme() {

    const darkThemeMq = window.matchMedia('(prefers-color-scheme: light)');
    if (darkThemeMq.matches) {
      return 'light';
    }
    return 'dark';
  }

  function setup() {

    var settings = localStorage.getItem('lightSwitchMobile');
    if (settings == null) {
      settings = getSystemDefaultTheme();
    }

    if (settings == 'light') {
      lightSwitchMobile.checked = true;
    }

    lightSwitchMobile.addEventListener('change', onToggleMode);
    onToggleMode();
  }

  setup();
})();
