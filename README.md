# Prajwal B N - Portfolio Website

A modern, production-ready portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. This portfolio showcases full-stack development projects, skills, and professional experience.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Advanced Animations**: Framer Motion with scroll-triggered animations and micro-interactions
- **Responsive Design**: Mobile-first approach with seamless adaptation to all screen sizes
- **Interactive Components**: Animated statistics counter, skill progress bars, achievement badges
- **Visual Excellence**: Gradient effects, glass morphism, animated backgrounds, and hover effects
- **SEO Optimized**: Comprehensive metadata, Open Graph tags, and semantic HTML
- **Performance Focused**: Optimized images, lazy loading, and clean code architecture
- **Accessible**: WCAG-friendly with proper contrast ratios and keyboard navigation
- **Type-Safe**: Full TypeScript implementation for robust code quality
- **Enhanced UX**: Scroll-to-top button, loading states, and smooth scrolling

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx         # Root layout with metadata
│   │   ├── page.tsx           # Home page
│   │   ├── about/             # About page
│   │   ├── projects/          # Projects listing and detail pages
│   │   │   └── [id]/         # Dynamic project pages
│   │   └── contact/           # Contact page
│   ├── components/
│   │   ├── ui/                # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Container.tsx
│   │   │   ├── Section.tsx
│   │   │   └── SkillBadge.tsx
│   │   ├── layout/            # Layout components
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── home/              # Home page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── FeaturedProjects.tsx
│   │   │   └── CTA.tsx
│   │   └── contact/           # Contact components
│   │       └── ContactForm.tsx
│   └── data/
│       └── projects.ts        # Project data and types
├── public/                    # Static assets
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
├── next.config.js            # Next.js configuration
└── package.json              # Dependencies
```

## 🛠️ Tech Stack

### Core
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS

### Libraries
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter, JetBrains Mono)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/prajwalbn/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📝 Customization Guide

### 1. Personal Information
Update personal details in:
- `src/app/layout.tsx` - SEO metadata
- `src/components/layout/Header.tsx` - Logo
- `src/components/layout/Footer.tsx` - Social links
- `src/components/home/Hero.tsx` - Hero content
- `src/app/about/page.tsx` - Skills, experience, education

### 2. Projects
Edit project data in `src/data/projects.ts`:
```typescript
export const projectsData: Project[] = [
  {
    id: 'project-slug',
    title: 'Project Title',
    tagline: 'Short description',
    // ... more fields
  }
]
```

### 3. Contact Information
Update contact details in `src/app/contact/page.tsx`

### 4. Theme Colors
Modify colors in `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    // Your brand colors
  }
}
```

## 🎨 Design Principles

- **Professional**: Clean, modern design suitable for recruiters and technical audiences
- **User-Focused**: Easy navigation with clear call-to-actions
- **Performance**: Optimized loading times and smooth interactions
- **Accessibility**: WCAG compliant with proper semantic HTML
- **Mobile-First**: Responsive design that works on all devices

## 🔒 Environment Variables

For production deployment, configure:
- Email service API keys (for contact form)
- Analytics tracking IDs
- Any other third-party service credentials

Create a `.env.local` file:
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
# Add other environment variables as needed
```

## 📊 Performance Optimizations

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting with Next.js App Router
- **Font Optimization**: Google Fonts with `next/font`
- **CSS Optimization**: Tailwind CSS with PurgeCSS
- **Lazy Loading**: Components loaded on-demand

## 🚢 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in Vercel
3. Deploy with zero configuration

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify
- Render

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/prajwalbn/portfolio/issues).

## 👤 Author

**Prajwal B N**
- GitHub: [@prajwalbn](https://github.com/prajwalbn)
- LinkedIn: [prajwalbn](https://linkedin.com/in/prajwalbn)
- Email: prajwal@example.com

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

**Note**: Remember to update placeholder content (email, phone, social links) with your actual information before deploying to production.
