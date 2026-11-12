/**
 * main.js — минимальный vanilla JS для сайта-визитки
 * Функции: переключатель темы + мобильное меню + плавная прокрутка
 */

(function () {
  'use strict';

  // ========================
  //  ТЕМА (светлая / тёмная)
  // ========================
  const themeToggle = document.getElementById('themeToggle');
  const mobileThemeToggle = document.getElementById('mobileThemeToggle');
  const html = document.documentElement;

  /** Прочитать предпочтительную тему из localStorage или prefers-color-scheme */
  function getPreferredTheme() {
    const stored = localStorage.getItem('theme');
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  /** Применить тему */
  function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    // Обновляем label кнопки
    const label = theme === 'dark' ? 'Переключить на светлую тему' : 'Переключить на тёмную тему';
    [themeToggle, mobileThemeToggle].forEach(function (btn) {
      if (btn) btn.setAttribute('aria-label', label);
    });
  }

  // Инициализация при загрузке
  setTheme(getPreferredTheme());

  // Обработчики нажатий
  function toggleTheme() {
    const current = html.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
  }

  if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
  if (mobileThemeToggle) mobileThemeToggle.addEventListener('click', toggleTheme);

  // Отслеживаем системные изменения, если пользователь не зафиксировал тему
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });

  // ======================
  //  МОБИЛЬНОЕ МЕНЮ
  // ======================
  const burgerBtn = document.getElementById('burgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  let menuOpen = false;

  function openMenu() {
    menuOpen = true;
    burgerBtn.setAttribute('aria-expanded', 'true');
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden'; // блокируем скролл фона
  }

  function closeMenu() {
    menuOpen = false;
    burgerBtn.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (burgerBtn) {
    burgerBtn.addEventListener('click', function () {
      menuOpen ? closeMenu() : openMenu();
    });
  }

  // Закрытие по клику на ссылку
  if (mobileMenu) {
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
  }

  // Закрытие по Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menuOpen) closeMenu();
  });

  // ======================
  //  АКТИВНЫЙ ПУНКТ МЕНЮ
  // ======================
  // Подсвечиваем текущий раздел в навигации
  const navLinks = document.querySelectorAll('.nav-links a[href]');
  const currentPath = window.location.pathname;

  navLinks.forEach(function (link) {
    const href = link.getAttribute('href').replace(/\/$/, ''); // убираем trailing slash
    const linkPath = currentPath.replace(/\/$/, '');
    if (href === linkPath || (linkPath === '/' && href === '/')) {
      link.classList.add('active');
    }
  });

  // ======================
  //  ЛЕНИВАЯ АНИМАЦИЯ
  // ======================
  // IntersectionObserver для плавного появления элементов при скролле
  if ('IntersectionObserver' in window) {
    const animateEls = document.querySelectorAll('.animate-in');
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    animateEls.forEach(function (el) {
      el.style.animationPlayState = 'paused';
      observer.observe(el);
    });
  }

})();
