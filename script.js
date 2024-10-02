const headerH4 = document.querySelector('.creatives .content p');
const text = new SplitType(headerH4, { types: 'words, chars' })
const menuBtn = document.querySelector('.menu-btn');
const menuSlider = document.querySelector('.mbl--list-items');
let ul = document.querySelector(".triggers");
let btn = document.querySelector('.meta--social-icon li:nth-of-type(2)');
let pos = 30;

let menuOpen = false;
menuBtn.addEventListener('click', () => {
  // alert("Hwllo!");
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuSlider.classList.add('showing');
    gsap.from('.mbl--list-items .item a', { duration: 1, opacity: 0, delay: .75, stagger: 0.3 });
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuSlider.classList.remove('showing');
    menuOpen = false;
  }
});

gsap.from('.item a', { duration: 1, opacity: 0, delay: 1, stagger: 0.4 });

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
        scrollTrigger: {
          trigger: text,
          start: 'top bottom-=15%', 
          end: 'bottom center+=15%',
          scrub: true, 
        },
    });


function setTextAnimation(delay, duration, strokeWidth, timingFunction, strokeColor,repeat) {
      let paths = document.querySelectorAll(".creative-header path");
      let mode=repeat?'infinite':'forwards'
      for (let i = 0; i < paths.length; i++) {
          const path = paths[i];
          const length = path.getTotalLength();
          path.style["stroke-dashoffset"] = `${length}px`;
          path.style["stroke-dasharray"] = `${length}px`;
          path.style["stroke-width"] = `${strokeWidth}px`;
          path.style["stroke"] = `${strokeColor}`;
          path.style["animation"] = `${duration}s svg-text-anim ${mode} ${timingFunction}`;
          path.style["animation-delay"] = `${i * delay}s`;
      }
  }
 setTextAnimation(0.1,2.8,1,'linear','#c0c0c0',false);


function tickerAnimation () {
  const items = ul.querySelectorAll('li');
  // ul.style.top = "-" + pos + "px";
  ul.style.transform = `translate(0, - ${pos}px`;
  let children = ul.children;
  let rmItem = children[0]; console.log(rmItem);
  let insertItem = rmItem;
  rmItem.remove();
  ul.appendChild(insertItem);
  runShowing();
}

function runShowing() {
  let links = ul.querySelectorAll('li'); console.log(links)
  links.forEach(link => {
    link.classList.remove('showing');
  });
  links[links.length - 1].classList.add('showing');
}

btn.addEventListener('click', (e) => {
  e.preventDefault;
  tickerAnimation();
});
