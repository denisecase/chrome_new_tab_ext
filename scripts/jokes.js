/**
 * Get a joke from a web API.
 * Uses new import / export - be sure to set type="module" in HTML
 * Can be easily added to any web page.
 * @module jokes/getJoke
 * @author Denise Case
 */

// URLs must be added to manifest.json and tab.html Content Security Policy
const jokeURI = 'https://api.icndb.com/jokes/random?limitTo=[nerdy]';
// const exampleResponseJSON = {
//   type: 'success',
//   value: {
//     id: 456,
//     joke: 'All browsers support the hex definitions #chuck and #norris
//            for the colors black and blue.',
//     categories: ['nerdy'],
//   },
// };

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
