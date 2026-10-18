const startAnimation = (entries, observer) => {
    entries.forEach(entry => {
      entry.target.classList.toggle("agent-anim", entry.isIntersecting);
    });
  };
  
  const observer = new IntersectionObserver(startAnimation);
  const options = { root: null, rootMargin: '0px', threshold: 1 }; 
  
  const elements = document.querySelectorAll('.agent-select');
  elements.forEach(el => {
    observer.observe(el, options);
  });