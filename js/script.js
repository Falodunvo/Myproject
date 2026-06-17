// ===== Navigation Menu Toggle =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// ===== Search Recommendations Database =====
const recommendationsData = {
    beaches: [
        {
            name: 'Maldives',
            category: 'Beach',
            description: 'Crystal clear waters and pristine white sand beaches',
            images: [
                'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop'
            ]
        },
        {
            name: 'Bali',
            category: 'Beach',
            description: 'Tropical paradise with stunning sunset beaches',
            images: [
                'https://images.unsplash.com/photo-1502933691298-84fc14542831?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1537996051565-04a1be7cbbf1?w=400&h=300&fit=crop'
            ]
        },
        {
            name: 'Boracay',
            category: 'Beach',
            description: 'Pristine white sand beaches in the Philippines',
            images: [
                'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop'
            ]
        },
        {
            name: 'Santorini',
            category: 'Beach',
            description: 'Volcanic beaches with unique mineral sand',
            images: [
                'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1502933691298-84fc14542831?w=400&h=300&fit=crop'
            ]
        }
    ],
    temples: [
        {
            name: 'Angkor Wat',
            category: 'Temple',
            description: 'Ancient Khmer temple complex in Cambodia',
            images: [
                'https://images.unsplash.com/photo-1548013146-72479768bada?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1548013146-72479768bada?w=400&h=300&fit=crop'
            ]
        },
        {
            name: 'Taj Mahal',
            category: 'Temple',
            description: 'Iconic symbol of love in Agra, India',
            images: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop'
            ]
        },
        {
            name: 'Borobudur',
            category: 'Temple',
            description: 'Largest Buddhist monument in the world, Indonesia',
            images: [
                'https://images.unsplash.com/photo-1548013146-72479768bada?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop'
            ]
        },
        {
            name: 'Kyoto Temples',
            category: 'Temple',
            description: 'Ancient Buddhist and Shinto temples in Japan',
            images: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1548013146-72479768bada?w=400&h=300&fit=crop'
            ]
        }
    ],
    countries: [
        {
            name: 'Japan',
            category: 'Country',
            description: 'A perfect blend of ancient tradition and modern innovation',
            images: [
                'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1552053831-71594a27c62d?w=400&h=300&fit=crop'
            ]
        },
        {
            name: 'Italy',
            category: 'Country',
            description: 'Rich history, culture, and culinary delights',
            images: [
                'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1501785888041-af3ee9c470a6?w=400&h=300&fit=crop'
            ]
        },
        {
            name: 'Thailand',
            category: 'Country',
            description: 'Land of smiles with temples, beaches, and vibrant culture',
            images: [
                'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=300&fit=crop'
            ]
        },
        {
            name: 'France',
            category: 'Country',
            description: 'Romance, art, and world-class cuisine',
            images: [
                'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop'
            ]
        }
    ]
};

// ===== Search Functionality =====
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const clearBtn = document.getElementById('clearBtn');
const resultsSection = document.getElementById('resultsSection');
const resultsContainer = document.getElementById('resultsContainer');
const backBtn = document.getElementById('backBtn');
const recommendationsSection = document.querySelector('.recommendations');

// Search function
function performSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();

    if (searchTerm === '') {
        alert('Please enter a search term');
        return;
    }

    // Search through all recommendations
    const results = [];
    
    // Combine all recommendations
    const allRecommendations = [...recommendationsData.beaches, ...recommendationsData.temples, ...recommendationsData.countries];
    
    // Filter based on search term
    allRecommendations.forEach(rec => {
        if (rec.name.toLowerCase().includes(searchTerm) || 
            rec.category.toLowerCase().includes(searchTerm) ||
            rec.description.toLowerCase().includes(searchTerm)) {
            results.push(rec);
        }
    });

    // Display results
    displaySearchResults(results, searchTerm);
}

// Display search results
function displaySearchResults(results, searchTerm) {
    // Hide recommendations section
    if (recommendationsSection) {
        recommendationsSection.style.display = 'none';
    }

    // Show results section
    resultsSection.style.display = 'block';

    // Clear previous results
    resultsContainer.innerHTML = '';

    if (results.length === 0) {
        resultsContainer.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 2rem;">
                <h3 style="color: #999;">No results found for "${searchTerm}"</h3>
                <p style="color: #999;">Try searching for beaches, temples, countries, or specific destination names.</p>
            </div>
        `;
        return;
    }

    // Create result cards
    results.forEach(rec => {
        const resultCard = document.createElement('div');
        resultCard.className = 'recommendation-card';
        resultCard.innerHTML = `
            <img src="${rec.images[0]}" alt="${rec.name}">
            <div class="card-content">
                <h4>${rec.name}</h4>
                <p><strong>${rec.category}</strong></p>
                <p>${rec.description}</p>
                <div style="margin-top: 1rem; display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    ${rec.images.map((img, idx) => `
                        <a href="${img}" target="_blank" style="font-size: 0.85rem; padding: 0.3rem 0.6rem; background-color: #2c7873; color: white; text-decoration: none; border-radius: 3px;">
                            Image ${idx + 1}
                        </a>
                    `).join('')}
                </div>
            </div>
        `;
        resultsContainer.appendChild(resultCard);
    });

    // Scroll to results
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

// Event listeners
if (searchBtn) {
    searchBtn.addEventListener('click', performSearch);
}

if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

// Clear search
if (clearBtn) {
    clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        resultsSection.style.display = 'none';
        if (recommendationsSection) {
            recommendationsSection.style.display = 'block';
        }
        searchInput.focus();
    });
}

// Back button
if (backBtn) {
    backBtn.addEventListener('click', () => {
        resultsSection.style.display = 'none';
        if (recommendationsSection) {
            recommendationsSection.style.display = 'block';
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ===== Contact Form Handling =====
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Basic validation
        if (!name || !email || !subject || !message) {
            showFormMessage('Please fill in all required fields', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showFormMessage('Please enter a valid email address', 'error');
            return;
        }

        // Simulate form submission
        console.log('Form submitted:', { name, email, phone, subject, message });

        // Show success message
        showFormMessage('Thank you for your message! We will get back to you soon.', 'success');

        // Reset form
        contactForm.reset();
    });
}

// Helper function to show form messages
function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    
    // Auto-hide success message after 5 seconds
    if (type === 'success') {
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }
}

// ===== Book Now Button =====
const bookBtn = document.querySelector('.book-btn');
if (bookBtn) {
    bookBtn.addEventListener('click', () => {
        alert('Thank you for your interest! Our booking system is coming soon. Please contact us for more information.');
    });
}

// ===== Smooth Scroll for Internal Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// ===== Add Active Class to Navigation Links =====
window.addEventListener('load', () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
