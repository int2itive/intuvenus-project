const parallax = document.getElementById("parallax");
let bodyStyles = window.getComputedStyle(document.body);
const root = document.documentElement;
// const themeBtns = document.querySelectorAll('.theme > button')
// let newVar = bodyStyles.getPropertyValue('--clr-intu-gold-1'); //get

const menuBtn = document.querySelector('.menu-btn');
const banner = document.querySelector('.header');
const menuSlider = document.querySelector('.mbl--list-items');
// const nav-links
// const para = document.querySelector('.header--content-grid p');
const main = document.querySelector('.headerDown');

let hiddenState = "-hidden", nav_dark = "intuvenus--header";

var threshold = 10,
    uBound = 7, 
    position = 0, 
    lastScroll = 0, 
    n_event = 0;


let styles = getComputedStyle(banner);
console.log(styles.height);

let toSplit = document.querySelector('.header--content-grid p');
let splitSlogan = document.querySelector('.content--sub-hdr h3');

let header = document.querySelector('.header--content-grid h2');

const text = new SplitType(toSplit, { types: 'words, chars' });

const slogan = new SplitType(splitSlogan, { types: 'words, chars' });

// function doProgressBar() {
const progress = document.querySelector('.progress--bar');
document.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const progressWidth = Math.floor(100 * scroll / height);
  progress.style.width = `${progressWidth}%`;
}, { passive: true });
// }


gsap.from(header, {
  opacity: 0,
  y: -20,
  duration: 1.6,
  stagger: { amount: 0.8 },
});

    gsap.fromTo(text.chars, {
      scaleY: 0.1,
      scaleX: 1.8,
      filter: 'blur(10px) brightness(50%)',
      willChange: 'filter, transform'
    }, {
        ease: 'none', 
        scaleY: 1,
        scaleX: 1,
        filter: 'blur(0px) brightness(100%)',
        stagger: 0.03,
        delay: 1.6,
        scrollTrigger: {
          trigger: text,
          start: 'top bottom-=15%', 
          end: 'bottom center+=15%',
          scrub: true, 
        },
    });

    gsap.fromTo(slogan.chars, {
      scaleY: 0.1,
      scaleX: 1.8,
      filter: 'blur(10px) brightness(50%)',
      willChange: 'filter, transform'
    }, {
        ease: 'none', 
        scaleY: 1,
        scaleX: 1,
        filter: 'blur(0px) brightness(100%)',
        stagger: 0.05,
        delay: 1,
        scrollTrigger: {
          trigger: text,
          start: 'top bottom-=15%', 
          end: 'bottom center+=15%',
          scrub: true, 
        },
    });

let menuOpen = false;
menuBtn.addEventListener('click', () => {
  // alert("Hwllo!");
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuSlider.classList.toggle('showing');
    gsap.from('.mbl--list-items .item a', { duration: 1, opacity: 0, delay: 0.85, stagger: 0.3 });
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuSlider.classList.remove('showing');
    menuOpen = false;
  }
});

// click event to each of the page links
document.querySelectorAll(".mbl--list-items .item a").forEach(n => n.addEventListener("click", () => {
    menuBtn.classList.remove('open');
    menuSlider.classList.remove('showing');
}));

function progressIndicator() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
}

  window.addEventListener("scroll", function () {
    progressIndicator();
    var position = window.scrollY || document.documentElement.scrollTop;
    
    if (position > threshold && position > lastScroll) {
      main.classList.add(hiddenState);
    } else {
      main.classList.remove(hiddenState);
      if (window.scrollY > 40) {
        main.classList.add(nav_dark);
      } else {
        main.classList.remove(nav_dark);
      }
    }

    lastScroll = position <= 0 ? 0 : position;

  });


// themeBtns.forEach((btn) => {
//   btn.addEventListener('click', handleThemeUpdate)
// })

// https://codepen.io/ohansemmanuel/pen/xYKgwE?editors=0011

function handleThemeUpdate(e) {
  switch(e.target.value) {
    case 'dark': 
      root.style.setProperty('--bg', 'black')
      // root.style.setProperty('--bg-text', 'white')
      root.style.setProperty('--bg-text', newVar)
      break
    case 'calm': 
       root.style.setProperty('--bg', '#B3E5FC')
       root.style.setProperty('--bg-text', '#37474F')
      break
    case 'light':
      root.style.setProperty('--bg', 'white')
      root.style.setProperty('--bg-text', 'black')
      break
  }
}
