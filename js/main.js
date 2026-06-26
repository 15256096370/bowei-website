/* ============================================
   安徽柏威工业 - 官网交互脚本
   ============================================ */
(function () {
  'use strict';

  /* ---------- 1. Header scroll shadow ---------- */
  const header = document.querySelector('.site-header');
  function onScroll() {
    if (!header) return;
    if (window.scrollY > 20) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- 2. Mobile nav toggle ---------- */
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      this.classList.toggle('open');
      mainNav.classList.toggle('open');
    });
    // Close on link click
    mainNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        navToggle.classList.remove('open');
        mainNav.classList.remove('open');
      });
    });
  }

  /* ---------- 3. Reveal on scroll (IntersectionObserver) ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el, i) {
      el.style.transitionDelay = (i % 6) * 0.06 + 's';
      io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ---------- 4. Animated counters ---------- */
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length && 'IntersectionObserver' in window) {
    const cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        const el = e.target;
        const target = parseFloat(el.getAttribute('data-count'));
        const dur = 1600;
        const start = performance.now();
        const suffix = el.getAttribute('data-suffix') || '';
        const targetStr = target.toString();
        const decimals = targetStr.includes('.') ? targetStr.split('.')[1].length : 0;
        function tick(now) {
          const p = Math.min((now - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = (target * eased).toFixed(decimals) + suffix;
          if (p < 1) requestAnimationFrame(tick);
          else el.textContent = target.toFixed(decimals) + suffix;
        }
        requestAnimationFrame(tick);
        cio.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(function (c) { cio.observe(c); });
  }

  /* ---------- 5. Product / case filter ---------- */
  const filterBtns = document.querySelectorAll('.filter-tabs button');
  if (filterBtns.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        this.classList.add('active');
        const cat = this.getAttribute('data-filter');
        document.querySelectorAll('[data-cat]').forEach(function (item) {
          if (cat === 'all' || item.getAttribute('data-cat') === cat) {
            item.style.display = '';
            requestAnimationFrame(function () { item.classList.add('visible'); });
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  /* ---------- 6. Contact form (Formspree-ready, fallback mailto) ---------- */
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const note = document.querySelector('#form-note');
      // If a Formspree endpoint is configured, use it
      const action = form.getAttribute('action');
      if (action && action.indexOf('formspree.io') > -1) {
        // Real submit (Formspree)
        fetch(action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' }
        }).then(function (r) {
          if (r.ok) {
            form.reset();
            if (note) note.innerHTML = '<span style="color:#16a34a;font-weight:600;">✓ ' + (window.lang === 'en' ? 'Message sent! We will reply within 24 hours.' : '提交成功！我们将在 24 小时内回复您。') + '</span>';
          } else {
            if (note) note.innerHTML = '<span style="color:#dc2626;">' + (window.lang === 'en' ? 'Submit failed, please try again or call us directly.' : '提交失败，请直接致电我们。') + '</span>';
          }
        }).catch(function () {
          if (note) note.innerHTML = '<span style="color:#dc2626;">' + (window.lang === 'en' ? 'Network error. Please call us directly.' : '网络异常，请直接致电我们。') + '</span>';
        });
        return;
      }
      // Fallback: build a mailto link
      const data = new FormData(form);
      const subject = encodeURIComponent(window.lang === 'en' ? 'Website Inquiry' : '网站询盘');
      let body = '';
      data.forEach(function (v, k) { body += k + ': ' + v + '\n'; });
      window.location.href = 'mailto:15256096370@126.com?subject=' + subject + '&body=' + encodeURIComponent(body);
      if (note) note.innerHTML = '<span style="color:#16a34a;font-weight:600;">' + (window.lang === 'en' ? 'Your email client has opened. Thank you!' : '已为您打开邮件客户端，感谢您的咨询！') + '</span>';
      form.reset();
    });
  }

  /* ---------- 7. Year in footer ---------- */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- 8. Current year copyright ---------- */
  document.querySelectorAll('.js-year').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- 9. Page lang marker ---------- */
  window.lang = document.documentElement.getAttribute('lang') || 'zh';
})();
