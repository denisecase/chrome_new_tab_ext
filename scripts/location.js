/**
 * Get the location to append to a "welcome to ..."
 * Returns 'home' or 'to school' depending on location.
 * Uses new import / export - be sure to set type="module" in HTML
 * Can be easily added to any web page.
 * Includes GeoLocation API example.
 * @module location/getLocation
 * @author Denise Case
 */

let locationText = '?';

const schoolLocation = {
  name: 'to school',
  north: 40.359,
  south: 40.3507181,
  east: -94.8820898,
  west: -94.8862633,
};

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function inside(crd, bounds) {
  console.log(`CHECKING inside ${bounds.name}`);
  console.log(crd);
  console.log(bounds);
  console.log(crd.latitude > bounds.south);
  console.log(crd.latitude < bounds.north);
  console.log(crd.longitude > bounds.west);
  console.log(crd.longitude < bounds.east);
  const ans = crd.latitude > bounds.south
    && crd.latitude < bounds.north
    && crd.longitude > bounds.west
    && crd.longitude < bounds.east;

  console.log(`CHECKING ${bounds.name} ANS: ${ans}`);
  return ans;
}

const success = (pos) => {
  console.log(`success pos ${pos}`);
  if (pos === undefined) {
    return;
  }
  const crd = pos.coords;
  if (inside(crd, schoolLocation)) {
    locationText = schoolLocation.name;
  } else {
    locationText = 'whereever you are';
  }
};

const error = (err) => {
  console.warn(`ERROR(${err.code}): ${err.message}`);
  error.location = '? (error getting geolocation)';
  return error.location;
};

export default function getLocation() {
  if (!navigator.geolocation) {
    console.log("Browser doesn't support geolocation.");
    locationText = "? (browser doesn't support geolocation)";
  } else {
    console.log('Browser does support geolocation.');
    navigator.geolocation.getCurrentPosition(success, error, options);
    console.log(`locationText=${locationText}`);
  }
  return locationText;
}
