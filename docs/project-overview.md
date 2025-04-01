# 40 Hz Healing Hub - Project Documentation

## Project Structure

The project follows a component-based architecture with TypeScript and React:

```
gamma-mit/
├── public/               # Static assets
├── src/                  # Source code
│   ├── components/       # React components
│   │   ├── Header.tsx    # Hero section
│   │   ├── About.tsx     # Information section
│   │   ├── VideoSection.tsx # YouTube video displays
│   │   └── Footer.tsx    # Footer component
│   ├── App.tsx           # Main application component
│   ├── index.tsx         # Entry point
│   └── index.css         # Global styles and Tailwind imports
├── docs/                 # Documentation
└── package.json          # Dependencies and scripts
```

## Components

### Header Component
- Displays a hero section with a brain wave animation background
- Features main headline, subheadline and call-to-action button
- Uses Framer Motion for fade-in animations
- Implements smooth scroll navigation to the video section

### About Component
- Explains the science behind 40 Hz gamma stimulation
- Features an animated brain and wave SVG illustration
- Includes a reference to the PLOS ONE research paper
- Responsive layout that adjusts for mobile and desktop

### VideoSection Component
- Displays YouTube videos in a responsive grid layout
- Each video is presented in a card with title and description
- Uses staggered animations for a pleasing loading effect
- Contains a "View More" link to YouTube channel

### Footer Component
- Displays copyright information and creator credit
- Features social media links with hover effects
- Fully responsive layout

## Styling

- Uses Tailwind CSS for utility-based styling
- Custom color palette defined in tailwind.config.js
- Custom component classes for consistent UI elements
- Font imports from Google Fonts (Poppins, Montserrat, Open Sans)

## Deployment

The site is built using Create React App's production build process:

```bash
npm run build
```

This generates optimized static files in the `build/` directory which can be deployed to any static hosting service.

## Future Enhancements

Potential improvements for future versions:

1. Add a dark mode toggle
2. Implement a custom audio player with 40 Hz visualization
3. Add a section for user testimonials
4. Include more detailed scientific information with references
5. Add newsletter signup for updates on new audio releases