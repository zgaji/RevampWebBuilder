/* Marci Metzger Homes: page behavior (no dependencies) */
(() => {
  'use strict';

  const PHONE = '+12069196886';
  const LISTINGS_URL = 'https://marcimetzger.com/listings';
  // Set to Marci's address to send the contact form by email instead of SMS / compose.
  const EMAIL = '';

  /* ---------- Gate: one photo, seen through the letters and the arch ----------
     The letters and the opening share the photo's coordinates, sized so the
     Spring Mountains ridge runs through the name. */
  const gate = document.querySelector('.gate');
  const gateName = document.querySelector('.gate__name');
  if (gate && gateName) {
    const IMG_W = 2560, IMG_H = 1700;
    const RIDGE = 0.43;   // ridge line, as a fraction of photo height
    const FOCUS_X = 0.47; // horizontal focus
    const align = () => {
      const g = gate.getBoundingClientRect();
      const n = gateName.getBoundingClientRect();
      const W = g.width, H = g.height;
      // peaks rise into the top line; the ridge runs through the lower line
      const targetY = (n.top - g.top) + n.height * 0.5;
      let scale = Math.max(W / IMG_W, H / IMG_H);
      let sh = IMG_H * scale;
      if (targetY - RIDGE * sh > 0) { scale = targetY / (RIDGE * IMG_H); sh = IMG_H * scale; }
      if (targetY + (1 - RIDGE) * sh < H) { scale = (H - targetY) / ((1 - RIDGE) * IMG_H); sh = IMG_H * scale; }
      const sw = IMG_W * scale;
      const x0 = Math.min(0, Math.max(W - sw, W / 2 - sw * FOCUS_X));
      const y0 = targetY - RIDGE * sh;
      gate.style.setProperty('--scene-size', `${sw}px ${sh}px`);
      gate.style.setProperty('--scene-pos', `${x0}px ${y0}px`);
      gateName.style.setProperty('--clip-size', `${sw}px ${sh}px`);
      gateName.style.setProperty('--clip-pos', `${x0 - (n.left - g.left)}px ${y0 - (n.top - g.top)}px`);
    };
    align();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(align);
    if ('ResizeObserver' in window) new ResizeObserver(align).observe(gate);
    else window.addEventListener('resize', align);
  }

  /* ---------- Mobile menu ---------- */
  const menuBtn = document.querySelector('.rail__menu');
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
      if (nav.classList.contains('is-open') && !e.target.closest('.rail')) setOpen(false);
    });
  }

  /* ---------- Current section in nav ---------- */
  const navLinks = [...document.querySelectorAll('.rail__nav a')];
  const sectionFor = { '#top': document.querySelector('.gate'), '#search': document.getElementById('search'),
    '#services': document.getElementById('services'), '#sold': document.getElementById('sold') };
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
      tag.textContent = tiles[index].querySelector('.tile__tag').textContent;
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
