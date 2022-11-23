/**
 * Chrome Home Tab module.
 * Illustrates basic HTML, CSS, JavaScript, JSON.
 * @module tab
 */
import getDailyImage from './dailyImage.js';
import * as dateTime from './dateTime.js';

/**
 * Logic to execute each time the new tab loads.
 * Includes a recurring update every n milliseconds.
 */

(function () {
  // assign display elements .............................................

  const backgroundElement = document.getElementById('background');
  const greetingElement = document.getElementById('greeting');
  const clockElement = document.getElementById('clockbox');

  // helper functions.................................................

  /**
     * Set background image to imageURL
     * @param {String} imageURL
     * @param {Element} element to update
     */
  function updateBackgroundImage(imageURL, el) {
    el.style.backgroundImage = `url("${imageURL}"`;
  }

  async function updateDisplayImage(el) {
    const imageURL = await getDailyImage();
    if (imageURL !== undefined) {
      updateBackgroundImage(imageURL, el);
    }
  }

  // define event handlers .........................................................

  const updateDisplay = (elClock, elGreet) => {
    const { clock, nhour } = dateTime.getClock();
    const greeting = dateTime.getGreeting(nhour);
    elClock.innerHTML = clock;
    elGreet.innerHTML = greeting;
  };

  const refreshMilliseconds = 10000;
  updateDisplayImage(backgroundElement);
  updateDisplay(clockElement, greetingElement);
  setInterval(
    updateDisplay.bind(null, clockElement, greetingElement),
    refreshMilliseconds,
  );

  // configure event listeners .............................................

  console.log('done assigning handlers ....');
}());
