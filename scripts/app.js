console.log("Sanity Check!");

const gif = document.getElementById('gif');

gif.style.setProperty('background-size', '300%', 'important');
gif.style.setProperty('background-position', 'top left', 'important');
gif.style.backgroundPositionY = "top left";

setTimeout(() => {
  gif.style.setProperty('background-size', '200%', 'important');
   gif.style.setProperty('background-position', 'center center', 'important');

}, 20000); // after 2 seconds
