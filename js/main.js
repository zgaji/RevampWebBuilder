/* Marci Metzger Homes: page behavior (no dependencies) */
(() => {
  'use strict';

  const PHONE = '+12069196886';
  const LISTINGS_URL = 'https://marcimetzger.com/listings';
  // Set to Marci's address to send the contact form by email instead of SMS / compose.
  const EMAIL = '';

  /* ---------- Mobile menu ---------- */
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.getElementById('site-nav');
  if (menuBtn && nav) {
    const setOpen = (open) => {
      menuBtn.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('is-open', open);
    };
    menuBtn.addEventListener('click', () => setOpen(menuBtn.getAttribute('aria-expanded') !== 'true'));
    nav.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) { setOpen(false); menuBtn.focus(); }
    });
    document.addEventListener('click', (e) => {
      if (nav.classList.contains('is-open') && !e.target.closest('.header')) setOpen(false);
    });
  }

  /* ---------- Current section in nav ---------- */
  const navLinks = [...document.querySelectorAll('.nav a')];
  const sectionFor = { '#top': document.querySelector('.hero'), '#search': document.getElementById('search'),
    '#services': document.getElementById('services'), '#about': document.getElementById('about') };
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const hash = Object.keys(sectionFor).find((k) => sectionFor[k] === entry.target);
        navLinks.forEach((a) => {
          if (a.getAttribute('href') === hash) a.setAttribute('aria-current', 'page');
          else a.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.values(sectionFor).forEach((el) => el && io.observe(el));
  }

  /* ---------- Listing search → Marci's live listings ---------- */
  const searchForm = document.getElementById('search-form');
  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      window.open(LISTINGS_URL, '_blank', 'noopener');
    });
    searchForm.querySelectorAll('input[inputmode="numeric"]').forEach((input) => {
      input.addEventListener('input', () => {
        const digits = input.value.replace(/\D/g, '');
        input.value = digits ? '$' + Number(digits).toLocaleString('en-US') : '';
      });
    });
  }

  /* ---------- Gallery lightbox ---------- */
  const dialog = document.getElementById('lightbox');
  const tiles = [...document.querySelectorAll('.tile button')];
  if (dialog && tiles.length) {
    const img = document.getElementById('lightbox-img');
    const tag = document.getElementById('lightbox-tag');
    const count = document.getElementById('lightbox-count');
    let index = 0;
    let opener = null;

    const show = (i) => {
      index = (i + tiles.length) % tiles.length;
      const src = tiles[index].querySelector('img');
      img.src = src.currentSrc || src.src;
      img.alt = src.alt;
      tag.textContent = tiles[index].parentElement.querySelector('.tile__cap').textContent;
      count.textContent = `${index + 1} / ${tiles.length}`;
    };

    tiles.forEach((btn, i) => btn.addEventListener('click', () => {
      opener = btn;
      show(i);
      if (typeof dialog.showModal === 'function') dialog.showModal();
      else window.open(img.src, '_blank', 'noopener');
    }));
    dialog.querySelector('.lightbox__prev').addEventListener('click', () => show(index - 1));
    dialog.querySelector('.lightbox__next').addEventListener('click', () => show(index + 1));
    dialog.querySelector('.lightbox__close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') show(index - 1);
      if (e.key === 'ArrowRight') show(index + 1);
    });
    dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });
    dialog.addEventListener('close', () => opener && opener.focus());

    let startX = null;
    dialog.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
    dialog.addEventListener('touchend', (e) => {
      if (startX === null) return;
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) show(index + (dx < 0 ? 1 : -1));
      startX = null;
    });
  }

  /* ---------- Office hours: open now? (Pahrump is on Pacific time) ---------- */
  const openState = document.getElementById('open-state');
  if (openState && window.Intl) {
    try {
      const hour = Number(new Intl.DateTimeFormat('en-US', { hour: 'numeric', hourCycle: 'h23', timeZone: 'America/Los_Angeles' }).format(new Date()));
      const open = hour >= 8 && hour < 19;
      openState.textContent = open ? 'Open now' : 'Closed now';
      openState.classList.toggle('is-closed', !open);
      openState.hidden = false;
    } catch (_) { /* leave hidden */ }
  }

  /* ---------- Contact form ---------- */
  const form = document.getElementById('message-form');
  if (form) {
    const email = form.elements.email;
    const error = document.getElementById('email-error');
    const composed = document.getElementById('composed');
    const composedText = document.getElementById('composed-text');
    const note = document.getElementById('message-note');
    const isPhone = window.matchMedia('(pointer: coarse)').matches && /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);

    if (EMAIL) note.textContent = 'Send opens your email app with this note addressed to Marci.';
    else if (!isPhone) note.textContent = 'Send prepares your note so you can text it to Marci or call her directly.';

    const validate = () => {
      const v = email.value.trim();
      let msg = '';
      if (!v) msg = 'Add your email so Marci can reply.';
      else if (!email.checkValidity()) msg = 'That email looks incomplete. Check it and try again.';
      error.textContent = msg;
      email.setAttribute('aria-invalid', msg ? 'true' : 'false');
      return !msg;
    };
    email.addEventListener('blur', () => { if (email.value) validate(); });
    email.addEventListener('input', () => { if (email.getAttribute('aria-invalid') === 'true') validate(); });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!validate()) { email.focus(); return; }
      const name = form.elements.name.value.trim();
      const msg = form.elements.message.value.trim();
      const body = [
        `Hi Marci, this is ${name || 'a visitor to your website'}.`,
        msg || "I'd like to talk about buying or selling in Pahrump.",
        `Reply to: ${email.value.trim()}`,
      ].join('\n\n');

      if (EMAIL) {
        window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent('Website message from ' + (name || 'a visitor'))}&body=${encodeURIComponent(body)}`;
      } else if (isPhone) {
        window.location.href = `sms:${PHONE}?&body=${encodeURIComponent(body)}`;
      } else {
        composedText.value = body;
        composed.hidden = false;
        composedText.focus();
        composedText.select();
      }
    });

    const copyBtn = document.getElementById('copy-btn');
    copyBtn && copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(composedText.value);
      } catch (_) {
        composedText.select();
        document.execCommand('copy');
      }
      copyBtn.textContent = 'Copied';
      setTimeout(() => { copyBtn.textContent = 'Copy message'; }, 2000);
    });
  }
})();
