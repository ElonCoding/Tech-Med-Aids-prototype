# Med-Aids - Healthcare Landing Page

## Overview

Med-Aids is a modern, responsive landing page for a healthcare service provider. The landing page is designed to showcase the services offered by Med-Aids, provide information about the organization, display patient testimonials, and offer contact options.

## Features

- Responsive design that works on all devices (desktop, tablet, mobile)
- Modern and clean UI with a focus on healthcare aesthetics
- Interactive navigation with smooth scrolling
- Service showcase section
- About section
- Patient testimonials
- Contact form
- Newsletter subscription
- Mobile-friendly navigation

## Project Structure

```
├── index.html          # Main HTML file
├── styles/
│   └── style.css       # CSS styles
├── src/
│   └── script.js       # JavaScript functionality
├── assests/            # SVG images and other assets
│   ├── hero-image.svg
│   ├── service1.svg
│   ├── service2.svg
│   ├── service3.svg
│   ├── service4.svg
│   ├── about-image.svg
│   ├── patient1.svg
│   ├── patient2.svg
│   └── patient3.svg
└── README.md           # Project documentation
```

## Technologies Used

- HTML5
- CSS3 (with CSS variables for theming)
- JavaScript (vanilla)
- Font Awesome for icons
- Google Fonts (Poppins)
- SVG graphics for illustrations

## Getting Started

1. Clone or download this repository
2. Open `index.html` in your web browser

## Customization

### Colors

The color scheme can be easily modified by changing the CSS variables in the `:root` selector in `styles/style.css`:

```css
:root {
    --primary-color: #1a73e8;
    --secondary-color: #34a853;
    --accent-color: #ea4335;
    --text-color: #333;
    --light-text: #666;
    --white: #fff;
    --light-bg: #f9f9f9;
    --border-color: #e0e0e0;
    --shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    --transition: all 0.3s ease;
}
```

### Content

To modify the content, edit the text in `index.html`. The page is structured with clear section IDs:

- `#home` - Hero section
- `#features` - Features/benefits section
- `#services` - Services section
- `#about` - About section
- `#testimonials` - Testimonials section
- `#contact` - Contact section

### Images

The project uses SVG images for illustrations. You can replace them with your own images by:

1. Adding new image files to the `assests/` directory
2. Updating the image paths in `index.html`

## Browser Support

The landing page is compatible with all modern browsers including:

- Chrome
- Firefox
- Safari
- Edge

## License

This project is available for personal and commercial use.

## Contact

For any questions or suggestions, please contact info@med-aids.com