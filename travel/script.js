//const documentBody = document.querySelector('body');
//const scrollY = document.body.style.top;
let bodyStyles = window.getComputedStyle(document.body);
const root = document.documentElement;
const themeBtn = document.querySelector('header nav button');
const mainContent = document.querySelector('.main--content'); console.log(themeBtn);
let counters = document.querySelectorAll('.counter'); console.log(counters)
// let count = counters[1].dataset.count;
let initial = null;

const counterAnim = (qSelector, start = 0, end, duration = 1000) => {
 // const target = document.querySelector(qSelector);
 let startTimestamp = null;
 
 const step = (timestamp) => {
  
  if (!startTimestamp) startTimestamp = timestamp;
  // if (!initial && !startTimestamp) startTimestamp = timestamp;
  const progress = Math.min((timestamp - startTimestamp) / duration, 1);
  qSelector.querySelector('p').textContent = Math.floor(progress * (end - start) + start);
  if (progress < 1) {
   window.requestAnimationFrame(step);
  }

 }
 initial = true;
 window.requestAnimationFrame(step);
}

// document.addEventListener("DOMContentLoaded", () => {
//  // counterAnim("#count1", 10, 300, 1000);
//  // counterAnim("#count2", 5000, 250, 1500);
//  // counterAnim("#count3", -1000, -150, 2000);
//  // counterAnim("#count4", 500, -100, 2500);
//  counters.forEach((counter) => {
//   let ttl = counters.length;
//   count = counter.dataset.count;
//   // console.log(count);
//   // console.log(ttl);
//   counterAnim(counter, 0, count, 3000);
//  })
// });

function setupCounterAnimation() {
 counters.forEach((counter) => {
  counter.classList.add('inview');
  console.log(counter)
  let ttl = counters.length;
  count = counter.dataset.count;
  // console.log(count);
  // console.log(ttl);
  // counters.forEach(counter => {
  //   counter.classList.add('inview');
  // });
  if (!initial) {
    counterAnim(counter, 0, count, 3000);
  }
 });
}

// const themeBtns = document.querySelectorAll('.theme > button');
// let fooBar = bodyStyles.getPropertyValue('--clr-intu-accent-1');
let fooBar = bodyStyles.getPropertyValue('color');
let textLight = bodyStyles.getPropertyValue('--clr-text-light');

const menuBtn = document.querySelector('.menu-btn');
const banner = document.querySelector('.header');
const menuSlider = document.querySelector('.mbl--list-items');
// const para = document.querySelector('.header--content-grid p');
const main = document.querySelector('.headerDown');


function toggleDarkTheme(e) {
  // body...
  let header = root.querySelector('.main--title');//get
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

themeBtn.addEventListener('click', toggleDarkTheme);
toggleDarkTheme();

let hiddenState = "-hidden", nav_dark = "intuvenus--header";

var threshold = 10,
    uBound = 7, 
    position = 0, 
    lastScroll = 0, 
    n_event = 0;

let toSplit = document.querySelector('.main--title');
const text = new SplitType(toSplit, { types: 'words, chars' });
// let styles = getComputedStyle(banner);
// console.log(styles.height);


let menuOpen = false;
menuBtn.addEventListener('click', () => {
  // alert("Hwllo!");
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuSlider.classList.toggle('showing');
    gsap.from('.mbl--list-items .item a', { duration: 1, opacity: 0, delay: 0.75, stagger: 0.3 });
    // document.body.style.position = 'fixed';
    // document.body.style.top = `-${window.scrollY}px`;
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuSlider.classList.remove('showing');
    // document.body.style.position = '';
    // document.body.style.top = '';
    // window.scrollTo(0, parseInt(scrollY || '0') * -1);
    menuOpen = false;
  }
});


function progressIndicator() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
}

window.addEventListener("scroll", function () {
    progressIndicator();
    showIt();
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
    setupCounterAnimation();
});

function showIt() {
  const toBeShown = document.querySelectorAll(".impact"); // consider adding :not(.scrolled) to selector to reduce the number of iterations if you don't want to support scrolling up

  // consider taking this outside of the loop and resetting it on window resize to optimize the loop
  const halfScreen = window.innerHeight / 2; // - 50;
  
  toBeShown.forEach((item, i) => {
    const scrolled = (window.scrollY + window.innerHeight);// - (item.offsetHeight/2);

    if (item.offsetTop - window.scrollY < halfScreen) {
      item.classList.add('scrolled');
    } else {
      item.classList.remove('scrolled');
    }
  })
  setupCounterAnimation();
}

// window.addEventListener('scroll', showIt);


// window.addEventListener('scroll', function(){
//   let scrollPosition = window.pageYOffset;
//   let bgParallax = document.querySelector('#parallax');
//   let limit = bgParallax.offsetTop + bgParallax.offsetHeight;  
//   if (scrollPosition > bgParallax.offsetTop && scrollPosition <= limit){
//     console.log(scrollPosition);
//     bgParallax.style.backgroundPositionY = (50 - 10*scrollPosition/limit) + '%';   
//   }else{
//     bgParallax.style.backgroundPositionY = '50%';    
//   }
// });




// gsap.registerPlugin();

// gsap.from(header, {
//   opacity: 0,
//   y: -20,
//   duration: 1.6,
//   stagger: { amount: 0.8 },
// });

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
  stagger: 0.05,
  delay: 1, // 1.6
  scrollTrigger: {
    trigger: text,
    start: 'top bottom-=15%', 
    end: 'bottom center+=15%',
    scrub: true, 
  },
});
