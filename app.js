function slidesPlugin(active = 2){ //active = 2 по умолчанию
    const slides = document.querySelectorAll('.slide')
  
    slides[active].classList.add('active')
  
    for(const slide of slides){
        slide.addEventListener('click', () => {
            clearActiveClasses()
            slide.classList.add('active')
        })
    }
  
    function clearActiveClasses(){
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
    }
  }
  slidesPlugin(2)