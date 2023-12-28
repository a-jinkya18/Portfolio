// Revealing Section when Scroll
const allSection = document.querySelectorAll('.section');

const revealSection = function(entries, observer){
    const [entry] = entries;
    if(!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revealSection, {root:null, threshold: 0.15});

allSection.forEach((section)=>{
    sectionObserver.observe(section);
    section.classList.add('section--hidden');
})


const header = document.querySelector("header");
const nav = document.querySelector("nav");

const stickyNav = function(entries){
  const [entry] = entries;
    console.log(entry.isIntersecting)
  if(!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
  console.log(nav)
}

const headerObserver = new IntersectionObserver(stickyNav, {root: null, threshold: 0, rootMargin: "-90px"});

headerObserver.observe(header);