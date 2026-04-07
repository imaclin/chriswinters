# Christopher S. Winters Law - Next.js Website

A modern, responsive law firm website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Responsive Design** optimized for all devices
- **SEO Optimized** with Next.js Metadata API
- **Static Export** ready for deployment
- **Lucide Icons** for consistent iconography

## Pages

- **Home** (`/`) - Hero section with call-to-action
- **About** (`/about`) - Attorney profile and credentials
- **Practice Areas** (`/practice-areas`) - Legal services offered
- **Contact** (`/contact`) - Contact form and office information

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd chriswinters-next
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

This creates a static export in the `dist` folder, ready for deployment to Vercel or any static hosting.

## Project Structure

```
chriswinters-next/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with Header/Footer
│   ├── page.tsx            # Home page
│   ├── about/page.tsx      # About page
│   ├── contact/page.tsx    # Contact page
│   └── practice-areas/     # Practice Areas page
│       └── page.tsx
├── components/
│   ├── layout/            # Layout components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── ui/                # UI components
│   │   └── Button.tsx
│   └── sections/          # Page sections
│       └── Hero.tsx
├── lib/
│   └── utils.ts           # Utility functions
├── public/                # Static assets
│   ├── chriswinters.jpg
│   └── chriswinters2.jpg
├── tailwind.config.ts     # Tailwind configuration
└── next.config.js         # Next.js configuration
```

## Customization

### Colors

The site uses a custom color palette defined in `tailwind.config.ts`:

- **Navy** (`#002244`) - Primary brand color
- **Gold** (`#b8975a`) - Accent color
- **Off-white** (`#f8f7f4`) - Background

### Fonts

- **Merriweather** - Headings (serif)
- **Inter** - Body text (sans-serif)

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Static Hosting

The site is configured for static export (`output: 'export'`). Build and deploy the `dist` folder to any static hosting service.

## Contact Form

The contact form is currently set up as a static form. To make it functional:

1. Create a Server Action in `app/contact/actions.ts`
2. Connect to an email service (Resend, SendGrid, etc.)
3. Or use a form backend service (Formspree, Netlify Forms)

## License

All rights reserved - Christopher S. Winters Law
