# Med-Aids - Healthcare Website

Welcome to Med-Aids, a comprehensive healthcare website designed to provide information about services, manage appointments, and offer an administrative panel for efficient content and user management.

## Project Structure

```
Med-Aids/
├── README.md
├── assests/                  # Contains images and other static assets
├── index.html                # Main landing page
├── pages/                    # HTML pages for the website and admin panel
│   ├── about.html
│   ├── admin-appointments.html
│   ├── admin-content.html
│   ├── admin-dashboard.html
│   ├── admin-login.html
│   ├── admin-register.html
│   ├── admin-services.html
│   ├── admin-settings.html
│   ├── admin-testimonials.html
│   ├── admin-users.html
│   ├── contact.html
│   ├── login.html
│   ├── register.html
│   ├── services.html
│   └── testimonials.html
├── src/                      # JavaScript files
│   ├── admin.js
│   ├── auth.js
│   ├── features.js
│   └── script.js
└── styles/                   # CSS files
    ├── admin.css
    ├── auth.css
    ├── features.css
    ├── page.css
    └── style.css
```

## Features

### Public-Facing Website
- **Home Page:** Overview of Med-Aids services and mission.
- **About Us:** Detailed information about the organization.
- **Services:** Comprehensive list and description of healthcare services offered.
- **Testimonials:** Patient reviews and feedback.
- **Contact Us:** Form for inquiries and contact information.
- **Login/Register:** User authentication for patient portal access.

### Admin Panel
Accessible via `pages/admin-login.html`.
- **Admin Login:** Secure login for administrators.
- **Admin Registration:** Separate registration for new admin accounts.
- **Dashboard:** Overview of key metrics and recent activities.
- **Content Management:** Edit and manage website content (Hero, Features, Services, About, Testimonials, Contact, Footer sections).
- **Services Management:** Add, edit, view, and delete healthcare services.
- **Testimonials Management:** Manage patient testimonials, including approval and deletion.
- **User Management:** Administer user accounts (add, edit, delete).
- **Appointments Management:** View, add, edit, approve, and cancel appointments.
- **Settings:** Configure general site settings, security, and social media links.

## Setup and Usage

To run this project locally, simply open the `index.html` file in your web browser. All pages are linked relative to this file.

### Accessing the Admin Panel
1. Navigate to `pages/admin-login.html` in your browser.
2. **Default Admin Credentials (for demonstration purposes):**
   - **Username:** `ElonDADA`
   - **Password:** `ElonDADA123@!`
3. You can also register a new admin account via `pages/admin-register.html`.

**Note:** The admin panel's authentication and data persistence are simulated using client-side JavaScript and `localStorage`/`sessionStorage` for demonstration purposes. In a production environment, a robust backend system would be required for secure authentication and data management.

## Technologies Used
- HTML5
- CSS3
- JavaScript
- Font Awesome (for icons)
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