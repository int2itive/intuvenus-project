const parallax = document.getElementById("parallax");
const counters = document.querySelectorAll('.counter');
// const counterContainer = documennt.querySelector('.impact');
let count = counters[1].dataset.count; // file:///D:/dev/git/numCounter/index.html
let bodyStyles = window.getComputedStyle(document.body);
const root = document.documentElement ;
const themeBtn = document.querySelector('nav button');
const mainContent = document.querySelector('.main--content'); console.log(mainContent);
// const themeBtns = document.querySelectorAll('.theme > button');

let fooBar = bodyStyles.getPropertyValue('--clr-intu-accent-1');
let textLight = bodyStyles.getPropertyValue('--clr-text-light');

const menuBtn = document.querySelector('.menu-btn');
const banner = document.querySelector('.header');
const menuSlider = document.querySelector('.mbl--list-items');
// const nav-links
// const para = document.querySelector('.header--content-grid p');
const main = document.querySelector('.headerDown');




function toggleDarkTheme(e) {
  // body...
  let header = root.querySelector('.main--content h2');//get
  let subHeader = root.querySelector('.main--sub-hdr h3');//get

  let paras = root.querySelectorAll('p');//get
  let groups = document.querySelectorAll('nav button g');
  root.classList.toggle('dark__on');

  if (root.classList.contains('dark__on')) {
    root.style.setProperty('--bg', 'black');
    root.style.setProperty('--bg-text', 'white');
    header.style.setProperty('color', fooBar);
    subHeader.style.setProperty('color', textLight);
    for (let para of paras) {
      para.style.color = 'white';
    }
  } else {
    root.style.setProperty('--bg', 'white');
    root.style.setProperty('--bg-text', 'black');
    header.style.setProperty('color', 'black');
    subHeader.style.setProperty('color', 'black');
    for (let para of paras) {
      para.style.color = 'black';
    }   
  }
  themeBtn.querySelector('g:nth-of-type(1)').style.display = root.classList.contains('dark__on') ? 'block' :'none';
  themeBtn.querySelector('g:nth-of-type(2)').style.display = root.classList.contains('dark__on') ? 'none' : 'block';
}

// for (const child of mainContent.children) {
//   child.style.color = 'black';
// }
themeBtn.addEventListener('click', toggleDarkTheme);
toggleDarkTheme();

function handleThemeUpdate(e) {
  
  let header = root.querySelector('.main--content h2');//get
  for (const child of mainContent.children) {
    child.style.color = 'black';
  }  
  let paras = root.querySelectorAll('p');//get
  let groups = document.querySelectorAll('nav button g');
  groups.forEach((grp) => {
    // grp.style.display = body.classList.contains('dark__on') ? 
  });
  this.querySelector('.dark__off').style.display = 'block';
  this.querySelector('.dark__on').style.display = 'none';
  root.style.setProperty('--bg', 'white');
  root.style.setProperty('--bg-text', 'black');
  header.style.setProperty('--bg-text', 'black');
  paras.forEach((para) => {
    para.style.setProperty('color', 'black');
  })
  // switch(e.target.value) {
  //   case 'dark': 
  //     root.style.setProperty('--bg', 'black')
  //     root.style.setProperty('--bg-text', 'white')
  //     header.style.setProperty('color', fooBar)
  //     break
  //   case 'calm': 
  //      root.style.setProperty('--bg', '#B3E5FC')
  //      root.style.setProperty('--bg-text', '#37474F')
  //     break
  //   case 'light':
  //     root.style.setProperty('--bg', 'white')
  //     root.style.setProperty('--bg-text', 'black')
  //     break
  // }
}


// const [menuBtn, banner, menuSlider, main] = ['.menu-btn', '.header', '.mbl--list-items', '.headerDown']
    // .map(nodes => document.querySelector(nodes));
// https://marioyepes.com/blog/pure-javascript-scroll-counter/
// https://stackoverflow.com/questions/43697749/scroll-animation-in-plain-javascript
// https://dev.to/sprite421/working-with-an-html-element-s-position-onscreen-in-vanilla-javascript-436h
// https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/
// https://dev.to/lydiahallie/series/3341

let hiddenState = "-hidden", nav_dark = "intuvenus--header";

var threshold = 10,
    uBound = 7, 
    position = 0, 
    lastScroll = 0, 
    n_event = 0;


let styles = getComputedStyle(banner);
console.log(styles.height);

let toSplit = document.querySelector('.header--content-grid p');
// let splitSlogan = document.querySelector('.content--sub-hdr h3');
let splitSlogan = document.querySelector('.main--sub-hdr h3');

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

function displayCounterInit() {
  const counterContainer = document.querySelector('.impact'); console.log(counterContainer);
  const halfScreen = window.innerHeight / 2;
  const scrolled = (window.scrollY + window.innerHeight);// - (item.offsetHeight/2);

  if (counterContainer.offsetTop - window.scrollY < halfScreen) {
   counters.forEach((counter) => {
    let totalCounters = counters.length;
    count = counter.dataset.count;
    counterAnim(counter, 0, count, 3000);
   });
  // } else {
  //   item.classList.remove('scrolled');
  }

}

window.addEventListener("scroll", function () {
  progressIndicator();
  displayCounterInit();
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



const counterAnim = (qSelector, start = 0, end, duration = 1000) => {
 // const target = document.querySelector(qSelector);
 let startTimestamp = null;
 
 const step = (timestamp) => {
  
  if (!startTimestamp) startTimestamp = timestamp;
  const progress = Math.min((timestamp - startTimestamp) / duration, 1);
  qSelector.querySelector('span').textContent = Math.floor(progress * (end - start) + start);
  if (progress < 1) {
   window.requestAnimationFrame(step);
  }

 }

 window.requestAnimationFrame(step);
}

 // counters.forEach((counter) => {
 //  let ttl = counters.length;
 //  count = counter.dataset.count;
 //  // console.log(count);
 //  // console.log(ttl);
 //  counterAnim(counter, 0, count, 3000);
 // });



;

