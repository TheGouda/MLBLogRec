document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the content page
    if (document.querySelector('.sidebar')) {
        setupSidebar();
    }
    
    // Handle content box hover effects
    const contentBoxes = document.querySelectorAll('.content-box');
    contentBoxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)';
        });
        
        box.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    });
});

function setupSidebar() {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const sidebar = document.querySelector('.sidebar');
    const contentWrapper = document.querySelector('.content-wrapper');
    const overlay = document.querySelector('.overlay');
    const topicItems = document.querySelectorAll('.topic-item');
    
    // Toggle sidebar when hamburger icon is clicked
    hamburgerIcon.addEventListener('click', function() {
        toggleSidebar();
    });
    
    // Close sidebar when clicking the overlay
    overlay.addEventListener('click', function() {
        closeSidebar();
    });
    
    // Setup topic and subtopic interactions
    topicItems.forEach(item => {
        const topicLink = item.querySelector('.topic-link');
        const subtopicList = item.querySelector('.subtopic-list');
        
        if (topicLink && subtopicList) {
            topicLink.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Toggle subtopic list
                subtopicList.classList.toggle('show');
                
                // Toggle arrow icon
                const arrow = this.querySelector('.fa-chevron-right');
                if (arrow) {
                    arrow.classList.toggle('fa-rotate-90');
                }
                
                // Load topic content if no subtopics or if it's a direct link
                if (!subtopicList || subtopicList.children.length === 0) {
                    loadContent(this.getAttribute('data-topic'));
                    
                    // Highlight active topic
                    document.querySelectorAll('.topic-link').forEach(link => {
                        link.classList.remove('active');
                    });
                    this.classList.add('active');
                    
                    // Close sidebar on mobile
                    if (window.innerWidth < 992) {
                        closeSidebar();
                    }
                }
            });
        }
    });
    
    // Setup subtopic clicks
    const subtopicLinks = document.querySelectorAll('.subtopic-link');
    subtopicLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all subtopics
            subtopicLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked subtopic
            this.classList.add('active');
            
            // Load subtopic content
            loadContent(this.getAttribute('data-subtopic'));
            
            // Close sidebar on mobile
            if (window.innerWidth < 992) {
                closeSidebar();
            }
        });
    });
    
    // Parse URL parameters for direct content loading
    loadContentFromURL();
    
    // Function to toggle sidebar
    function toggleSidebar() {
        const isActive = sidebar.classList.contains('active');
        
        if (isActive) {
            closeSidebar();
        } else {
            sidebar.classList.add('active');
            hamburgerIcon.classList.add('active');
            contentWrapper.classList.add('shifted');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }
    
    // Function to close sidebar
    function closeSidebar() {
        sidebar.classList.remove('active');
        hamburgerIcon.classList.remove('active');
        contentWrapper.classList.remove('shifted');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 992 && sidebar.classList.contains('active')) {
            contentWrapper.classList.add('shifted');
        } else {
            contentWrapper.classList.remove('shifted');
        }
    });
}

// Function to load content based on topic or subtopic
function loadContent(contentId) {
    if (!contentId) return;
    
    // Display loading state
    const contentContainer = document.querySelector('#content-container');
    contentContainer.innerHTML = '<div class="text-center my-5"><div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div><p class="mt-3">Loading content...</p></div>';
    
    // Simulate content loading (replace with actual content from content.js)
    setTimeout(() => {
        if (window.contentData && window.contentData[contentId]) {
            contentContainer.innerHTML = window.contentData[contentId];
            
            // Update page title based on content
            const titleElement = contentContainer.querySelector('h1');
            if (titleElement) {
                document.title = titleElement.textContent + ' - ML Insights';
            }
            
            // Scroll to top
            window.scrollTo(0, 0);
        } else {
            contentContainer.innerHTML = `<div class="alert alert-warning" role="alert">Content for "${contentId}" not found.</div>`;
        }
    }, 500);
}

// Function to load content from URL parameters
function loadContentFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const topic = urlParams.get('topic');
    const subtopic = urlParams.get('subtopic');
    
    if (subtopic) {
        // Find and activate subtopic
        const subtopicLink = document.querySelector(`.subtopic-link[data-subtopic="${subtopic}"]`);
        if (subtopicLink) {
            subtopicLink.classList.add('active');
            
            // Expand parent topic
            const parentTopic = subtopicLink.closest('.topic-item');
            if (parentTopic) {
                const topicLink = parentTopic.querySelector('.topic-link');
                const subtopicList = parentTopic.querySelector('.subtopic-list');
                const arrow = topicLink.querySelector('.fa-chevron-right');
                
                subtopicList.classList.add('show');
                if (arrow) arrow.classList.add('fa-rotate-90');
            }
            
            loadContent(subtopic);
        }
    } else if (topic) {
        // Find and activate topic
        const topicLink = document.querySelector(`.topic-link[data-topic="${topic}"]`);
        if (topicLink) {
            topicLink.classList.add('active');
            loadContent(topic);
        }
    } else {
        // Load default content
        loadContent('neural-networks');
    }
}
