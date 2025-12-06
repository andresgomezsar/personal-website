# Andrés Gómez Sarmiento Portfolio

## Overview
A modern, responsive portfolio website for Andrés Gómez Sarmiento - a Technologist and Computational Social Scientist based in Los Angeles. The site showcases projects, work experience, skills, and contact information.

## Design Direction
- **Theme:** Whimsical light mode with warm teal and orange accents
- **Typography:** Space Grotesk (headings) + Inter (body) + JetBrains Mono (code/tags)
- **Special Features:** Custom cursor that follows mouse movement, animated background blobs, smooth scroll navigation

## Tech Stack
- **Frontend:** React 19, TypeScript, Tailwind CSS v4, Framer Motion
- **Backend:** Express (minimal, serves static content)
- **Build:** Vite

## Project Structure
```
client/
├── src/
│   ├── components/     # UI components (Hero, Navbar, Projects, etc.)
│   ├── pages/          # Page components
│   └── index.css       # Global styles and Tailwind config
├── public/
│   ├── resume.pdf      # Downloadable resume
│   └── favicon.png     # Site icon
└── index.html          # Entry HTML with meta tags

attached_assets/        # Profile photo and generated images
```

## Key Sections
1. **Hero** - Introduction with profile photo and social links
2. **Projects** - Personal projects (Neuro Necklace, Cognos AI)
3. **Experience** - Work history (Cognos, Sony Pictures, USC)
4. **Skills** - Technical toolbox organized by category
5. **About** - Background and education (UCSD)
6. **Contact** - Email, LinkedIn, website links

## User Preferences
- No purple colors
- Smaller profile photo
- Keep Cognos description brief/vague
- Whimsical but professional aesthetic
- Fast, responsive cursor animation

## Recent Changes
- 2024-12-06: Initial portfolio build with whimsical light theme
- 2024-12-06: Replaced generated photo with real profile picture
- 2024-12-06: Updated color scheme from purple to teal/orange
- 2024-12-06: Added real resume PDF for download
