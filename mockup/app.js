/* ==========================================================================
   Cricket's Pool and Spa World — Contact Share Card Application Logic
   Hosted at: poolandspaworld.net (or custom domain)
   Role: Charley Braun — Swimming Pool Department Manager
   ========================================================================== */

(function () {
  'use strict';

  /* ==========================================================================
     DIRECT CONTACT DETAILS & CONFIGURATION
     👉 Cell Phone: (337) 577-9224
     👉 Store Phone: (337) 984-7626
     👉 Location: 1100 Rue du Belier, Lafayette, LA 70506
     ========================================================================== */
  const DIRECT_CONTACT = {
    name: 'Charley Braun',
    avatarInitial: 'CB',
    title: 'Swimming Pool Department Manager',
    company: "Cricket's Pool and Spa World, Inc.",
    companySubtitle: 'The Backyard Place',
    storePhone: '(337) 984-7626',
    storePhoneRaw: '+13379847626',
    directCell: '(337) 577-9224',        // 👈 Charley's direct personal mobile
    directCellRaw: '+13375779224',       // 👈 Format for tel: and vCard
    email: 'charley@poolandspaworld.net', // 👈 Work email
    website: 'https://poolandspaworld.net',
    address: '1100 Rue du Belier, Lafayette, LA 70506',
    hours: 'Mon–Fri 8:00 AM – 4:00 PM • Sat–Sun Closed',
    googleReviews: 'https://maps.google.com/?q=Cricket%27s+Pool+and+Spa+World+1100+Rue+du+Belier+Lafayette+LA',
    facebook: 'https://www.facebook.com/', // 👈 Store Facebook page URL
    instagram: 'https://www.instagram.com/' // 👈 Store Instagram profile URL
  };

  // State: Direct Cell Phone Sharing (Defaults to FALSE for privacy)
  let shareCellPhone = false;

  // Check URL parameters: e.g. ?cell=1, ?vip=1, ?direct=1 or #cell
  try {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('cell') === '1' || urlParams.get('vip') === '1' || urlParams.get('direct') === '1' || window.location.hash === '#cell') {
      shareCellPhone = true;
    }
  } catch (e) {
    console.warn('URL param parse error:', e);
  }

  // --- Two Category Profiles: Swimming Pools vs Spas & Hot Tubs ---
  const CARDS = {
    pools: {
      id: 'pools',
      sector: 'pools',
      name: DIRECT_CONTACT.name,
      avatarInitial: DIRECT_CONTACT.avatarInitial,
      company: DIRECT_CONTACT.company,
      title: 'Swimming Pool Department Manager',
      tagline: 'Computerized water analysis, chemical balancing, Maytronics Dolphin robotic pool cleaners & equipment warranty repairs in Lafayette, LA.',
      location: DIRECT_CONTACT.address,
      chips: [
        { icon: 'droplet', text: 'Free Water Testing' },
        { icon: 'shield', text: 'Dolphin Elite Dealer' },
        { icon: 'tool', text: 'Warranty Center' }
      ],
      socials: [
        { label: 'Store Phone', sub: DIRECT_CONTACT.storePhone, url: `tel:${DIRECT_CONTACT.storePhoneRaw}`, icon: 'phone' },
        { label: 'Store Website', sub: 'poolandspaworld.net', url: DIRECT_CONTACT.website, icon: 'globe' },
        { label: 'Google 4.3★', sub: 'Verified Store Reviews', url: DIRECT_CONTACT.googleReviews, icon: 'star' },
        { label: 'Facebook', sub: "Cricket's Pool & Spa", url: DIRECT_CONTACT.facebook, icon: 'facebook' }
      ],
      links: [
        {
          featured: true,
          label: 'Official Store Website',
          sub: 'poolandspaworld.net — The Backyard Place in Lafayette',
          url: DIRECT_CONTACT.website,
          icon: 'globe',
          badge: 'Official Site'
        },
        {
          isDivider: true,
          label: 'Services & Water Care'
        },
        {
          label: 'Free Computerized Water Testing',
          sub: 'Bring your pool water sample to 1100 Rue du Belier for computerized analysis',
          url: 'https://poolandspaworld.net/services',
          icon: 'droplet',
          badge: 'Free Test'
        },
        {
          label: 'Maytronics Dolphin Cleaners & Service',
          sub: 'Elite dealer in Lafayette — robot sales, diagnostics & certified parts',
          url: 'https://poolandspaworld.net/services',
          icon: 'tool',
          badge: 'Elite Dealer'
        },
        {
          label: 'Pool Chemicals & Sanitizers',
          sub: 'Poolife chlorine, shock, algaecides & Hayward salt cell systems',
          url: 'https://poolandspaworld.net/poolife',
          icon: 'droplet',
          badge: 'Supplies'
        },
        {
          label: 'Equipment Warranty & Repair Center',
          sub: 'Authorized service: Maytronics, Hayward, Pentair, Jandy & Polaris',
          url: 'https://poolandspaworld.net/services',
          icon: 'tool',
          badge: 'Service'
        },
        {
          isDivider: true,
          label: 'Store Info & Reviews'
        },
        {
          label: 'Store Location, Hours & Google Reviews',
          sub: '1100 Rue du Belier, Lafayette, LA 70506 • 4.3★ Verified',
          url: DIRECT_CONTACT.googleReviews,
          icon: 'star',
          channelClass: 'link--google',
          badge: '4.3 ★'
        },
        {
          label: 'Cricket’s Pool & Spa Facebook Page',
          sub: 'Follow for store promotions, maintenance guides & updates',
          url: DIRECT_CONTACT.facebook,
          icon: 'facebook',
          channelClass: 'link--facebook',
          badge: 'Connect'
        }
      ],
      defaultCategory: 'Water Testing & Chemicals'
    },

    spas: {
      id: 'spas',
      sector: 'spas',
      name: DIRECT_CONTACT.name,
      avatarInitial: DIRECT_CONTACT.avatarInitial,
      company: DIRECT_CONTACT.company,
      title: 'Spa & Hot Tub Specialist',
      tagline: 'Luxury hydrotherapy, energy-efficient plug-and-play spas, and Sirona spa water care systems in Lafayette, LA.',
      location: DIRECT_CONTACT.address,
      chips: [
        { icon: 'spa', text: 'FreeFlow & Garden Leisure' },
        { icon: 'droplet', text: 'Sirona Spa Care' },
        { icon: 'sun', text: 'Showroom Displays' }
      ],
      socials: [
        { label: 'Store Phone', sub: DIRECT_CONTACT.storePhone, url: `tel:${DIRECT_CONTACT.storePhoneRaw}`, icon: 'phone' },
        { label: 'Spas Showroom', sub: 'poolandspaworld.net/spas', url: 'https://poolandspaworld.net/swimming-pool-products/spas', icon: 'spa' },
        { label: 'Google 4.3★', sub: 'Verified Store Reviews', url: DIRECT_CONTACT.googleReviews, icon: 'star' },
        { label: 'Facebook', sub: "Cricket's Pool & Spa", url: DIRECT_CONTACT.facebook, icon: 'facebook' }
      ],
      links: [
        {
          featured: true,
          label: 'Hot Tubs & Spas Showroom',
          sub: 'poolandspaworld.net/swimming-pool-products/spas — Explore models',
          url: 'https://poolandspaworld.net/swimming-pool-products/spas',
          icon: 'spa',
          badge: 'Showroom'
        },
        {
          isDivider: true,
          label: 'Spa Brands & Water Care'
        },
        {
          label: 'FreeFlow Spas Collection',
          sub: 'Plug-and-play, durable rotomolded energy-efficient hot tubs',
          url: 'https://poolandspaworld.net/swimming-pool-products/spas',
          icon: 'sun',
          badge: 'FreeFlow'
        },
        {
          label: 'Garden Leisure Luxury Spas',
          sub: 'Premium hydrotherapy jets, ergonomic seating & LED lighting',
          url: 'https://poolandspaworld.net/swimming-pool-products/spas',
          icon: 'spa',
          badge: 'Garden Leisure'
        },
        {
          label: 'Sirona Spa Care System',
          sub: 'Specialized gentle spa sanitizers, water clarity & balancing',
          url: 'https://poolandspaworld.net/sirona',
          icon: 'droplet',
          badge: 'Sirona'
        },
        {
          isDivider: true,
          label: 'Visit Showroom'
        },
        {
          label: 'Showroom Hours & Directions',
          sub: 'Mon–Fri 8:00 AM – 4:00 PM • 1100 Rue du Belier, Lafayette',
          url: DIRECT_CONTACT.googleReviews,
          icon: 'pin',
          channelClass: 'link--google',
          badge: 'Visit'
        },
        {
          label: 'Cricket’s Pool & Spa Facebook Page',
          sub: 'Connect with Cricket’s Pool and Spa World on Facebook',
          url: DIRECT_CONTACT.facebook,
          icon: 'facebook',
          channelClass: 'link--facebook',
          badge: 'Connect'
        }
      ],
      defaultCategory: 'Spas & Hot Tubs'
    }
  };

  // State
  let currentCardId = 'pools';
  let isEventMode = false;
  let activeEventName = 'Acadiana Home & Garden Show';
  let selectedDateObj = null;
  let selectedTimeSlot = null;

  // DOM elements
  const profileName = document.getElementById('profile-name');
  const profileAvatar = document.getElementById('profile-avatar');
  const profileCompany = document.getElementById('profile-company');
  const profileTitle = document.getElementById('profile-title');
  const profileLocation = document.getElementById('profile-location');
  const chipsContainer = document.getElementById('chips-container');
  const linksContainer = document.getElementById('links-container');
  const eventBanner = document.getElementById('event-banner');
  const eventNameEl = document.getElementById('event-name');
  const toggleEvent = document.getElementById('toggle-event');
  const exchangeTagNote = document.getElementById('exchange-tag-note');
  const tagNoteText = document.getElementById('tag-note-text');
  const vcfRawPreview = document.getElementById('vcf-raw-preview');
  const vcfFieldsList = document.getElementById('vcf-fields-list');

  // Cell toggle DOM elements
  const toggleShareCell = document.getElementById('toggle-share-cell');
  const cellToggleCard = document.getElementById('cell-toggle-card');
  const cellBadge = document.getElementById('cell-badge');
  const cellDesc = document.getElementById('cell-desc');
  const quickCall = document.getElementById('quick-call');
  const quickCallLabel = document.getElementById('quick-call-label');
  const quickText = document.getElementById('quick-text');
  const quickTextLabel = document.getElementById('quick-text-label');
  const saveVcardLabel = document.getElementById('save-vcard-label');

  // SVG icon library
  function iconSvg(name) {
    const icons = {
      globe: '<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
      droplet: '<svg class="icon" viewBox="0 0 24 24"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>',
      tool: '<svg class="icon" viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
      calendar: '<svg class="icon" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
      star: '<svg class="icon" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
      shield: '<svg class="icon" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
      spa: '<svg class="icon" viewBox="0 0 24 24"><path d="M12 3a9 9 0 0 0-9 9c0 3.87 2.45 7.17 5.9 8.44.4.08.55-.17.55-.38v-1.36c-2.4.52-2.9-1.16-2.9-1.16-.39-1-.96-1.27-.96-1.27-.79-.54.06-.53.06-.53.87.06 1.33.9 1.33.9.77 1.33 2.03.95 2.52.72.08-.56.3-.95.55-1.16-1.92-.22-3.94-.96-3.94-4.28 0-.95.34-1.72.9-2.33-.09-.22-.39-1.1.09-2.3 0 0 .73-.23 2.39.89a8.3 8.3 0 0 1 4.35 0c1.66-1.12 2.39-.89 2.39-.89.48 1.2.18 2.08.09 2.3.56.61.9 1.38.9 2.33 0 3.33-2.03 4.05-3.96 4.27.31.27.59.8.59 1.62v2.4c0 .22.15.47.56.38A9.01 9.01 0 0 0 21 12a9 9 0 0 0-9-9z"/></svg>',
      sun: '<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',
      pin: '<svg class="icon" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
      phone: '<svg class="icon" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
      mail: '<svg class="icon" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
      facebook: '<svg class="icon" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
      instagram: '<svg class="icon" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',
      arrow: '<svg class="icon link__arrow" viewBox="0 0 24 24"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>'
    };
    return icons[name] || icons.globe;
  }

  // --- Dynamic On-Demand Cell Phone UI Updater ---
  function updateCellShareUI() {
    if (toggleShareCell) {
      toggleShareCell.checked = shareCellPhone;
    }

    if (shareCellPhone) {
      if (cellToggleCard) cellToggleCard.classList.add('is-active');
      if (cellBadge) cellBadge.textContent = 'Direct Cell Active';
      if (cellDesc) cellDesc.textContent = `Direct cell ${DIRECT_CONTACT.directCell} is unlocked for vCard download and 1-tap call/text.`;

      if (quickCall) {
        quickCall.href = `tel:${DIRECT_CONTACT.directCellRaw}`;
        quickCall.setAttribute('aria-label', `Call Charley's Cell ${DIRECT_CONTACT.directCell}`);
      }
      if (quickCallLabel) quickCallLabel.textContent = 'Call Cell';

      if (quickText) {
        quickText.href = `sms:${DIRECT_CONTACT.directCellRaw}?&body=Hi%20Charley,%20connecting%20via%20your%20direct%20contact%20card...`;
        quickText.setAttribute('aria-label', `Text Charley's Cell ${DIRECT_CONTACT.directCell}`);
      }
      if (quickTextLabel) quickTextLabel.textContent = 'Text Cell';

      if (saveVcardLabel) saveVcardLabel.textContent = 'Save Contact + Direct Cell (.vcf)';
    } else {
      if (cellToggleCard) cellToggleCard.classList.remove('is-active');
      if (cellBadge) cellBadge.textContent = 'Store Only';
      if (cellDesc) cellDesc.textContent = `Direct mobile hidden. Only store/office phone ${DIRECT_CONTACT.storePhone} is shared.`;

      if (quickCall) {
        quickCall.href = `tel:${DIRECT_CONTACT.storePhoneRaw}`;
        quickCall.setAttribute('aria-label', `Call Store ${DIRECT_CONTACT.storePhone}`);
      }
      if (quickCallLabel) quickCallLabel.textContent = 'Call Store';

      if (quickText) {
        quickText.href = `sms:${DIRECT_CONTACT.storePhoneRaw}?&body=Hi%20Charley,%20I%20saw%20your%20contact%20card%20from%20Cricket's%20Pool%20and%20wanted%20to%20ask%20about...`;
        quickText.setAttribute('aria-label', 'Text Inquiries');
      }
      if (quickTextLabel) quickTextLabel.textContent = 'Text';

      if (saveVcardLabel) saveVcardLabel.textContent = 'Save Contact (.vcf)';
    }

    renderVcfFieldsList();
    updateVcfPreviewText();
    renderQrCode();
  }

  if (toggleShareCell) {
    toggleShareCell.addEventListener('change', (e) => {
      shareCellPhone = e.target.checked;
      updateCellShareUI();
      if (shareCellPhone) {
        showToast(`Direct cell ${DIRECT_CONTACT.directCell} unlocked for this contact!`);
      } else {
        showToast('Cell hidden — sharing store phone only');
      }
    });
  }

  // --- Render Profile Card ---
  function renderCard(cardId) {
    const card = CARDS[cardId];
    if (!card) return;
    currentCardId = cardId;

    if (profileName) profileName.textContent = card.name;
    if (profileAvatar) profileAvatar.textContent = card.avatarInitial;
    if (profileCompany) profileCompany.textContent = card.company;
    if (profileTitle) profileTitle.textContent = card.title;
    if (profileLocation) profileLocation.textContent = card.location;

    if (card.sector === 'spas') {
      if (profileAvatar) profileAvatar.classList.add('avatar--spa');
    } else {
      if (profileAvatar) profileAvatar.classList.remove('avatar--spa');
    }

    // Chips
    if (chipsContainer) {
      chipsContainer.innerHTML = card.chips.map(c => `
        <span class="chip">${iconSvg(c.icon)} ${c.text}</span>
      `).join('');
    }

    // Linktree Links List (Prioritizing external platforms & portals)
    if (linksContainer) {
      linksContainer.innerHTML = card.links.map(l => {
        if (l.isDivider) {
          return `
            <div class="links-divider" role="separator">
              <span>${l.label}</span>
            </div>
          `;
        }

        const iconHtml = `<span class="link__icon">${iconSvg(l.icon)}</span>`;
        const textHtml = `
          <span class="link__text">
            <strong class="link__label">${l.label}</strong>
            <span class="link__sub">${l.sub}</span>
          </span>
        `;
        const badgeClass = l.badge === 'Official Site' ? 'link__badge--cyan' : (l.badge === '4.3 ★' ? 'link__badge--star' : (card.sector === 'spas' ? 'link__badge--teal' : 'link__badge--cyan'));
        const badgeHtml = l.badge ? `<span class="link__badge ${badgeClass}">${l.badge}</span>` : '';
        const arrowHtml = iconSvg('arrow');

        const classes = ['link'];
        if (l.featured) classes.push('link--featured');
        if (card.sector === 'spas' && !l.featured) classes.push('link--spa');
        if (l.channelClass) classes.push(l.channelClass);

        return `
          <a href="${l.url}" target="_blank" rel="noopener" class="${classes.join(' ')}">
            ${iconHtml}${textHtml}${badgeHtml}${arrowHtml}
          </a>
        `;
      }).join('');
    }

    // Update UI elements based on state
    updateCellShareUI();
  }

  // --- Category Switcher Tabs ---
  const tabPools = document.getElementById('tab-pools');
  const tabSpas = document.getElementById('tab-spas');

  if (tabPools && tabSpas) {
    tabPools.addEventListener('click', () => {
      tabPools.setAttribute('aria-selected', 'true');
      tabSpas.setAttribute('aria-selected', 'false');
      renderCard('pools');
    });

    tabSpas.addEventListener('click', () => {
      tabSpas.setAttribute('aria-selected', 'true');
      tabPools.setAttribute('aria-selected', 'false');
      renderCard('spas');
    });
  }

  // --- Event / Expo Mode Toggle ---
  if (toggleEvent) {
    toggleEvent.addEventListener('change', (e) => {
      isEventMode = e.target.checked;
      if (eventBanner) eventBanner.classList.toggle('is-on', isEventMode);
      if (exchangeTagNote) exchangeTagNote.classList.toggle('is-on', isEventMode);
      if (isEventMode) {
        showToast(`Event Mode Active: Tagging contacts with "${activeEventName}"`);
      }
      updateVcfPreviewText();
    });
  }

  // --- vCard 3.0 Generation & Direct Download ---
  function buildVCardText() {
    const card = CARDS[currentCardId];
    const eventNote = isEventMode ? ` Met at: ${activeEventName}.` : '';

    const lines = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'N:Braun;Charley;;;',
      `FN:${DIRECT_CONTACT.name}`,
      `ORG:${DIRECT_CONTACT.company}`,
      `TITLE:${card.title}`
    ];

    if (shareCellPhone) {
      lines.push(`TEL;TYPE=CELL,VOICE,PREF:${DIRECT_CONTACT.directCellRaw}`);
      lines.push(`TEL;TYPE=WORK,VOICE:${DIRECT_CONTACT.storePhoneRaw}`);
    } else {
      lines.push(`TEL;TYPE=WORK,VOICE,PREF:${DIRECT_CONTACT.storePhoneRaw}`);
    }

    lines.push(`EMAIL;TYPE=WORK,INTERNET,PREF:${DIRECT_CONTACT.email}`);
    lines.push(`URL;TYPE=WORK:${DIRECT_CONTACT.website}`);
    lines.push('ADR;TYPE=WORK:;;1100 Rue du Belier;Lafayette;LA;70506;USA');

    const phoneNote = shareCellPhone
      ? `Direct Cell: ${DIRECT_CONTACT.directCell}. Store Phone: ${DIRECT_CONTACT.storePhone}.`
      : `Store Phone: ${DIRECT_CONTACT.storePhone}.`;

    lines.push(`NOTE:Charley Braun — Swimming Pool Department Manager at Cricket's Pool and Spa World, Inc. (The Backyard Place). Free computerized water analysis, Maytronics Dolphin robotic pool cleaners, Hayward, Pentair, Jandy, Polaris warranty center, chemicals, and hot tubs. ${phoneNote} Address: 1100 Rue du Belier, Lafayette, LA 70506.${eventNote}`);

    const cats = shareCellPhone
      ? 'CATEGORIES:Swimming Pools,Pool Supplies,Water Testing,VIP Contact,Hot Tubs,Cricket\'s Pool and Spa World'
      : 'CATEGORIES:Swimming Pools,Pool Supplies,Water Testing,Equipment,Hot Tubs,Cricket\'s Pool and Spa World';
    lines.push(cats);
    lines.push('REV:' + new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z');
    lines.push('END:VCARD');

    return lines.join('\r\n');
  }

  function generateVCard() {
    const vcfData = buildVCardText();
    const blob = new Blob([vcfData], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    const suffix = shareCellPhone ? 'VIP_Direct' : 'Store';
    a.download = `Charley_Braun_Crickets_Pool_${suffix}.vcf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    if (shareCellPhone) {
      showToast('Contact (.vcf) with Direct Cell downloaded!');
    } else {
      showToast('Store Contact (.vcf) downloaded — tap to save!');
    }
  }

  function updateVcfPreviewText() {
    if (vcfRawPreview) {
      vcfRawPreview.textContent = buildVCardText();
    }
  }

  function renderVcfFieldsList() {
    if (!vcfFieldsList) return;
    const cardTitle = CARDS[currentCardId] ? CARDS[currentCardId].title : DIRECT_CONTACT.title;

    const cellRow = shareCellPhone
      ? `<li>${iconSvg('phone')} <span><strong>Direct Cell:</strong> ${DIRECT_CONTACT.directCell} <em style="color:var(--accent-cyan-hover); font-style:normal; font-weight:700;">(Included on demand)</em></span></li>`
      : `<li>${iconSvg('phone')} <span style="opacity:0.65;"><strong>Direct Cell:</strong> <em>Hidden (Toggled off by default)</em></span></li>`;

    vcfFieldsList.innerHTML = `
      <li>${iconSvg('star')} <span><strong>Full Name:</strong> ${DIRECT_CONTACT.name}</span></li>
      <li>${iconSvg('globe')} <span><strong>Company:</strong> ${DIRECT_CONTACT.company}</span></li>
      <li>${iconSvg('shield')} <span><strong>Title:</strong> ${cardTitle}</span></li>
      ${cellRow}
      <li>${iconSvg('phone')} <span><strong>Store Phone:</strong> ${DIRECT_CONTACT.storePhone} (Office / Store)</span></li>
      <li>${iconSvg('mail')} <span><strong>Email:</strong> ${DIRECT_CONTACT.email}</span></li>
      <li>${iconSvg('globe')} <span><strong>Website:</strong> poolandspaworld.net</span></li>
      <li>${iconSvg('pin')} <span><strong>Address:</strong> ${DIRECT_CONTACT.address}</span></li>
    `;
  }

  const btnSaveTop = document.getElementById('btn-save-vcard-top');
  const btnSaveDock = document.getElementById('btn-save-vcard');
  const btnDownloadVcfFromSheet = document.getElementById('btn-download-vcf-from-sheet');

  if (btnSaveTop) btnSaveTop.addEventListener('click', generateVCard);
  if (btnSaveDock) btnSaveDock.addEventListener('click', generateVCard);
  if (btnDownloadVcfFromSheet) btnDownloadVcfFromSheet.addEventListener('click', generateVCard);

  // --- Bottom Sheet Controls ---
  function openSheet(id) {
    const sheet = document.getElementById(id);
    if (!sheet) return;
    sheet.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeSheet(id) {
    const sheet = document.getElementById(id);
    if (!sheet) return;
    sheet.classList.remove('is-open');
    if (!document.querySelector('.sheet.is-open')) {
      document.body.style.overflow = '';
    }
  }

  document.querySelectorAll('[data-close]').forEach(btn => {
    btn.addEventListener('click', () => {
      closeSheet(btn.dataset.close);
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.sheet.is-open').forEach(s => s.classList.remove('is-open'));
      const shareMode = document.getElementById('share-mode');
      if (shareMode) shareMode.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  });

  const btnOpenVcfInfo = document.getElementById('btn-open-vcf-info');
  if (btnOpenVcfInfo) {
    btnOpenVcfInfo.addEventListener('click', () => {
      updateCellShareUI();
      openSheet('sheet-vcf-info');
    });
  }

  // --- Two-Way Customer Lead Exchange ---
  const formExchange = document.getElementById('form-exchange');
  const exchangeSuccess = document.getElementById('exchange-success');

  function selectExchangeCategory(categoryName) {
    document.querySelectorAll('.pills .pill').forEach(pill => {
      const isMatch = pill.dataset.cat === categoryName;
      pill.setAttribute('aria-pressed', isMatch);
    });
  }

  document.querySelectorAll('.pills .pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.pills .pill').forEach(p => p.setAttribute('aria-pressed', 'false'));
      pill.setAttribute('aria-pressed', 'true');
    });
  });

  if (formExchange) {
    formExchange.addEventListener('submit', (e) => {
      e.preventDefault();
      const activePill = document.querySelector('.pills .pill[aria-pressed="true"]');
      const lead = {
        name: document.getElementById('ex-name').value.trim(),
        email: document.getElementById('ex-email').value.trim(),
        phone: document.getElementById('ex-phone').value.trim(),
        poolInfo: document.getElementById('ex-company').value.trim(),
        category: activePill ? activePill.dataset.cat : 'General Inquiry',
        note: document.getElementById('ex-note').value.trim(),
        card: currentCardId,
        event: isEventMode ? activeEventName : null,
        timestamp: new Date().toISOString()
      };

      try {
        const stored = JSON.parse(localStorage.getItem('crickets_leads') || '[]');
        stored.push(lead);
        localStorage.setItem('crickets_leads', JSON.stringify(stored));
      } catch (err) {
        console.warn('Storage error:', err);
      }

      formExchange.style.display = 'none';
      exchangeSuccess.style.display = 'block';
      showToast(`Details sent for ${lead.name}`);
    });
  }

  function openExchangeModal() {
    formExchange.style.display = 'grid';
    exchangeSuccess.style.display = 'none';
    formExchange.reset();
    selectExchangeCategory(CARDS[currentCardId].defaultCategory);
    openSheet('sheet-exchange');
  }

  // --- Water Testing & Service Request Calendar ---
  const calendarDays = document.getElementById('calendar-days');
  const calendarTimes = document.getElementById('calendar-times');
  const formBooking = document.getElementById('form-booking');
  const bookingSuccess = document.getElementById('booking-success');
  const bookingFormWrap = document.getElementById('booking-form-wrap');
  const quickService = document.getElementById('quick-service');

  function buildCalendarDays() {
    if (!calendarDays) return;
    const days = [];
    const today = new Date();
    for (let i = 0; i < 10; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      days.push(d);
    }

    const DOW = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    calendarDays.innerHTML = days.map((d, idx) => {
      const dow = DOW[d.getDay()];
      const isWeekend = d.getDay() === 0 || d.getDay() === 6;
      const num = d.getDate();
      const isSelected = idx === 1;
      return `
        <button type="button" class="day" role="radio" aria-checked="${isSelected}" aria-pressed="${isSelected}" data-date="${d.toISOString()}" data-dow="${dow}" data-weekend="${isWeekend}">
          <span class="day__dow">${dow}</span>
          <span class="day__num">${num}</span>
          <span class="day__tag">${isWeekend ? 'Closed' : '8am–4pm'}</span>
        </button>
      `;
    }).join('');

    calendarDays.querySelectorAll('.day').forEach(b => {
      b.addEventListener('click', () => {
        calendarDays.querySelectorAll('.day').forEach(x => {
          x.setAttribute('aria-checked', 'false');
          x.setAttribute('aria-pressed', 'false');
        });
        b.setAttribute('aria-checked', 'true');
        b.setAttribute('aria-pressed', 'true');
        selectedDateObj = new Date(b.dataset.date);
        buildTimeSlots(b.dataset.weekend === 'true');
      });
    });

    const firstActive = calendarDays.querySelector('.day[aria-pressed="true"]');
    if (firstActive) {
      selectedDateObj = new Date(firstActive.dataset.date);
      buildTimeSlots(firstActive.dataset.weekend === 'true');
    }
  }

  function buildTimeSlots(isWeekend) {
    if (!calendarTimes) return;
    if (isWeekend) {
      calendarTimes.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 14px; text-align: center; color: var(--text-dim); background: var(--bg-card); border-radius: var(--radius-md);">
          Store closed on weekends. Please select Mon–Fri (8:00 AM – 4:00 PM).
        </div>
      `;
      selectedTimeSlot = null;
      return;
    }

    const slots = [
      { t: '8:30 AM', sub: 'Morning Drop-off' },
      { t: '10:00 AM', sub: 'Water Testing' },
      { t: '11:30 AM', sub: 'Diagnostics' },
      { t: '1:00 PM', sub: 'Afternoon Check' },
      { t: '2:30 PM', sub: 'Equipment Service' },
      { t: '3:30 PM', sub: 'End-of-Day' }
    ];

    calendarTimes.innerHTML = slots.map((s, idx) => `
      <button type="button" class="time" role="radio" aria-checked="${idx === 0}" aria-pressed="${idx === 0}" data-time="${s.t}">
        ${s.t}
      </button>
    `).join('');

    selectedTimeSlot = slots[0].t;

    calendarTimes.querySelectorAll('.time').forEach(t => {
      t.addEventListener('click', () => {
        calendarTimes.querySelectorAll('.time').forEach(x => {
          x.setAttribute('aria-checked', 'false');
          x.setAttribute('aria-pressed', 'false');
        });
        t.setAttribute('aria-checked', 'true');
        t.setAttribute('aria-pressed', 'true');
        selectedTimeSlot = t.dataset.time;
      });
    });
  }

  function openServiceModal() {
    if (bookingFormWrap) bookingFormWrap.style.display = 'block';
    if (bookingSuccess) bookingSuccess.style.display = 'none';
    if (formBooking) formBooking.reset();
    openSheet('sheet-booking');
  }

  if (quickService) {
    quickService.addEventListener('click', openServiceModal);
  }

  if (formBooking) {
    formBooking.addEventListener('submit', (e) => {
      e.preventDefault();
      const serviceReq = {
        name: document.getElementById('bk-name').value.trim(),
        email: document.getElementById('bk-email').value.trim(),
        phone: document.getElementById('bk-phone').value.trim(),
        details: document.getElementById('bk-location').value.trim(),
        notes: document.getElementById('bk-notes').value.trim(),
        date: selectedDateObj ? selectedDateObj.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }) : 'Upcoming',
        time: selectedTimeSlot || 'Morning Drop-Off',
        timestamp: new Date().toISOString()
      };

      bookingFormWrap.style.display = 'none';
      bookingSuccess.style.display = 'block';

      const summary = document.getElementById('booking-summary-text');
      if (summary) {
        summary.textContent = `Thank you, ${serviceReq.name}! Your service request for ${serviceReq.date} at ${serviceReq.time} has been submitted. Charley will contact you shortly.`;
      }

      showToast(`Service request sent for ${serviceReq.date}`);
    });
  }

  // --- Share Sheet & Full-Screen QR Mode ---
  const btnFullscreenQr = document.getElementById('btn-fullscreen-qr');
  const btnDockShare = document.getElementById('btn-dock-share');
  const btnOpenShare = document.getElementById('btn-open-share');
  const shareMode = document.getElementById('share-mode');
  const btnCloseShareMode = document.getElementById('btn-close-share-mode');
  const btnFullscreenFromSheet = document.getElementById('btn-fullscreen-from-sheet');
  const btnCopyLink = document.getElementById('btn-copy-link');
  const btnNativeShare = document.getElementById('btn-native-share');
  const btnDownloadQr = document.getElementById('btn-download-qr');

  function getShareUrl() {
    const base = window.location.origin + window.location.pathname;
    return shareCellPhone ? `${base}?cell=1` : base;
  }

  function openShareMode() {
    if (shareMode) {
      shareMode.classList.add('is-open');
      renderFullscreenQr();
    }
  }

  if (btnFullscreenQr) btnFullscreenQr.addEventListener('click', openShareMode);
  if (btnDockShare) btnDockShare.addEventListener('click', () => openSheet('sheet-share'));
  if (btnOpenShare) btnOpenShare.addEventListener('click', () => openSheet('sheet-share'));
  if (btnFullscreenFromSheet) {
    btnFullscreenFromSheet.addEventListener('click', () => {
      closeSheet('sheet-share');
      openShareMode();
    });
  }
  if (btnCloseShareMode) {
    btnCloseShareMode.addEventListener('click', () => {
      if (shareMode) shareMode.classList.remove('is-open');
    });
  }

  // Copy link (reflects on-demand cell phone query parameter)
  if (btnCopyLink) {
    btnCopyLink.addEventListener('click', async () => {
      const url = getShareUrl();
      try {
        await navigator.clipboard.writeText(url);
        if (shareCellPhone) {
          showToast('VIP link with direct cell copied!');
        } else {
          showToast('Public store link copied!');
        }
      } catch (err) {
        showToast('Link: ' + url);
      }
    });
  }

  // Native Web Share API
  if (btnNativeShare) {
    btnNativeShare.addEventListener('click', async () => {
      const url = getShareUrl();
      const text = shareCellPhone
        ? "Contact card for Charley Braun (Direct Cell & Store), Swimming Pool Department Manager at Cricket's Pool and Spa World."
        : "Contact card for Charley Braun, Swimming Pool Department Manager at Cricket's Pool and Spa World.";

      if (navigator.share) {
        try {
          await navigator.share({
            title: "Charley Braun | Cricket's Pool and Spa World",
            text: text,
            url: url
          });
        } catch (e) {
          console.warn('Share dismissed');
        }
      } else {
        btnCopyLink.click();
      }
    });
  }

  // QR Code Rendering
  let qrCodeInstance = null;
  let fullscreenQrInstance = null;

  function renderQrCode() {
    const target = document.getElementById('qr-target');
    if (!target || typeof QRCode === 'undefined') return;
    target.innerHTML = '';
    const shareUrl = getShareUrl();
    qrCodeInstance = new QRCode(target, {
      text: shareUrl,
      width: 220,
      height: 220,
      colorDark: '#04101e',
      colorLight: '#f0fdfa',
      correctLevel: QRCode.CorrectLevel.M
    });

    const qrUrlText = document.getElementById('qr-url-text');
    if (qrUrlText) {
      qrUrlText.textContent = shareCellPhone ? "Cricket's Pool • Direct Cell Included" : "Cricket's Pool and Spa World (Store Only)";
    }
  }

  function renderFullscreenQr() {
    const target = document.getElementById('fullscreen-qr-target');
    if (!target || typeof QRCode === 'undefined') return;
    target.innerHTML = '';
    const shareUrl = getShareUrl();
    fullscreenQrInstance = new QRCode(target, {
      text: shareUrl,
      width: 280,
      height: 280,
      colorDark: '#04101e',
      colorLight: '#f0fdfa',
      correctLevel: QRCode.CorrectLevel.M
    });
  }

  // Download QR Code image
  if (btnDownloadQr) {
    btnDownloadQr.addEventListener('click', () => {
      const img = document.querySelector('#qr-target img') || document.querySelector('#qr-target canvas');
      if (!img) return;
      const src = img.src || (img.toDataURL && img.toDataURL('image/png'));
      if (!src) return;
      const a = document.createElement('a');
      a.href = src;
      const suffix = shareCellPhone ? 'VIP_Direct' : 'Store';
      a.download = `Charley_Braun_Crickets_Pool_${suffix}_QR.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      showToast('QR code saved!');
    });
  }

  // --- Toast helper ---
  function showToast(msg) {
    const toast = document.getElementById('toast');
    const toastText = document.getElementById('toast-text');
    if (!toast || !toastText) return;
    toastText.textContent = msg;
    toast.classList.add('is-on');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
      toast.classList.remove('is-on');
    }, 2800);
  }

  // --- Initialization ---
  function init() {
    renderCard('pools');
    buildCalendarDays();
    updateCellShareUI();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
