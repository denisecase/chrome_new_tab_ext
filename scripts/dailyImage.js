/**
 * Get the Bing image of the day for a background.
 * Can be easily added to any web page.
 * Includes HTTP request example.
 * @module dailyImage
 * @author Denise Case
 */

// const unsplashURL = 'https://source.unsplash.com/collection/928423/random';
// const bingImageURL = 'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1';
const imageURLs = [
  'https://img.buzzfeed.com/buzzfeed-static/static/2017-04/19/15/asset/buzzfeed-prod-fastlane-01/sub-buzz-7887-1492630453-6.jpg',
  'https://img.buzzfeed.com/buzzfeed-static/static/2017-04/19/15/asset/buzzfeed-prod-fastlane-03/sub-buzz-6069-1492630255-3.jpg',
  'https://img.buzzfeed.com/buzzfeed-static/static/2017-04/19/15/asset/buzzfeed-prod-fastlane-03/sub-buzz-6150-1492630238-1.jpg',
];

/** Helper function to get random number between min, max */
const randomNumber = (min, max) => {
  console.log(`Calling randomNumber(${min},${max})`);
  const dbl = (Math.random() * (max - min)) + min;
  return Math.floor(dbl);
};

/**
 * Get new image URL
 * @returns Promise
 */
export default async function getDailyImage() {
  try {
    const randomIndex = randomNumber(0, imageURLs.length);
    const imageURL = imageURLs[randomIndex];
    console.log(`imageURL:${imageURL}`);
    return imageURL;
    // return unsplashURL;
  } catch (error) {
    return 'Error getting background image.';
  }
}
