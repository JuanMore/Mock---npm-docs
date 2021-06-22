let i = 0;

const randomizeText = () => {
  const phrase = document.querySelector('.npm_text');
  const compStyles = window.getComputedStyle(phrase);
  const animation = compStyles.getPropertyValue('animation');
  const animationTime = parseFloat(animation.match(/\d*[.]?\d+/)) * 1000;
  
  const phrases = ['Needle Pinpointing Machine', 'Never Paint Mohawks', 'No Problemo Muchacho', 'Niceably Playful Monkeys', 'Neolithic Programming Machine', 'Nuclearly Potent Moonshine', 'Neatly Packaged Magic'];
  
  i = randomNum(i, phrases.length);
  const newPhrase = phrases[i];
  
  setTimeout(() => {
    phrase.textContent = newPhrase;
  }, 400); // time to allow opacity to hit 0 before changing word
}

const randomNum = (num, max) => {
  let j = Math.floor(Math.random() * max);
  
  // ensure diff num every time
  if (num === j) {
    return randomNum(i, max);
  } else {
    return j;
  }
}

const getAnimationTime = () => {
  const phrase = document.querySelector('.npm_text');
  const compStyles = window.getComputedStyle(phrase);
  let animation = compStyles.getPropertyValue('animation');
  
  // firefox support for non-shorthand property
  animation != "" ? animation : animation = compStyles.getPropertyValue('-moz-animation-duration');
  
    // webkit support for non-shorthand property
  animation != "" ? animation : animation = compStyles.getPropertyValue('-webkit-animation-duration');
  
  
  const animationTime = parseFloat(animation.match(/\d*[.]?\d+/)) * 1000;
  return animationTime;
}

randomizeText();
setInterval(randomizeText, getAnimationTime());
// credit Jeremy https://codepen.io/thefewunshaken