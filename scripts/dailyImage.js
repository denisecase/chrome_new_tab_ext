/**
 * Get the Bing image of the day for a background.
 * Can be easily added to any web page.
 * Includes HTTP request example.
 * @module dailyImage
 * @author Denise Case
 */

// URLs must be added to manifest.json and tab.html Content Security Policy
const bingImageURL = 'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-US';
const bingBaseURL = 'http://bing.com/';

const exampleResponseJSON = {
  images: [{
    startdate: '20211009',
    fullstartdate: '202110090700',
    enddate: '20211010',
    url: '/th?id=OHR.SandhillApache_EN-US7367797025_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
    urlbase: '/th?id=OHR.SandhillApache_EN-US7367797025',
    copyright: 'Sandhill cranes and mallard ducks, Bosque del Apache National Wildlife Refuge, New Mexico (© Cathy & Gordon Illg/Jaynes Gallery/DanitaDelimont.com)',
    copyrightlink: 'https://www.bing.com/search?q=sandhill+cranes&form=hpcapt&filters=HpDate%3a%2220211009_0700%22',
    title: 'Birds of a feather',
    quiz: '/search?q=Bing+homepage+quiz&filters=WQOskey:%22HPQuiz_20211009_SandhillApache%22&FORM=HPQUIZ',
    wp: true,
    hsh: '09b58fb8a08044feba219f528e3b3ebd',
    drk: 1,
    top: 1,
    bot: 1,
    hs: [],
  }],
  tooltips: {
    loading: 'Loading...',
    previous: 'Previous image',
    next: 'Next image',
    walle: 'This image is not available to download as wallpaper.',
    walls: 'Download this image. Use of this image is restricted to wallpaper only.',
  },
};

/**
 * Get new image URL
 * @returns imageURL
 */
export default async function getDailyImage() {
  try {
    console.log(`Fetching image from ${bingImageURL}`);
    console.log(`Example result: ${bingBaseURL}${exampleResponseJSON.images[0].url}`);
    const response = await fetch(bingImageURL);
    const obj = await response.json();
    console.log(`FETCHED. Response JSON ${obj}`);
    console.dir(obj);
    const imageURL = `${bingBaseURL}${obj.images[0].url}` || 'not found';
    console.log(`Actual result: ${imageURL}`);
    return imageURL;
  } catch (error) {
    return 'Error getting background image.';
  }
}
