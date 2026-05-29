let newX = 0, newY = 0, startX = 0, startY = 0;
let clientHeight, clientWidth;
const container = document.getElementById('container');
const addCardButton = document.getElementById('addCardButton');

 clientHeight = container.clientHeight;
clientWidth = container.clientWidth;

// Initialize card creation functionality
addCardButton.addEventListener('click', () => {
  createCard();
});

function createCard() {
  const card = document.createElement('div');
  card.classList.add('card');
  
  // Set random percentage-based position for each new card
  let currentXPercent = Math.random() * 100;
  let currentYPercent = Math.random() * 100;

  // Store initial position in dataset for later use
  card.dataset.xPercent = currentXPercent;
  card.dataset.yPercent = currentYPercent;

  // Convert percentage to pixels based on container size
  let topInPixels = (currentYPercent / 100) * clientHeight;
  let leftInPixels = (currentXPercent / 100) * clientWidth;

  card.style.top = topInPixels + 'px';
  card.style.left = leftInPixels + 'px';

  container.appendChild(card);

  // Make the card draggable
  card.addEventListener('mousedown', mouseDown);
  card.addEventListener('touchstart', touchStart);
  
  function mouseDown(e) {
    startX = e.clientX;
    startY = e.clientY;
    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseUp);
  }

  function mouseMove(e) {
    handleDrag(e.clientX, e.clientY, card);
  }

  function mouseUp() {
    document.removeEventListener('mousemove', mouseMove);
    document.removeEventListener('mouseup', mouseUp);
  }

  function touchStart(e) {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    document.addEventListener('touchmove', touchMove);
    document.addEventListener('touchend', touchEnd);
  }

  function touchMove(e) {
    handleDrag(e.touches[0].clientX, e.touches[0].clientY, card);
  }

  function touchEnd() {
    document.removeEventListener('touchmove', touchMove);
    document.removeEventListener('touchend', touchEnd);
  }

  function handleDrag(currentX, currentY, card) {
    newX = startX - currentX;
    newY = startY - currentY;
    startX = currentX;
    startY = currentY;

    let newTop = card.offsetTop - newY;
    let newLeft = card.offsetLeft - newX;

    // Check boundaries to prevent the card from moving outside the container
    if (newTop < 0) newTop = 0;
    if (newLeft < 0) newLeft = 0;
    if (newTop + card.clientHeight > clientHeight) newTop = clientHeight - card.clientHeight;
    if (newLeft + card.clientWidth > clientWidth) newLeft = clientWidth - card.clientWidth;

    card.style.top = newTop + 'px';
    card.style.left = newLeft + 'px';

    // Update percentage position based on the new pixel position
    card.dataset.xPercent = (newLeft / clientWidth) * 100;
    card.dataset.yPercent = (newTop / clientHeight) * 100;
  }
}

// Update container dimensions and reposition the cards on window resize
window.addEventListener('resize', () => {
  clientHeight = container.clientHeight;
  clientWidth = container.clientWidth;

  // Reposition all cards based on their stored percentage position
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    let currentXPercent = parseFloat(card.dataset.xPercent);
    let currentYPercent = parseFloat(card.dataset.yPercent);

    // Convert percentage to pixels based on container size
    let topInPixels = (currentYPercent / 100) * clientHeight;
    let leftInPixels = (currentXPercent / 100) * clientWidth;

    card.style.top = topInPixels + 'px';
    card.style.left = leftInPixels + 'px';
  });
});
