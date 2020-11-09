/**
 * Get the Bing image of the day for a background.
 * Can be easily added to any web page.
 * Includes HTTP request example.
 * @module dailyImage
 * @author Denise Case
 */

const unsplashURL = 'https://source.unsplash.com/collection/928423/random';

/**
 * Get new image URL
 * @returns Promise
 */
export default async function getDailyImage() {
  try {
    return unsplashURL;
  } catch (error) {
    return 'Error getting background image.';
  }
}
