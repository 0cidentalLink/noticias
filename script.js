

    const carousel = document.querySelector('.carousel');
    const indicatorsContainer = document.getElementById('indicators');
    const slides = document.querySelectorAll('.carousel li');
    const totalSlides = slides.length;
    let currentIndex = 0;

    // Criar indicadores
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('span');
      dot.classList.add('indicator');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(i));
      indicatorsContainer.appendChild(dot);
    }

    function updateCarousel() {
      carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
      document.querySelectorAll('.indicator').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
      });
    }

    function goToSlide(index) {
      currentIndex = index;
      updateCarousel();
    }

    document.getElementById('prev').addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateCarousel();
    });

    document.getElementById('next').addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateCarousel();
    });
  