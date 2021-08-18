const hero = document.querySelector(".hero");
const text = document.querySelector("h1");
const emoji = document.querySelector("span");
const range = 300;

function shadow(e) {
  const width = hero.offsetWidth;
  const height = hero.offsetHeight;
  let x = e.offsetX;
  let y = e.offsetY;

// this is always hero class, that is being listened on
// e.target is the thing by which the event actually triggered on
  if (this !== e.target){
    x += e.target.offsetLeft;
    y += e.target.offsetTop;
  }

  // (0:100) => (-50:+50)
  const xRange = (x / width * range) - (range / 2);
  const yRange = (y / height * range) - (range / 2);


  text.style.textShadow = `
        ${xRange}px ${yRange}px 0 rgba(255,0,255,0.7),
        ${-xRange}px ${yRange}px 0 rgba(0,255,255,0.7),
        ${yRange}px ${-xRange}px 0 rgba(255,255,0,0.7),
        ${-yRange}px ${xRange}px 0 rgba(55,255,55,0.7)
  `;


  emoji.style.textShadow = `
              ${xRange}px ${yRange}px 0 inherit,
              ${-xRange}px ${yRange}px 0 rgba(0,255,255,0.7),
              ${yRange}px ${-xRange}px 0 rgba(255,255,0,0.7),
              ${-yRange}px ${xRange}px 0 rgba(55,255,55,0.7)
              `;
}

hero.addEventListener("mousemove", shadow);
