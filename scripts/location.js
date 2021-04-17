/**
 * Get the location to append to a "welcome to ..."
 * Returns 'home' or 'to school' depending on location.
 * Uses new import / export - be sure to set type="module" in HTML
 * Can be easily added to any web page.
 * Includes GeoLocation API example.
 * @module location/getLocation
 * @author Denise Case
 */

export default function getLocation() {
  let locationText = '?';

  if (!navigator.geolocation) {
    locationText = "? (browser doesn't support geolocation)";
    return locationText;
  }

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
    const ans = crd.latitude > bounds.south
      && crd.latitude < bounds.north
      && crd.longitude > bounds.west
      && crd.longitude < bounds.east;
    return ans;
  }

  const success = (pos) => {
    if (pos === undefined) {
      return;
    }
    const crd = pos.coords;
    if (inside(crd, schoolLocation)) {
      locationText = schoolLocation.name;
    }
  };

  const error = () => {
    error.location = '? (error getting geolocation)';
    return error.location;
  };

  navigator.geolocation.getCurrentPosition(success, error, options);
  return locationText;
}
