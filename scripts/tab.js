/**
 * Chrome Home Tab module.
 * Illustrates basic HTML, CSS, JavaScript, JSON.
 * @module tab
 */
import addBall from './canvas.js';
import getDailyImage from './dailyImage.js';
import * as dateTime from './dateTime.js';
import getJoke from './jokes.js';
import getLocation from './location.js';

/**
 * Logic to execute each time the new tab loads.
 * Includes a recurring update every n milliseconds.
 */

(function () {
  // assign display elements .............................................

  const backgroundElement = document.getElementById('background');
  const weekElement = document.getElementById('week');
  const greetingElement = document.getElementById('greeting');
  const clockElement = document.getElementById('clockbox');
  const focusElement = document.getElementById('focus');
  const jokeElement = document.getElementById('smile');
  const locationElement = document.getElementById('location');
  const locationAnswerElement = document.getElementById('locationAnswer');
  const canvasElement = document.getElementById('art');

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

  function updateWeekText(i, el, num) {
    el.innerHTML = `Week ${i} of ${num}`;
  }

  // define event handlers .........................................................

  /**
   * Wait to get a joke back and then display it.
   */
  async function smileHandler() {
    const joke = await getJoke();
    jokeElement.innerHTML = joke;
  }

  /**
   * Wait to get location and then display it.
   */
  async function locationHandler() {
    const locText = await getLocation();
    locationAnswerElement.innerHTML = locText;
  }

  let emptyCanvas = true;
  /**
   * Add a moving ball to the canvas.
   */
  function canvasHandler(arg) {
    const e = arg || window.event;
    if (emptyCanvas) {
      addBall(canvasElement, e);
      emptyCanvas = false;
    }
  }

  // more startup logic  ...........................................

  const updateDisplay = (elClock, elGreet, elFocus) => {
    const { clock, nhour, nday } = dateTime.getClock();
    const greeting = dateTime.getGreeting(nhour);
    const focus = dateTime.getFocus(nday, nhour);
    elClock.innerHTML = clock;
    elGreet.innerHTML = greeting;
    elFocus.innerHTML = focus;
  };

  const refreshMilliseconds = 10000;
  updateDisplayImage(backgroundElement);
  const schoolWeek = dateTime.getSchoolWeek();
  const numWeeks = dateTime.getWeeksPerTerm();
  updateWeekText(schoolWeek, weekElement, numWeeks);
  updateDisplay(clockElement, greetingElement, focusElement);
  setInterval(
    updateDisplay.bind(null, clockElement, greetingElement, focusElement),
    refreshMilliseconds,
  );

  // configure event listeners .............................................

  jokeElement.addEventListener('dblclick', smileHandler);
  locationElement.addEventListener('click', locationHandler);
  locationElement.addEventListener('mouseenter', locationHandler);
  canvasElement.addEventListener('dblclick', canvasHandler);
  console.log('done assigning handlers ....');
}());
