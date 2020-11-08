/**
 * Get a joke from a web API.
 * Uses new import / export - be sure to set type="module" in HTML
 * Can be easily added to any web page.
 * @module jokes/getJoke
 * @author Denise Case
 */

const jokeURI = 'https://api.icndb.com/jokes/random?limitTo=[nerdy]';

export default async function getJoke() {
  try {
    const response = await fetch(jokeURI);
    const obj = await response.json();
    console.log(`FETCHED. Response JSON ${obj}`);
    const joke = obj.value.joke || 'No joke for you.';
    return joke;
  } catch (error) {
    return error;
  }
}
