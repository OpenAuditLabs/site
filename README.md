# OpenAuditLabs/Site

A modern, responsive landing page built with Next.js for the OpenAuditLabs initiative. This repository contains the complete codebase for the project's official website, designed to showcase the mission and provide information to visitors.

## Overview

OpenAuditLabs/Site serves as the digital front door for the OpenAuditLabs project. Built using modern web technologies, this landing page delivers a fast, accessible, and engaging user experience while maintaining professional standards and optimal performance.

## Key Features

- **Modern Architecture**: Built with Next.js 15 and the App Router for optimal performance
- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Performance Optimized**: Server-side rendering and static generation for fast load times
- **Professional UI**: Clean, modern interface designed for accessibility and usability
- **SEO Ready**: Optimized for search engines with proper meta tags and structured data

## Technology Stack

<div align="center">

| Technology                                                                                                                              | Description                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />              | [Next.js 15](https://nextjs.org/) - React framework for production        |
| <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" /> | [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework    |
| <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />       | [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript at scale |
| <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />                   | [Vercel](https://vercel.com/) - Deployment and hosting platform           |

</div>

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- pnpm package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/openauditslabs/site.git
   cd site
   ```


2. **Install dependencies**

   ```bash
   pnpm install
   ```


3. **Run the development server**

   ```bash
   pnpm dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.


### Building for Production

```bash
pnpm run build
pnpm start
```

## Development

This project follows Next.js best practices and modern development standards:

- **Code Quality**: ESLint and Prettier for consistent code formatting
- **Type Safety**: Full TypeScript implementation
- **Performance**: Optimized images, fonts, and assets
- **Accessibility**: WCAG 2.1 AA compliance standards

## Folder Structure

Below is the main folder structure of the project:


```
src/
├── app/                        # Next.js App Router
│   ├── favicon.ico
│   ├── layout.tsx               # Root layout
│   ├── (landing)/               # Landing page and subpages
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── about/
│   │   │   └── about.tsx
│   │   ├── contact/
│   │   │   └── contact.tsx
│   │   ├── features/
│   │   │   └── features.tsx
│   │   ├── OpenAuditAction/
│   │   │   └── OpenAuditAction.tsx
│   │   ├── pricing/
│   │   │   └── pricing.tsx
│   │   ├── research/
│   │   │   └── research.tsx
│   │   └── RevolutionaryFeatures/
│   │       └── revolutionaryFeatures.tsx
│   ├── actions/
│   │   └── contact.ts
│   └── privacy/
│       └── page.tsx
│
├── components/                 # Reusable components
│   ├── common/
│   │   ├── PrivacyPolicyModal.tsx
│   │   ├── SectionHeading.tsx
│   │   └── ToSModal.tsx
│   ├── landing/
│   │   ├── ContactForm.tsx
│   │   ├── Hero.tsx
│   │   ├── PricingTableCard.tsx
│   │   ├── revFeaturesCard.tsx
│   │   └── hero/
│   │       └── HeroCarousel.tsx
│   ├── layout/
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   └── ui/
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── form.tsx
│       ├── input.tsx
│       ├── label.tsx
│       └── shadcn-io/
│           └── code-editor/
│               └── index.tsx
│
├── lib/                        # Utility functions
│   └── utils.ts
│
├── providers/                  # Context providers
│   └── theme-provider.tsx
│
└── styles/                     # CSS files
   ├── animation.css
   └── globals.css
```

This structure ensures a clean and organized codebase, making it easier to maintain and scale the project.

## License

This project is licensed under the [GNU Affero General Public License v3.0](https://www.gnu.org/licenses/agpl-3.0.en.html). See the [LICENSE](LICENSE) file for details.

## Support

For questions, issues, or feature requests, please use the GitHub Issues tracker. We aim to respond to all inquiries in a timely manner.

---

<div align="center">
  <strong>OpenAuditLabs</strong> - Securing the Future of Smart Contracts with AI
</div>
