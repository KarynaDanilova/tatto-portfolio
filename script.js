function fitTextToContainer(el) {
  const parent = el.parentElement;
  const parentHeight = parent.clientHeight - 2 * parseFloat(getComputedStyle(el).paddingTop); 
  const parentWidth = parent.clientWidth - 2 * parseFloat(getComputedStyle(el).paddingLeft);

  let fontSize = 10; // start small
  el.style.fontSize = fontSize + 'px';

  while (el.scrollHeight <= parentHeight && el.scrollWidth <= parentWidth) {
    fontSize += 0.5; // smaller increment = more precise
    el.style.fontSize = fontSize + 'px';
  }

  // Step back slightly if overflow
  fontSize -= 0.5;
  el.style.fontSize = fontSize + 'px';
}
function fitTextToContainer(el) {
  const parent = el.parentElement;
  const parentHeight = parent.clientHeight - 2 * parseFloat(getComputedStyle(el).paddingTop); 
  const parentWidth = parent.clientWidth - 2 * parseFloat(getComputedStyle(el).paddingLeft);

  let fontSize = 10; // start small
  el.style.fontSize = fontSize + 'px';

  while (el.scrollHeight <= parentHeight && el.scrollWidth <= parentWidth) {
    fontSize += 0.5; // smaller increment = more precise
    el.style.fontSize = fontSize + 'px';
  }

  // Step back slightly if overflow
  fontSize -= 0.5;
  el.style.fontSize = fontSize + 'px';
}

// Apply it after the page loads
window.addEventListener('load', () => {
  document.querySelectorAll('.fit-text').forEach(fitTextToContainer);
  window.addEventListener('resize', () => {
    document.querySelectorAll('.fit-text').forEach(fitTextToContainer);
  });
});
window.addEventListener('load', () => {
  const images = document.querySelectorAll('.about-cards-section .card img');
  let loadedCount = 0;

  images.forEach(img => {
    if (img.complete) loadedCount++;
    else img.addEventListener('load', () => {
      loadedCount++;
      if (loadedCount === images.length) adjustCardsAndText();
    });
  });

  if (loadedCount === images.length) adjustCardsAndText();
});

function adjustCardsAndText() {
  // Make all cards same height
  const cards = document.querySelectorAll('.about-cards-section .card');
  let maxHeight = 0;
  cards.forEach(card => maxHeight = Math.max(maxHeight, card.offsetHeight));
  cards.forEach(card => card.style.height = maxHeight + 'px');

  // Fit text inside cards
  document.querySelectorAll('.fit-text').forEach(fitTextToContainer);
}
