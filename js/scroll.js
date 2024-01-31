function scrollToTop(event) {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
    function scrollToSection(sectionId, event) {
      event.preventDefault();
      var sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }