document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          document.querySelectorAll('.page').forEach(page => {
              page.classList.remove('active');
          });
          const target = document.querySelector(this.getAttribute('href'));
          target.classList.add('active');
      });
  });
  