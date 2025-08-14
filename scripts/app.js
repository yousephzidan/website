console.log("Sanity Check!");

const gif = document.getElementById('gif');

gif.style.setProperty('background-size', '350%', 'important');
gif.style.setProperty('background-position', 'top left', 'important');
gif.style.backgroundPositionY = "top left";

setTimeout(() => {
  gif.style.setProperty('background-size', '200%', 'important');
  gif.style.setProperty('background-position', 'center center', 'important');

}, 21000); // after 2 seconds


setTimeout(() => {
  gif.style.setProperty('background-size', '400%', 'important');
  gif.style.setProperty('background-position', 'top left', 'important');

}, 50000); // after 2 seconds

