# TravelBloom - Travel Recommendation Web Application

A beautiful and interactive travel recommendation platform built with HTML, CSS, and JavaScript. Discover destinations, explore beaches, temples, and countries with our dynamic search functionality.

## 📋 Features

### Pages
- **Home Page**: Hero section with background image, search bar, social media links, and "Book Now" button
- **About Us Page**: Mission statement, company values, and cultural exploration focus
- **Contact Us Page**: Professional email contact form with validation

### Functionality
- **Navigation Bar**: Responsive menu with links to all pages and active state indicators
- **Search Functionality**: Dynamic search bar that filters recommendations by destination, category, or keywords
- **Recommendation Categories**:
  - Beach Destinations (Maldives, Bali, Boracay, Santorini)
  - Temple Destinations (Angkor Wat, Taj Mahal, Borobudur, Kyoto Temples)
  - Country Destinations (Japan, Italy, Thailand, France)
- **Image Gallery**: Each recommendation includes multiple images with direct links
- **Contact Form**: Email validation and user-friendly feedback
- **Social Media Integration**: Links to social platforms
- **Responsive Design**: Mobile-friendly layout that works on all devices

## 📁 Project Structure

```
TravelBloom/
├── index.html          # Home page
├── about.html          # About Us page
├── contact.html        # Contact Us page
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── script.js       # JavaScript functionality
├── .gitignore          # Git configuration
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- A web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for external images and fonts)
- Text editor (VS Code, Sublime Text, etc.) - optional for development

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Falodunvo/Myproject.git
   cd Myproject
   ```

2. **Open the Website**
   - **Local**: Simply open `index.html` in your web browser
   - **GitHub Pages**: Visit the deployed site at: https://falodunvo.github.io/Myproject/

## 💻 How to Use

### Search Functionality
1. Go to the Home page
2. Use the search bar to search for:
   - Specific destinations (e.g., "Maldives", "Japan")
   - Categories (e.g., "Beach", "Temple", "Country")
   - Keywords (e.g., "tropical", "ancient")
3. Click "Search" or press Enter
4. View filtered results with images
5. Click "Clear" to reset and return to all recommendations

### Contact Form
1. Navigate to "Contact Us" page
2. Fill in your information:
   - Full Name (required)
   - Email Address (required, must be valid)
   - Phone Number (optional)
   - Subject (required)
   - Message (required)
3. Click "Send Message"
4. Receive confirmation message

### Navigation
- Use the top navigation bar to move between pages
- The active page is highlighted in the navigation
- Mobile menu automatically closes when a link is clicked

## 🎨 Customization

### Colors
Edit the CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #2c7873;
    --secondary-color: #6db3a0;
    --accent-color: #ff6b6b;
    /* ... other variables ... */
}
```

### Adding New Recommendations
Edit the `recommendationsData` object in `js/script.js`:
```javascript
const recommendationsData = {
    beaches: [
        {
            name: 'Destination Name',
            category: 'Beach',
            description: 'Description here',
            images: ['image_url_1', 'image_url_2']
        }
    ]
};
```

### Images
Replace image URLs in:
- HTML files (hero background, recommendation cards)
- `recommendationsData` in `script.js`

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🔍 Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## ✅ Assignment Requirements Checklist

- [x] GitHub repository is public: https://github.com/Falodunvo/Myproject
- [x] Website deployed with GitHub Pages
- [x] Home page with hero section and introduction
- [x] About Us page with company values and mission
- [x] Contact Us page with email form
- [x] Navigation bar with links
- [x] Search functionality (Search & Clear buttons)
- [x] Beach recommendations with 2 images each
- [x] Temple recommendations with 2 images each
- [x] Country recommendations with 2 images each
- [x] Responsive design
- [x] Social media links
- [x] Book Now button

## 📚 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Grid, Flexbox, Animations
- **JavaScript (Vanilla)**: Dynamic search, form validation
- **Font Awesome**: Social media icons
- **Unsplash**: High-quality free images

## 🐛 Troubleshooting

### Search Not Working
- Check browser console for errors (F12 → Console)
- Ensure JavaScript is enabled
- Try searching with different keywords

### Images Not Loading
- Check internet connection
- Verify image URLs are accessible
- Try clearing browser cache (Ctrl+Shift+Del)

### Form Not Submitting
- Check all required fields are filled
- Ensure email format is valid (example@email.com)
- Check browser console for errors

## 📝 Notes

- Images are loaded from external CDN (Unsplash) - internet connection required
- Contact form currently displays a success message in browser (no backend integration)
- All data is stored in JavaScript arrays and resets on page refresh

## 🤝 Contributing

Feel free to fork this project and customize it for your needs:
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is open source and available for educational purposes.

## 👤 Author

Created as part of a travel recommendation platform assignment.

## 🔗 Links

- **GitHub Repository**: https://github.com/Falodunvo/Myproject
- **Live Website**: https://falodunvo.github.io/Myproject/

---

**Last Updated**: June 17, 2026

For questions or support, please contact us through the Contact Us page or submit an issue on GitHub.
