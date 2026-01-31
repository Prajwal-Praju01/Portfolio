# Prajwal B N - Portfolio Website

A modern, production-ready portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. This portfolio showcases full-stack development projects, skills, and professional experience.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Working Contact Form**: Real email integration with Resend API
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
- **Email**: Formspree (Free, 50 submissions/month)
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
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

5. **Set up contact form (optional but recommended):**
   - Go to [formspree.io](https://formspree.io)
   - Sign up with your email (prajwalpraju4539@gmail.com)
   - Create a new form
   - Copy your form endpoint (looks like `https://formspree.io/f/xjkvodnb`)
   - Update it in `src/components/contact/ContactForm.tsx` line 18

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

### Contact Form Setup (Optional)

The contact form uses [Formspree](https://formspree.io) - a free, reliable email service.

**Setup Steps (2 minutes):**

1. Go to [formspree.io](https://formspree.io) and sign up
2. Create a new form
3. Copy your form endpoint: `https://formspree.io/f/YOUR_FORM_ID`
4. Update `src/components/contact/ContactForm.tsx` line 18:
   ```typescript
   const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID'
   ```

**Benefits:**
- ✅ 100% FREE (50 submissions/month)
- ✅ Spam protection included
- ✅ Email notifications to your inbox
- ✅ Simple setup, no API keys needed
- ✅ Works on any deployment platform

**Note:** The contact form is already configured with a demo endpoint. It will work out of the box, but create your own form to receive emails at your address.

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
