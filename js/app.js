(() => {
  'use strict';

  const config = window.BDR_CONFIG;
  if (!config) return;

  const { business, hero, supplier, vegetableCategories } = config;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const icon = (name) => {
    const paths = {
      phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z"/>',
      message: '<path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/><path d="M8 9h8M8 13h5"/>',
      map: '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="2.5"/>',
      mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
      copy: '<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
      box: '<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5M12 22V12"/>',
      leaf: '<path d="M11 20A7 7 0 0 1 4 13C4 8 9 4 20 4c0 11-4 16-9 16z"/><path d="M7 17c3-4 6-6 11-9"/>',
      users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
      store: '<path d="M3 9l2-5h14l2 5"/><path d="M5 13v7h14v-7"/><path d="M9 20v-6h6v6"/><path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0"/>',
      truck: '<path d="M10 17h4V5H2v12h3"/><path d="M14 9h4l4 4v4h-3"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="16.5" cy="17.5" r="2.5"/>',
      briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18"/>',
      chef: '<path d="M6 13h12l-1 8H7z"/><path d="M8 13a4 4 0 1 1 2-7.46A4.5 4.5 0 0 1 18 8a4 4 0 0 1 0 5"/>',
      building: '<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2M10 21v-3h4v3"/>',
      farm: '<path d="M3 20h18M4 20c0-7 3-11 8-15 5 4 8 8 8 15M8 20c0-4 1-7 4-10 3 3 4 6 4 10"/>',
      check: '<circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/>',
      arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>'
    };
    return `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${paths[name] || paths.leaf}</svg>`;
  };

  const cleanPhone = (number) => String(number).replace(/\D/g, '');
  const phoneHref = (number) => `tel:+91${cleanPhone(number)}`;
  const whatsappHref = (contact) => `https://wa.me/91${cleanPhone(contact.number)}?text=${encodeURIComponent(contact.whatsappMessage || '')}`;
  const formatPhone = (number) => {
    const n = cleanPhone(number);
    return n.length === 10 ? `${n.slice(0,5)} ${n.slice(5)}` : n;
  };
  const addressText = () => `${business.address.market}, ${business.address.road}, ${business.address.locality}, ${business.address.state} – ${business.address.pincode}`;

  function applyTextData() {
    $$('[data-business-name]').forEach(el => el.textContent = business.name);
    $$('[data-short-name]').forEach(el => el.textContent = business.shortName);
    $$('[data-tagline]').forEach(el => el.textContent = business.tagline);
    $$('[data-owner]').forEach(el => el.textContent = business.owner);
    $$('[data-shop-nos]').forEach(el => el.textContent = business.shopNumbers.join(' • '));
    $$('[data-market]').forEach(el => el.textContent = business.address.market);
    $$('[data-locality]').forEach(el => el.textContent = business.address.locality);
    $$('[data-pincode]').forEach(el => el.textContent = business.address.pincode);
    $$('[data-full-address]').forEach(el => el.textContent = addressText());
    $$('[data-email]').forEach(el => el.textContent = business.email);
    $('[data-hero-eyebrow]').textContent = hero.eyebrow;
    $('[data-hero-title-1]').textContent = hero.titleLine1;
    $('[data-hero-title-2]').textContent = hero.titleLine2;
    $('[data-hero-description]').textContent = business.description;
    $('[data-supplier-title]').textContent = supplier.title;
    $('[data-supplier-message]').textContent = supplier.message;
    $('[data-year]').textContent = new Date().getFullYear();
  }

  function wireActions() {
    $$('[data-wa="bdr"]').forEach(a => { a.href = whatsappHref(business.contacts.bdr); a.target='_blank'; a.rel='noopener'; });
    $$('[data-wa="ramesh"]').forEach(a => { a.href = whatsappHref(business.contacts.ramesh); a.target='_blank'; a.rel='noopener'; });
    $$('[data-call="bdr"]').forEach(a => a.href = phoneHref(business.contacts.bdr.number));
    $$('[data-call="ramesh"]').forEach(a => a.href = phoneHref(business.contacts.ramesh.number));
    $$('[data-call="shop1"]').forEach(a => a.href = phoneHref(business.contacts.shop1.number));
    $$('[data-call="shop2"]').forEach(a => a.href = phoneHref(business.contacts.shop2.number));
    $$('[data-call-shop]').forEach(a => a.href = phoneHref(business.contacts.shop1.number));
    $$('[data-map-link]').forEach(a => { a.href = business.maps; a.target='_blank'; a.rel='noopener'; });
    $$('[data-email-link]').forEach(a => a.href = `mailto:${business.email}?subject=${encodeURIComponent(business.emailSubject)}`);
  }

  function renderHighlights() {
    const items = [
      ['box', 'Wholesale Focus', 'Bulk vegetable supply enquiries'],
      ['map', 'Market Location', 'Nunna Wholesale Market'],
      ['store', 'Shop Numbers', business.shopNumbers.join(' • ')],
      ['phone', 'Direct Contact', 'Phone & WhatsApp enquiry']
    ];
    $('#highlight-grid').innerHTML = items.map(([ic,t,d],i) => `
      <article class="highlight-card reveal reveal-delay-${Math.min(i+1,4)}">
        <div class="icon-box">${icon(ic)}</div><h3>${t}</h3><p>${d}</p>
      </article>`).join('');
  }

  function renderWholesale() {
    const items = [
      ['leaf','Fresh Produce','Fresh vegetables sourced for wholesale requirements.'],
      ['box','Bulk Orders','Suitable for retailers, restaurants, businesses and traders.'],
      ['message','Direct Enquiries','Easy communication for availability and wholesale requirements.'],
      ['users','Supplier Network','Farmers and suppliers can directly discuss supply opportunities.']
    ];
    $('#wholesale-grid').innerHTML = items.map(([ic,t,d],i)=>`<article class="card reveal reveal-delay-${i+1}"><div class="icon-box">${icon(ic)}</div><h3>${t}</h3><p>${d}</p></article>`).join('');
  }

  function renderCategories() {
    $('#categories-grid').innerHTML = vegetableCategories.map((item,i)=>`<article class="category-card reveal reveal-delay-${(i%4)+1}"><img src="${item.image}" loading="lazy" width="640" height="480" alt="Illustrative ${item.name.toLowerCase()} category visual"><h3>${item.name}</h3></article>`).join('');
  }

  function renderWhy() {
    const items = [
      ['leaf','Fresh Focus','Produce-oriented wholesale service.'],
      ['box','Wholesale Convenience','Easy enquiries for bulk requirements.'],
      ['phone','Direct Communication','Speak directly with BDR, Ramesh or shop staff.'],
      ['store','Market Presence',`Located inside ${business.address.market}.`],
      ['users','Supplier Enquiries','Dedicated communication for suppliers and business enquiries.'],
      ['map','Easy Access','Google Maps navigation directly to the market/shop location.']
    ];
    $('#why-grid').innerHTML = items.map(([ic,t,d],i)=>`<article class="card reveal reveal-delay-${(i%3)+1}"><div class="icon-box">${icon(ic)}</div><h3>${t}</h3><p>${d}</p></article>`).join('');
  }

  function renderAudience() {
    const items = [
      ['store','Vegetable Retailers'],['store','Supermarkets'],['chef','Restaurants'],['building','Hotels'],
      ['chef','Caterers'],['box','Traders'],['briefcase','Institutions'],['farm','Suppliers / Farmers']
    ];
    $('#audience-grid').innerHTML = items.map(([ic,t],i)=>`<article class="audience-card reveal reveal-delay-${(i%4)+1}">${icon(ic)}<strong>${t}</strong></article>`).join('');
  }

  function personCard(key) {
    const c = business.contacts[key];
    return `<article class="person-card reveal"><strong>${c.label}</strong><div class="phone-display">${formatPhone(c.number)}</div><div class="inline-actions"><a class="btn btn-small btn-primary" href="${whatsappHref(c)}" target="_blank" rel="noopener">${icon('message')} WhatsApp</a><a class="btn btn-small btn-secondary" href="${phoneHref(c.number)}">${icon('phone')} Call</a></div></article>`;
  }

  function renderSupplierContacts() {
    $('#supplier-contacts').innerHTML = personCard('bdr') + personCard('ramesh');
  }

  function contactRow(key, includeWhatsApp = true) {
    const c = business.contacts[key];
    return `<div class="contact-row reveal"><div><small>${c.label}</small><strong>${formatPhone(c.number)}</strong></div><div class="contact-row-actions"><a class="icon-button" href="${phoneHref(c.number)}" aria-label="Call ${c.label}">${icon('phone')}</a>${includeWhatsApp ? `<a class="icon-button" href="${whatsappHref(c)}" target="_blank" rel="noopener" aria-label="WhatsApp ${c.label}">${icon('message')}</a>` : ''}<button class="icon-button copy-number" type="button" data-copy="${c.number}" aria-label="Copy ${c.label} phone number">${icon('copy')}</button></div></div>`;
  }

  function renderContactPanels() {
    $('#business-contacts').innerHTML = contactRow('bdr') + contactRow('ramesh');
    $('#shop-contacts').innerHTML = contactRow('shop1', false) + contactRow('shop2', false);
  }

  function renderLocationAndFooter() {
    $('[data-address-lines]').innerHTML = `
      <strong>${business.name}</strong>
      <span>Shop No. ${business.shopNumbers.join(', ')}</span>
      <span>${business.address.market}</span>
      <span>${business.address.road}, ${business.address.locality}</span>
      <span>${business.address.state} – ${business.address.pincode}</span>`;

    $('[data-footer-contact]').innerHTML = `
      <a href="${phoneHref(business.contacts.bdr.number)}">BDR: ${formatPhone(business.contacts.bdr.number)}</a>
      <a href="${phoneHref(business.contacts.ramesh.number)}">Ramesh: ${formatPhone(business.contacts.ramesh.number)}</a>
      <a href="mailto:${business.email}">${business.email}</a>
      <span>Shop ${business.shopNumbers.join(' • ')} · ${business.address.locality}, ${business.address.state} – ${business.address.pincode}</span>`;
  }

  function setupCopy() {
    const toast = $('#toast');
    let timer;
    document.addEventListener('click', async (e) => {
      const btn = e.target.closest('.copy-number');
      if (!btn) return;
      const value = btn.dataset.copy;
      try {
        await navigator.clipboard.writeText(value);
      } catch {
        const input = document.createElement('input'); input.value = value; document.body.append(input); input.select(); document.execCommand('copy'); input.remove();
      }
      toast.textContent = 'Number copied'; toast.classList.add('show');
      clearTimeout(timer); timer = setTimeout(()=>toast.classList.remove('show'), 1800);
    });
  }

  function setupNavigation() {
    const header = $('#site-header');
    const toggle = $('#menu-toggle');
    const menu = $('#mobile-menu');
    const navLinks = $$('.nav-link');
    const sections = $$('main section[id]');

    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 16);
    onScroll(); window.addEventListener('scroll', onScroll, { passive:true });

    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      menu.classList.toggle('open', !open);
      document.body.classList.toggle('menu-open', !open);
    });
    menu.addEventListener('click', e => {
      if (e.target.closest('a')) { toggle.setAttribute('aria-expanded','false'); menu.classList.remove('open'); document.body.classList.remove('menu-open'); }
    });

    if ('IntersectionObserver' in window) {
      const sectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
        });
      }, { rootMargin:'-28% 0px -62% 0px', threshold:0 });
      sections.forEach(section => sectionObserver.observe(section));
    }
  }

  function setupReveals() {
    const nodes = $$('.reveal');
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      nodes.forEach(n=>n.classList.add('in-view')); return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('in-view'); observer.unobserve(entry.target); } });
    }, { threshold:.12, rootMargin:'0px 0px -5% 0px' });
    nodes.forEach(n=>observer.observe(n));
  }

  function injectStructuredData() {
    const data = {
      '@context':'https://schema.org',
      '@type':'LocalBusiness',
      name: business.name,
      description: business.description,
      image: 'assets/images/social-preview.webp',
      logo: 'assets/logo/bdr-logo.svg',
      telephone: `+91${business.contacts.bdr.number}`,
      email: business.email,
      address: {
        '@type':'PostalAddress',
        streetAddress:`${business.address.market}, ${business.address.road}`,
        addressLocality:business.address.locality,
        addressRegion:business.address.state,
        postalCode:business.address.pincode,
        addressCountry:'IN'
      },
      hasMap:business.maps
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json'; script.text = JSON.stringify(data);
    document.head.appendChild(script);
  }

  applyTextData();
  renderHighlights();
  renderWholesale();
  renderCategories();
  renderWhy();
  renderAudience();
  renderSupplierContacts();
  renderContactPanels();
  renderLocationAndFooter();
  wireActions();
  setupCopy();
  setupNavigation();
  setupReveals();
  injectStructuredData();
})();
