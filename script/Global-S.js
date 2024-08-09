// Hidden Header Script
const toggleHeader = document.getElementById('toggle-header');
const mainHeader = document.querySelector('.header_hide_list');
const headerhidelinks = document.querySelector(".header_hide_links")
const toggleIcon = document.getElementById('toggle-icon');

toggleHeader.addEventListener('change', function() {
    if (this.checked) {
        headerhidelinks.style.display = 'block';
    } else {
        headerhidelinks.style.display = 'none';
    }
});


// Spinner Script
document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.getElementById('preloader');

    // Hide the preloader after the page is fully loaded
    window.addEventListener('load', function() {
        preloader.classList.add('hidden');
    });

    // Show the preloader before the page starts to unload
    window.addEventListener('beforeunload', function() {
        preloader.classList.remove('hidden');
    });
});


// Hide & undhide Sections
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    console.log(sections)
    const options = {
        root: null,
        threshold: 0.5
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});

// Auto Scrolling Images
document.addEventListener('DOMContentLoaded', function() {
    const scrollContainer = document.querySelector('.scroll-container');
    const images = document.querySelectorAll('.scroll-container img');
    const totalWidth = scrollContainer.scrollWidth;
    let scrollAmount = 0;

    function cloneImages() {
        images.forEach((img) => {
            const clone = img.cloneNode(true);
            scrollContainer.appendChild(clone);
        });
    }

    function autoScroll() {
        scrollAmount += 1; // Adjust this value to control the scroll speed
        if (scrollAmount >= totalWidth) {
            scrollAmount = 0; // Reset scroll amount to create infinite scroll effect
        }
        scrollContainer.style.transform = `translateX(-${scrollAmount}px)`;
        requestAnimationFrame(autoScroll);
    }

    cloneImages();
    autoScroll();
});


// Left to Right Animation
document.addEventListener('DOMContentLoaded', function() {
  const content = document.querySelector('.left-right_content');
  
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const contentOffset = content.offsetTop;
    const windowHeight = window.innerHeight;

    if (scrollPosition > contentOffset - windowHeight / 2) {
      content.classList.add('centered');
    }
  });
});






// Pop Up Courses
document.addEventListener('DOMContentLoaded', function() {
    const courses = document.querySelectorAll('.course-m');
    const popupOverlay = document.getElementById('popupOverlay');
    const popupContent = document.getElementById('popupContent');
    const closeBtn = document.getElementById('closeBtn');
    const popupTitle = document.getElementById('popupTitle');
    const popupDescription = document.getElementById('popupDescription');
    const popupImage = document.getElementById('popupImage');
    const re = document.querySelectorAll('.re')
    courses.forEach(course => {
            course.addEventListener('click', function() {
                const img = course.querySelector('.course-m img').src;
                const title = course.querySelector('h2').textContent;
                const description = course.querySelector('p').innerHTML;
    
                popupImage.src = img;
                popupTitle.textContent = title;
                popupDescription.innerHTML = description;
                popupOverlay.style.display = 'flex';
            });
        } )
    });
    closeBtn.addEventListener('click', function() {
        popupOverlay.style.display = 'none';
    });




