# Cricket's Pool and Spa World — Contact Share Platform (Charley Braun)

A self-hosted digital contact card, link sharing, and service consultation platform built for **Charley Braun**, Swimming Pool Department Manager at [Cricket's Pool and Spa World, Inc.](https://poolandspaworld.net/) (Lafayette, LA).

Designed as an independent, high-performance alternative to services like **Linktree**, **Dot**, and **Blinq**, styled in a swimming pool aesthetic (deep aquatic navy, crystal cyan, lagoon blue, and water caustics).

---

## Highlights

- **Swimming Pool Theme**: Deep aquatic navy (`#04101e`), sunlit pool surface (`#081d33`), crystal cyan (`#06b6d4`), and azure (`#0284c7`) with underwater ambient caustic glow.
- **Easy Contact Scaffolding**: Top configuration object in `mockup/app.js` (`DIRECT_CONTACT`) where Charley can easily paste his direct mobile, email, and social handles.
- **One-Tap Contact Save**: Directly downloads a complete vCard 3.0 (`.vcf`) file to the customer's phone contacts (Name, Title, Company, Store Phone, Work Email, Address, Website).
- **Two Category Hubs**:
  - 🏊‍♂️ **Pools & Water Care**: Water testing, chemical care (Poolife, salt systems), Maytronics Dolphin robotic pool cleaners, and equipment warranty repairs.
  - 🛁 **Spas & Hot Tubs**: FreeFlow Spas, Garden Leisure luxury hot tubs, Sirona spa care, and showroom hours.
- **Quick Thumb Channels**: Direct 1-tap buttons for Call Store, Text Inquiries, Email, and Service Request.
- **Water Testing & Equipment Drop-off Scheduling**: Smart scheduler reflecting Cricket's store hours (Mon–Fri 8:00 AM – 4:00 PM).
- **Two-Way Customer Exchange**: In-store or expo lead capture form saving customer name, pool type, inquiry notes, and contact info.
- **QR Code & NFC Ready**: Includes built-in SVG/PNG QR code generator and full-screen event mode for trade shows (e.g. Home & Garden Shows).

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
│   └── qrcode.min.js       # Embedded offline QR code generator
└── README.md
```

---

## How to Customize Contact Details

Open `mockup/app.js` and edit the `DIRECT_CONTACT` object at the top of the file:

```javascript
const DIRECT_CONTACT = {
  name: 'Charley Braun',
  avatarInitial: 'CB',
  title: 'Swimming Pool Department Manager',
  company: "Cricket's Pool and Spa World, Inc.",
  storePhone: '(337) 984-7626',
  storePhoneRaw: '+13379847626',
  directCell: '(337) 984-7626',        // 👈 Paste your direct cell here
  directCellRaw: '+13379847626',       // 👈 Format: +13370000000
  email: 'charley@poolandspaworld.net', // 👈 Paste your direct email here
  website: 'https://poolandspaworld.net',
  address: '1100 Rue du Belier, Lafayette, LA 70506',
  facebook: 'https://www.facebook.com/', // 👈 Paste store Facebook page URL
  instagram: 'https://www.instagram.com/' // 👈 Paste Instagram profile URL
};
```

---

## Cloudflare Deployment

Deploy to Cloudflare Pages:
- **Build command**: None (static files)
- **Build output directory**: `mockup`
- **Deploy via CLI**: `npx wrangler deploy`
