# Ibrahim Allari & Sons Co. Website

A modern, responsive company website for Ibrahim Allari & Sons Co., a leading manufacturer, supplier, and exporter of PP Spun-bond Non-Woven Fabric in Saudi Arabia.

## Features

- 🎨 Modern, clean design with green & white color palette
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Built with React + TypeScript + Vite
- 🎭 Smooth animations with Framer Motion
- 🎨 Styled with TailwindCSS
- 🧩 Component library: shadcn/ui
- 🔍 SEO-friendly metadata
- 📄 Multiple pages: Home, About, Products, Technology, Colors, Laboratory, Certificates, Clients, Contact

## Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **UI Components**: shadcn/ui
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
allari-project/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/
│   │       ├── button.tsx
│   │       └── card.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Products.tsx
│   │   ├── Technology.tsx
│   │   ├── Colors.tsx
│   │   ├── Laboratory.tsx
│   │   ├── Certificates.tsx
│   │   ├── Clients.tsx
│   │   └── Contact.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── tsconfig.json
```

## Pages

- **Home**: Hero section, company intro, benefits, call to action
- **About Us**: Company overview, mission/vision/values, milestones
- **Products & Applications**: Agriculture, Furniture & Mattress, Packaging, Laminated Packaging, SPA & Saloon
- **Technology**: Machinery overview, technology features, raw materials
- **Colors**: Standard colors and custom Pantone matching
- **Laboratory**: Quality control and testing capabilities
- **Certificates**: ISO 9001, OEKO-TEX Standard 100, Saudi Made
- **Clients**: Client showcase
- **Contact**: Contact form and information

## Customization

### Colors

The brand colors are defined in `tailwind.config.js`:
- Primary Green: `#22c55e` (allari-green)
- Dark Green: `#16a34a` (allari-green-dark)
- Light Green: `#4ade80` (allari-green-light)

### Adding Images

Replace placeholder divs with actual images:
- Product images in the Products page
- Factory images in About and Technology pages
- Certificate images in Certificates page
- Client logos in Clients page
- Google Maps embed in Contact page

### Contact Information

Update contact details in:
- `src/components/layout/Footer.tsx`
- `src/pages/Contact.tsx`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 Ibrahim Allari & Sons Co. All rights reserved.
