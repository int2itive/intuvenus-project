//const documentBody = document.querySelector('body');
//const scrollY = document.body.style.top;
let bodyStyles = window.getComputedStyle(document.body);
const root = document.documentElement;
const themeBtn = document.querySelector('header nav button');
const mainContent = document.querySelector('.main--content'); console.log(themeBtn);

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
