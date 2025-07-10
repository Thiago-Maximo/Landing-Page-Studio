 // Form submission handler
        document.getElementById('tattooForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulate form submission
            setTimeout(function() {
                document.getElementById('tattooForm').reset();
                document.getElementById('formSuccess').classList.remove('d-none');
                
                // Hide success message after 3 seconds
                setTimeout(function() {
                    document.getElementById('formSuccess').classList.add('d-none');
                }, 3000);
            }, 1000);
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Change navbar background on scroll
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 100) {
                navbar.style.backgroundColor = 'rgba(26, 26, 26, 0.9)';
                navbar.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
            } else {
                navbar.style.backgroundColor = 'var(--primary)';
                navbar.style.boxShadow = 'none';
            }
        });