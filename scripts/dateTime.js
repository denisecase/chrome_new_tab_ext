/**
 * Provides functionality for home page based on time and schedule.
 * Can be easily customized and added to any web page.
 * @module dateTime
 * @author Denise Case
 */

/**
 * Add a function to get week number to Date object
 * https://stackoverflow.com/questions/6117814/get-week-of-year-in-javascript-like-in-php/6117889#6117889
 */
// eslint-disable-next-line no-extend-native
Date.prototype.getWeekNumber = function () {
  const onejan = new Date(this.getFullYear(), 0, 1);
  const millisecsInDay = 86400000;
  return Math.ceil(
    ((this - onejan) / millisecsInDay + onejan.getDay() + 1) / 7,
  );
};

// Configure constants...................................................

const tday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const tmonth = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export function convertTo12Hour(nhour) {
  let ap;
  let hr;
  if (nhour === 0) {
    ap = ' AM';
    hr = 12;
  } else if (nhour < 12) {
    ap = ' AM';
    hr = nhour;
  } else if (nhour === 12) {
    ap = ' PM';
    hr = nhour;
  } else if (nhour > 12) {
    ap = ' PM';
    hr = nhour - 12;
  }
  return { ap, hr };
}

/**
 * Get information to be presented in a clock view.
 */
export function getClock() {
  const d = new Date();
  const nday = d.getDay();
  const nmonth = d.getMonth();
  const ndate = d.getDate();
  const nhour = d.getHours();
  let nmin = d.getMinutes();
  const { ap, hr } = convertTo12Hour(nhour);
  if (nmin <= 9) {
    nmin = `0${nmin}`;
  }
  const clock = `${tday[nday]} ${tmonth[nmonth]} ${ndate}  ${hr}:${nmin}${ap}`;
  return { clock, nhour };
}

export function getGreeting(numHour) {
  let t = 'Good evening';
  if (numHour < 12) {
    t = 'Good morning';
  } else if (numHour < 17) {
    t = 'Good afternoon';
  }
  return `${t}, Dr. Case`;
}
