/**
 * Get the Bing image of the day for a background.
 * Can be easily added to any web page.
 * Includes HTTP request example.
 * @module dailyImage
 * @author Denise Case
 */

const bingURL = 'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1';

/**
 * Update background image with Bing Image of the Day
 * @returns Promise
 */
export default async function getDailyImage() {
  try {
    const response = await fetch(bingURL);
    const obj = await response.json();
    const imageURL = `http://bing.com/${obj.images[0].url}` || 'not found';
    return imageURL;
  } catch (error) {
    return 'Error getting background image.';
  }
}
