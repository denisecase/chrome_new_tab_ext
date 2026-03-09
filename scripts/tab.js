/**
 * Chrome Home Tab module.
 * @module tab
 */

import getDailyImage from './dailyImage.js';
import * as dateTime from './dateTime.js';

(function initializeTab() {
  const greetingElement = document.getElementById('greeting');
  const clockElement = document.getElementById('clockbox');

  if (!greetingElement || !clockElement) {
    console.error('Missing #greeting or #clockbox element.');
    return;
  }

  async function updateDisplayImage() {
    const imageURL = await getDailyImage();
    if (imageURL) {
      document.body.style.backgroundImage = `url("${imageURL}")`;
    }
  }

  function updateDisplay() {
    const { clock, nhour } = dateTime.getClock();
    const greeting = dateTime.getGreeting(nhour);

    clockElement.textContent = clock;
    greetingElement.textContent = greeting;
  }

  const refreshMilliseconds = 10000;

  updateDisplayImage();
  updateDisplay();
  setInterval(updateDisplay, refreshMilliseconds);

  console.log('done assigning handlers ....');
}());
