/**
 * Live Search Component for Kasi-Tech Solutions
 * Filters service cards or content elements based on user input.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Optional: Create search bar dynamically if a container with id 'search-container' exists
    const searchContainer = document.getElementById('search-container');
    if (searchContainer) {
        searchContainer.innerHTML = `
            <div class="form-group" style="margin-bottom: 2rem;">
                <input type="text" id="live-search-input" placeholder="Search services, team members, or solutions..." style="width: 100%; padding: 0.75rem 1rem; border: 1px solid var(--border); border-radius: 6px; font-size: 1rem;">
            </div>
        `;
    }

    const searchInput = document.getElementById('live-search-input') || document.querySelector('.site-search-input');
    
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        
        // Target service cards or content blocks to filter
        const cards = document.querySelectorAll('.service-card, .about-card');

        cards.forEach(card => {
            const textContent = card.textContent.toLowerCase();
            if (textContent.includes(query)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });
});