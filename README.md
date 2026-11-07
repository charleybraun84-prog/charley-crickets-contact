# Cricket's Pool and Spa World — Contact Share Platform (Charley Braun)

A self-hosted digital contact card, link sharing, and service consultation platform built for **Charley Braun**, Service Department Manager at [Cricket's Pool And Spa World, Inc.](http://poolandspaworld.net/) (Lafayette, LA).

Designed as an independent, high-performance alternative to services like **Linktree**, **Dot**, and **Blinq**, styled in a swimming pool aesthetic (deep aquatic navy, crystal cyan, lagoon blue, and water caustics).

---

## Highlights

- **Authorized Warranty Dealer**: Factory authorized warranty service dealer for **Hayward**, **Pentair**, and **Fluidra** (Jandy, Polaris, Zodiac).
- **Service Department Hub**: Direct customer access to equipment diagnostic drop-off, warranty repair claims, and computerized pool water testing.
- **Swimming Pool Theme**: Deep aquatic navy (`#04101e`), sunlit pool surface (`#081d33`), crystal cyan (`#06b6d4`), and azure (`#0284c7`) with underwater ambient caustic glow.
- **Easy Contact Scaffolding**: Top configuration object in `mockup/app.js` (`DIRECT_CONTACT`) where Charley can easily paste his direct mobile, email, and social handles.
- **One-Tap Contact Save**: Directly downloads a complete vCard 3.0 (`.vcf`) file to the customer's phone contacts (Name, Title, Company, Work Phone, Work Email, Address, Website, Social profiles).
- **Two Service Hubs**:
  - 🛠️ **Warranty & Equipment**: Authorized warranty repairs and diagnostics for Hayward, Pentair, and Fluidra (pumps, motors, filters, heaters, automation, cleaners).
  - 💧 **Water Care & Diagnostics**: Free computerized water analysis, Poolife chlorine and chemical care, and salt cell balancing.
- **Quick Thumb Channels**: Direct 1-tap buttons for Call Work, Text Work Line, Email, and Service Request.
- **Water Testing & Equipment Drop-off Scheduling**: Smart scheduler reflecting Cricket's store hours (Mon–Fri 8:00 AM – 4:00 PM).
- **Two-Way Customer Exchange**: In-store or expo lead capture form saving customer name, pool equipment, warranty inquiry, and contact info.
- **QR Code & NFC Ready**: Includes built-in SVG/PNG QR code generator and full-screen event mode for trade shows.

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
  name: 'Charley Braun',
  avatarInitial: 'CB',
  title: 'Service Department Manager',
  company: "Cricket's Pool And Spa World, Inc.",
  workPhone: '(337) 984-7626',          // Company textable line
  workPhoneRaw: '+13379847626',
  mobilePhone: '(337) 577-9224',        // Selectable to only share with certain contacts
  mobilePhoneRaw: '+13375779224',
  email: 'charley@poolandspaworld.net',
  website: 'http://poolandspaworld.net/',
  address: '1100 Rue du Belier, Lafayette, LA 70506',
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
