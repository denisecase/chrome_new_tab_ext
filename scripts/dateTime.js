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
const springStartWeekNumber = 2;
const fallStartWeekNumber = 33;
const weeksPerTerm = 17;

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
  // const nyear = d.getFullYear()
  const nhour = d.getHours();
  let nmin = d.getMinutes();
  const { ap, hr } = convertTo12Hour(nhour);
  if (nmin <= 9) {
    nmin = `0${nmin}`;
  }
  const clock = `${tday[nday]} ${tmonth[nmonth]} ${ndate}  ${hr}:${nmin}${ap}`;
  return { clock, nhour, nday };
}

export function getFocus(nday, nhour) {
  const web = '44-563 Web Apps';
  const forensics = '44-386 Digital Forensics';
  const bigData = '44-517 Big Data';
  const gdp = '44-691 GDP';
  const def = 'Research/Grants';
  const weekend = 'Weekend';

  let t = '';
  if ((nday === 1 || nday === 3 || nday === 5) && nhour === 8) {
    t = gdp;
  } else if ((nday === 1 || nday === 3 || nday === 5) && nhour === 9) {
    t = forensics;
  } else if ((nday === 1 || nday === 3 || nday === 5) && nhour === 11) {
    t = web;
  } else if ((nday === 1 || nday === 3 || nday === 5) && nhour === 14) {
    t = bigData;
  } else if (nday === 2 || nday === 4) {
    t = def;
  } else if (nday === 6 || nday === 7) {
    t = weekend;
  } else {
    t = def;
  }
  return t;
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

export function getWeeksPerTerm() {
  return weeksPerTerm;
}

export function getSchoolWeek() {
  const d = new Date();
  const nweek = d.getWeekNumber();
  const nmonth = d.getMonth();
  const startweek = nmonth < 5 ? springStartWeekNumber : fallStartWeekNumber;
  const schoolWeek = nweek - startweek;
  return schoolWeek;
}
