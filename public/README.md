# Public Assets

This folder contains static assets that are served directly by Next.js.

## Recommended Structure

```
public/
├── resume.pdf                 # Your resume/CV
├── favicon.ico               # Website favicon
├── images/
│   └── profile.jpg          # Your profile picture
└── projects/
    ├── drone-surveillance.jpg
    ├── sanjeevani.jpg
    └── agripredict.jpg
```

## Adding Assets

1. **Resume**: Add your resume as `public/resume.pdf`
2. **Favicon**: Replace `public/favicon.ico` with your own
3. **Profile Image**: Add your photo to `public/images/profile.jpg`
4. **Project Screenshots**: Add project images to `public/projects/`

## Usage in Code

Reference public assets with a leading slash:

```jsx
// Image
<Image src="/images/profile.jpg" alt="Profile" />

// Link
<a href="/resume.pdf" download>Download Resume</a>
```

## Image Optimization Tips

- Use WebP format for better compression
- Optimize images before uploading (tools: TinyPNG, Squoosh)
- Keep images under 500KB when possible
- Use appropriate dimensions (max 1920px width for full-width images)

## Favicon

You can generate a favicon using tools like:
- [Favicon.io](https://favicon.io/)
- [RealFaviconGenerator](https://realfavicongenerator.net/)

Add these files to the public folder:
- `favicon.ico`
- `apple-touch-icon.png`
- `favicon-16x16.png`
- `favicon-32x32.png`
