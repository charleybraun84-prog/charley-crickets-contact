/* ==========================================================================
   Cricket's Pool and Spa World — Contact Share Card Application Logic
   Hosted at: poolandspaworld.net (or custom domain)
   Profile: Cricket's Pool And Spa World, Inc. — Service Department
   ========================================================================== */

(function () {
  'use strict';

  /* ==========================================================================
     DIRECT CONTACT DETAILS & CONFIGURATION
     👉 Business Name: Cricket's Pool And Spa World, Inc.
     👉 Department: Service Department — Authorized Warranty Center
     👉 Address: 1100 Rue du Belier, Lafayette, LA 70506
     👉 Work Phone: (337) 984-7626 (Office Line)
     👉 Website: http://poolandspaworld.net/
     👉 Facebook: https://www.facebook.com/profile.php?id=100039496489824
     👉 Instagram: https://www.instagram.com/cricketspoolandspaworld/
     ========================================================================== */
  const DIRECT_CONTACT = {
    name: "Cricket's Pool And Spa World, Inc.",
    displayName: "Cricket's Pool And Spa World",
    department: 'Service Department',
    avatarInitial: 'CP',
    title: 'Service Department — Authorized Warranty Center',
    company: "Cricket's Pool And Spa World, Inc.",
    companySubtitle: 'The Backyard Place',
    workPhone: '(337) 984-7626',          // Office line
    workPhoneRaw: '+13379847626',
    storePhone: '(337) 984-7626',         // Office line
    storePhoneRaw: '+13379847626',
    email: 'charley@poolandspaworld.net', // Service inbox
    website: 'http://poolandspaworld.net/',
    address: '1100 Rue du Belier, Lafayette, LA 70506',
    hours: 'Mon–Fri 8:00 AM – 4:00 PM • Sat–Sun Closed',
    googleReviews: 'https://maps.google.com/?q=Cricket%27s+Pool+And+Spa+World+1100+Rue+du+Belier+Lafayette+LA',
    facebook: 'https://www.facebook.com/profile.php?id=100039496489824',
    instagram: 'https://www.instagram.com/cricketspoolandspaworld/'
  };

  // Auto-download direct .vcf if visited with ?download=1, ?vcf=1, or #download
  try {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('download') === '1' || urlParams.get('vcf') === '1' || window.location.hash === '#download' || window.location.hash === '#vcf') {
      window.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
          generateVCard();
        }, 350);
      });
    }
  } catch (e) {
    console.warn('URL param parse error:', e);
  }

  // --- Profile & Platform Buttons (Prioritized directly on the card) ---
  const PROFILE_LINKS = [
    {
      featured: true,
      label: 'Official Store Website',
      sub: 'poolandspaworld.net — The Backyard Place in Lafayette',
      url: DIRECT_CONTACT.website,
      icon: 'globe',
      badge: 'Official Site'
    },
    {
      label: 'Cricket’s Pool & Spa Facebook Page',
      sub: 'Follow on Facebook for store promotions, maintenance guides & updates',
      url: DIRECT_CONTACT.facebook,
      icon: 'facebook',
      channelClass: 'link--facebook',
      badge: 'Facebook'
    },
    {
      label: 'Cricket’s Pool & Spa Instagram Profile',
      sub: '@cricketspoolandspaworld — Photos, pool builds & announcements',
      url: DIRECT_CONTACT.instagram,
      icon: 'instagram',
      channelClass: 'link--instagram',
      badge: 'Instagram'
    },
    {
      label: 'Company Office Phone Line',
      sub: '(337) 984-7626 — Call our store & service desk',
      url: `tel:${DIRECT_CONTACT.workPhoneRaw}`,
      icon: 'phone',
      badge: 'Call Office'
    },
    {
      label: 'Store Location, Hours & Google Reviews',
      sub: '1100 Rue du Belier, Lafayette, LA 70506 • 4.3★ Verified',
      url: DIRECT_CONTACT.googleReviews,
      icon: 'star',
      channelClass: 'link--google',
      badge: '4.3 ★'
    }
  ];

  // --- Profile Card Definition ---
  const CARDS = {
    warranty: {
      id: 'warranty',
      sector: 'warranty',
      name: DIRECT_CONTACT.name,
      avatarInitial: DIRECT_CONTACT.avatarInitial,
      company: DIRECT_CONTACT.company,
      title: 'Service Department — Authorized Warranty Center',
      tagline: 'Authorized warranty service dealer for Hayward, Pentair, and Fluidra (Jandy, Polaris, Zodiac). Expert pool equipment diagnostics, warranty repairs & maintenance in Lafayette, LA.',
      location: DIRECT_CONTACT.address,
      chips: [
        { icon: 'shield', text: 'Hayward • Pentair • Fluidra' },
        { icon: 'tool', text: 'Warranty Service Dealer' },
        { icon: 'droplet', text: 'Diagnostics & Repair' }
      ],
      socials: [
        { label: 'Office Phone', sub: DIRECT_CONTACT.workPhone, url: `tel:${DIRECT_CONTACT.workPhoneRaw}`, icon: 'phone' },
        { label: 'Store Website', sub: 'poolandspaworld.net', url: DIRECT_CONTACT.website, icon: 'globe' },
        { label: 'Facebook', sub: "Cricket's Pool & Spa", url: DIRECT_CONTACT.facebook, icon: 'facebook' },
        { label: 'Instagram', sub: "@cricketspoolandspaworld", url: DIRECT_CONTACT.instagram, icon: 'instagram' },
        { label: 'Google 4.3★', sub: 'Verified Store Reviews', url: DIRECT_CONTACT.googleReviews, icon: 'star' }
      ],
      links: PROFILE_LINKS,
      defaultCategory: 'General Inquiry'
    }
  };

  // State
  let currentCardId = 'warranty';

  // DOM elements
  const profileName = document.getElementById('profile-name');
  const profileAvatar = document.getElementById('profile-avatar');
  const profileCompany = document.getElementById('profile-company');
  const profileTitle = document.getElementById('profile-title');
  const profileLocation = document.getElementById('profile-location');
  const chipsContainer = document.getElementById('chips-container');
  const linksContainer = document.getElementById('links-container');
  const vcfRawPreview = document.getElementById('vcf-raw-preview');
  const vcfFieldsList = document.getElementById('vcf-fields-list');

  // Contact action DOM elements
  const quickCall = document.getElementById('quick-call');
  const quickCallLabel = document.getElementById('quick-call-label');
  const saveVcardLabel = document.getElementById('save-vcard-label');

  // SVG icon library
  function iconSvg(name) {
    const icons = {
      globe: '<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
      droplet: '<svg class="icon" viewBox="0 0 24 24"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>',
      tool: '<svg class="icon" viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
      calendar: '<svg class="icon" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
      star: '<svg class="icon" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
      shield: '<svg class="icon" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
      spa: '<svg class="icon" viewBox="0 0 24 24"><path d="M12 3a9 9 0 0 0-9 9c0 3.87 2.45 7.17 5.9 8.44.4.08.55-.17.55-.38v-1.36c-2.4.52-2.9-1.16-2.9-1.16-.39-1-.96-1.27-.96-1.27-.79-.54.06-.53.06-.53.87.06 1.33.9 1.33.9.77 1.33 2.03.95 2.52.72.08-.56.3-.95.55-1.16-1.92-.22-3.94-.96-3.94-4.28 0-.95.34-1.72.9-2.33-.09-.22-.39-1.1.09-2.3 0 0 .73-.23 2.39.89a8.3 8.3 0 0 1 4.35 0c1.66-1.12 2.39-.89 2.39-.89.48 1.2.18 2.08.09 2.3.56.61.9 1.38.9 2.33 0 3.33-2.03 4.05-3.96 4.27.31.27.59.8.59 1.62v2.4c0 .22.15.47.56.38A9.01 9.01 0 0 0 21 12a9 9 0 0 0-9-9z"/></svg>',
      sun: '<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><line x1="12" y1="12" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',
      pin: '<svg class="icon" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
      phone: '<svg class="icon" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
      mail: '<svg class="icon" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
      facebook: '<svg class="icon" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
      instagram: '<svg class="icon" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',
      arrow: '<svg class="icon link__arrow" viewBox="0 0 24 24"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>'
    };
    return icons[name] || icons.globe;
  }

  // --- Unified Company Contact UI Setup ---
  function setupCompanyContactUI() {
    if (quickCall) {
      quickCall.href = `tel:${DIRECT_CONTACT.workPhoneRaw}`;
      quickCall.setAttribute('aria-label', `Call Office ${DIRECT_CONTACT.workPhone}`);
    }
    if (quickCallLabel) quickCallLabel.textContent = 'Call Office';

    if (saveVcardLabel) saveVcardLabel.textContent = 'Save Company Contact (.vcf)';

    renderVcfFieldsList();
    updateVcfPreviewText();
    renderQrCode();
  }

  // --- Render Profile Card ---
  function renderCard(cardId) {
    const card = CARDS[cardId] || CARDS.warranty;
    currentCardId = card.id;

    if (profileName) profileName.textContent = card.name;
    if (profileAvatar) profileAvatar.textContent = card.avatarInitial;
    if (profileCompany) profileCompany.textContent = card.company;
    if (profileTitle) profileTitle.textContent = card.title;
    if (profileLocation) profileLocation.textContent = card.location;

    // Chips
    if (chipsContainer) {
      chipsContainer.innerHTML = card.chips.map(c => `
        <span class="chip">${iconSvg(c.icon)} ${c.text}</span>
      `).join('');
    }

    // Linktree Links List (Prioritizing external platforms & contact info)
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
        let badgeClass = 'link__badge--cyan';
        if (l.badge === 'Hayward') badgeClass = 'link__badge--hayward';
        else if (l.badge === 'Pentair') badgeClass = 'link__badge--pentair';
        else if (l.badge === 'Fluidra') badgeClass = 'link__badge--fluidra';
        else if (l.badge === '4.3 ★') badgeClass = 'link__badge--star';
        const badgeHtml = l.badge ? `<span class="link__badge ${badgeClass}">${l.badge}</span>` : '';
        const arrowHtml = iconSvg('arrow');

        const classes = ['link'];
        if (l.featured) classes.push('link--featured');
        if (l.channelClass) classes.push(l.channelClass);

        return `
          <a href="${l.url}" target="_blank" rel="noopener" class="${classes.join(' ')}">
            ${iconHtml}${textHtml}${badgeHtml}${arrowHtml}
          </a>
        `;
      }).join('');
    }

    setupCompanyContactUI();
  }

  // --- vCard 3.0 Generation & Direct Download ---
  function buildVCardText() {
    const lines = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'N:;Cricket\'s Pool And Spa World, Inc.;;;',
      'FN:Cricket\'s Pool And Spa World, Inc.',
      'ORG:Cricket\'s Pool And Spa World, Inc.;Service Department',
      'TITLE:Service Department — Authorized Warranty Center',
      `TEL;TYPE=WORK,VOICE,PREF:${DIRECT_CONTACT.workPhoneRaw}`,
      `EMAIL;TYPE=WORK,INTERNET,PREF:${DIRECT_CONTACT.email}`,
      `URL;TYPE=WORK:${DIRECT_CONTACT.website}`,
      'ADR;TYPE=WORK:;;1100 Rue du Belier;Lafayette;LA;70506;USA',
      `X-SOCIALPROFILE;type=facebook:${DIRECT_CONTACT.facebook}`,
      `X-SOCIALPROFILE;type=instagram:${DIRECT_CONTACT.instagram}`,
      `NOTE:Cricket's Pool And Spa World, Inc. — Service Department (The Backyard Place). Office line: ${DIRECT_CONTACT.workPhone}. Factory authorized warranty service dealer for Hayward, Pentair, and Fluidra (Jandy, Polaris, Zodiac). Pool equipment diagnostics, warranty repairs, computerized water analysis, and pool chemicals. Website: ${DIRECT_CONTACT.website}. Address: ${DIRECT_CONTACT.address}.`,
      'CATEGORIES:Pool Service,Warranty Dealer,Hayward,Pentair,Fluidra,Water Testing,Pool Equipment,Cricket\'s Pool And Spa World',
      'REV:' + new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z',
      'END:VCARD'
    ];

    return lines.join('\r\n');
  }

  function generateVCard() {
    const vcfData = buildVCardText();
    const blob = new Blob([vcfData], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `Crickets_Pool_Service_Dept.vcf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showToast('Company Contact (.vcf) downloaded — tap to save!');
  }

  function updateVcfPreviewText() {
    if (vcfRawPreview) {
      vcfRawPreview.textContent = buildVCardText();
    }
  }

  function renderVcfFieldsList() {
    if (!vcfFieldsList) return;
    const cardTitle = CARDS[currentCardId] ? CARDS[currentCardId].title : DIRECT_CONTACT.title;

    vcfFieldsList.innerHTML = `
      <li>${iconSvg('star')} <span><strong>Business Name:</strong> ${DIRECT_CONTACT.name}</span></li>
      <li>${iconSvg('globe')} <span><strong>Department:</strong> ${DIRECT_CONTACT.department}</span></li>
      <li>${iconSvg('shield')} <span><strong>Title:</strong> ${cardTitle}</span></li>
      <li>${iconSvg('phone')} <span><strong>Office Line:</strong> ${DIRECT_CONTACT.workPhone}</span></li>
      <li>${iconSvg('mail')} <span><strong>Email:</strong> ${DIRECT_CONTACT.email}</span></li>
      <li>${iconSvg('globe')} <span><strong>Website:</strong> <a href="${DIRECT_CONTACT.website}" target="_blank" rel="noopener">${DIRECT_CONTACT.website}</a></span></li>
      <li>${iconSvg('facebook')} <span><strong>Facebook Page:</strong> <a href="${DIRECT_CONTACT.facebook}" target="_blank" rel="noopener">Cricket's Pool and Spa World</a></span></li>
      <li>${iconSvg('instagram')} <span><strong>Instagram Profile:</strong> <a href="${DIRECT_CONTACT.instagram}" target="_blank" rel="noopener">@cricketspoolandspaworld</a></span></li>
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
      setupCompanyContactUI();
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
    return window.location.origin + window.location.pathname;
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

  // Copy link
  if (btnCopyLink) {
    btnCopyLink.addEventListener('click', async () => {
      const url = getShareUrl();
      try {
        await navigator.clipboard.writeText(url);
        showToast('Service contact link copied!');
      } catch (err) {
        showToast('Link: ' + url);
      }
    });
  }

  // Direct .vcf URL helper & copy handler
  function getDirectVcfUrl() {
    return new URL('crickets-service.vcf', window.location.href).href;
  }

  const btnCopyVcfLink = document.getElementById('btn-copy-vcf-link');
  const directVcfUrlText = document.getElementById('direct-vcf-url-text');
  if (directVcfUrlText && window.location.hostname) {
    directVcfUrlText.textContent = `${window.location.hostname}/crickets-service.vcf`;
  }

  if (btnCopyVcfLink) {
    btnCopyVcfLink.addEventListener('click', async () => {
      const vcfUrl = getDirectVcfUrl();
      try {
        await navigator.clipboard.writeText(vcfUrl);
        showToast('Direct .vcf link copied!');
      } catch (err) {
        showToast('Direct link: ' + vcfUrl);
      }
    });
  }

  // Native Web Share API
  if (btnNativeShare) {
    btnNativeShare.addEventListener('click', async () => {
      const url = getShareUrl();
      const text = "Digital contact card for Cricket's Pool And Spa World, Inc. — Service Department. Office: (337) 984-7626. Factory authorized warranty dealer for Hayward, Pentair, and Fluidra.";

      if (navigator.share) {
        try {
          await navigator.share({
            title: "Cricket's Pool And Spa World, Inc. | Service Department",
            text: text,
            url: url
          });
        } catch (e) {
          console.warn('Share dismissed');
        }
      } else {
        if (btnCopyLink) btnCopyLink.click();
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
      qrUrlText.textContent = "Service Department • (337) 984-7626";
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
      a.download = `Crickets_Pool_Service_Dept_QR.png`;
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
    renderCard('warranty');
    setupCompanyContactUI();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
