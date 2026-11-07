# Cricket's Pool and Spa World, Inc. — Service Department Contact Share Platform

A self-hosted digital contact card, link sharing, and service consultation platform built for **Cricket's Pool And Spa World, Inc. — Service Department** in Lafayette, LA.

Designed as an independent, high-performance alternative to services like **Linktree**, **Dot**, and **Blinq**, styled in a swimming pool aesthetic (deep aquatic navy, crystal cyan, lagoon blue, and water caustics).

---

## Highlights

- **100% Company-Primary**: Branded for **Cricket's Pool And Spa World, Inc. — Service Department**, creating an evergreen contact hub that saves directly as a company contact in customer phones.
- **Unified Voice & Text Line**: Prominently features the store textable line `(337) 984-7626` for all calls, text inquiries, and vCard downloads.
- **Authorized Warranty Dealer**: Factory authorized warranty service dealer for **Hayward**, **Pentair**, and **Fluidra** (Jandy, Polaris, Zodiac).
- **Service Department Hub**: Direct customer access to equipment diagnostic drop-off, warranty repair claims, and computerized pool water testing.
- **Swimming Pool Theme**: Deep aquatic navy (`#04101e`), sunlit pool surface (`#081d33`), crystal cyan (`#06b6d4`), and azure (`#0284c7`) with underwater ambient caustic glow.
- **Easy Contact Scaffolding**: Top configuration object in `mockup/app.js` (`DIRECT_CONTACT`) for straightforward updates.
- **One-Tap Contact Save**: Directly downloads a complete company vCard 3.0 (`.vcf`) file to the customer's phone contacts (Company Name, Department, Title, Voice & Text Phone, Email, Address, Website, Social profiles).
- **Two Service Hubs**:
  - 🛠️ **Warranty & Equipment**: Authorized warranty repairs and diagnostics for Hayward, Pentair, and Fluidra (pumps, motors, filters, heaters, automation, cleaners).
  - 💧 **Water Care & Diagnostics**: Free computerized water analysis, Poolife chlorine and chemical care, and salt cell balancing.
- **Quick Thumb Channels**: Direct 1-tap buttons for Call Office, Text Office, Email, and Service Request.
- **Water Testing & Equipment Drop-off Scheduling**: Smart scheduler reflecting Cricket's store hours (Mon–Fri 8:00 AM – 4:00 PM).
- **Two-Way Customer Exchange**: In-store or expo lead capture form saving customer name, pool equipment, warranty inquiry, and contact info directly to the service department.
- **QR Code & NFC Ready**: Includes built-in SVG/PNG QR code generator and full-screen event mode for trade shows and in-store displays.

---

## Repository Structure

```text
charley-crickets-contact/
├── wrangler.jsonc          # Cloudflare Pages / Workers configuration
├── package.json            # Deployment scripts
├── mockup/                 # Digital contact card app
│   ├── index.html          # Clean Linktree-style contact layout & bottom sheets
│   ├── styles.css          # Swimming pool design tokens & caustics styling
│   ├── app.js              # DIRECT_CONTACT config, vCard generator & state
│   └── vendor/qrcode.js    # Embedded offline QR code generator
└── README.md
```

---

## How to Customize Contact Details

Open `mockup/app.js` and edit the `DIRECT_CONTACT` object at the top of the file:

```javascript
const DIRECT_CONTACT = {
  name: "Cricket's Pool And Spa World, Inc.",
  displayName: "Cricket's Pool And Spa World",
  department: "Service Department",
  avatarInitial: 'CP',
  title: "Service Department — Authorized Warranty Center",
  company: "Cricket's Pool And Spa World, Inc.",
  companySubtitle: "The Backyard Place",
  workPhone: '(337) 984-7626',          // Unified Voice & Text line
  workPhoneRaw: '+13379847626',
  email: 'charley@poolandspaworld.net', // Service inbox
  website: 'http://poolandspaworld.net/',
  address: '1100 Rue du Belier, Lafayette, LA 70506',
  hours: 'Mon–Fri 8:00 AM – 4:00 PM • Sat–Sun Closed',
  googleReviews: 'https://maps.google.com/?q=Cricket%27s+Pool+And+Spa+World+1100+Rue+du+Belier+Lafayette+LA',
  facebook: 'https://www.facebook.com/profile.php?id=100039496489824',
  instagram: 'https://www.instagram.com/cricketspoolandspaworld/'
};
```

---

## Cloudflare Deployment

Deploy to Cloudflare Pages:
- **Build command**: None (static files)
- **Build output directory**: `mockup`
- **Deploy via CLI**: `npx wrangler deploy`
