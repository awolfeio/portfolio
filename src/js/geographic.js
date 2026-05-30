// Immediately inject a stylesheet to hide the restricted elements by default.
// This completely prevents them from being visible before the API call resolves.
const geoStyle = document.createElement('style');
geoStyle.id = 'geo-restriction-style';
geoStyle.innerHTML = `
  #resume-nav-link,
  [data-project="scholastic"],
  [data-project="wabash"] {
    display: none !important;
  }
`;
if (document.head) {
  document.head.appendChild(geoStyle);
} else {
  document.addEventListener('DOMContentLoaded', () => {
    document.head.appendChild(geoStyle);
  });
}

export function removeSpecificElements() {
  const resumeNavLink = document.getElementById("resume-nav-link");
  if (resumeNavLink) {
    resumeNavLink.style.display = "none";
  }

  const scholasticElements = document.querySelectorAll('[data-project="scholastic"]');
  scholasticElements.forEach(el => el.style.display = "none");

  const wabashElements = document.querySelectorAll('[data-project="wabash"]');
  wabashElements.forEach(el => el.style.display = "none");
}

export function checkLocationAndRemoveElements() {
  fetch("https://ipapi.co/json/")
    .then((response) => response.json())
    .then((data) => {
      const city = String(data.city || "").trim().toLowerCase();
      const regionCode = String(data.region_code || "").trim().toUpperCase();
      const region = String(data.region || "").trim().toLowerCase();
      const countryCode = String(data.country_code || data.country || "").trim().toUpperCase();
      const countryName = String(data.country_name || "").trim().toLowerCase();

      const lat = Number(data.latitude);
      const lon = Number(data.longitude);

      const dcAreaCities = new Set([
        // DC
        "washington",

        // Northern Virginia
        "arlington",
        "alexandria",
        "falls church",
        "fairfax",
        "annandale",
        "springfield",
        "mclean",
        "tysons",
        "tysons corner",
        "vienna",
        "reston",
        "herndon",
        "sterling",
        "dulles",
        "ashburn",
        "leesburg",
        "chantilly",
        "centreville",
        "manassas",
        "woodbridge",
        "stafford",
        "fredericksburg",
        "quantico",

        // Maryland near DC
        "bethesda",
        "chevy chase",
        "silver spring",
        "takoma park",
        "kensington",
        "wheaton",
        "rockville",
        "gaithersburg",
        "germantown",
        "potomac",
        "college park",
        "hyattsville",
        "greenbelt",
        "laurel",
        "bowie",
        "largo",
        "capitol heights",
        "oxon hill",
        "fort washington",
        "waldorf",
        "upper marlboro",

        // Broader commuter / routing areas
        "baltimore",
        "columbia",
        "ellicott city",
        "towson",
        "catonsville",
        "glen burnie",
        "hanover",
        "linthicum",
        "annapolis",
        "frederick",
        "hagerstown",

        // WV commuter edge cases
        "martinsburg",
        "charles town",
      ]);

      const isDC = regionCode === "DC" || city === "washington";

      const isKnownDCAreaCity =
        ["DC", "MD", "VA", "WV"].includes(regionCode) && dcAreaCities.has(city);

      const isLagos =
        (countryCode === "NG" || countryName === "nigeria") &&
        (city === "lagos" || region === "lagos");

      // Haversine distance helper
      function distanceInMiles(lat1, lon1, lat2, lon2) {
        const earthRadiusMiles = 3958.8;
        const toRad = (degrees) => degrees * (Math.PI / 180);

        const dLat = toRad(lat2 - lat1);
        const dLon = toRad(lon2 - lon1);

        const a =
          Math.sin(dLat / 2) ** 2 +
          Math.cos(toRad(lat1)) *
          Math.cos(toRad(lat2)) *
          Math.sin(dLon / 2) ** 2;

        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return earthRadiusMiles * c;
      }

      // DC coordinates
      const dcLat = 38.9072;
      const dcLon = -77.0369;

      const isWithinDCRadius =
        Number.isFinite(lat) &&
        Number.isFinite(lon) &&
        distanceInMiles(dcLat, dcLon, lat, lon) <= 75;

      const shouldRemove =
        isDC ||
        isKnownDCAreaCity ||
        isWithinDCRadius ||
        isLagos;

      if (shouldRemove) {
        removeSpecificElements();
      } else {
        const styleTag = document.getElementById("geo-restriction-style");
        if (styleTag) {
          styleTag.remove();
        }
      }
    })
    .catch((error) => console.error("Error:", error));
}