export function removeSpecificElements() {
  const resumeNavLink = document.getElementById("resume-nav-link");
  if (resumeNavLink) {
    resumeNavLink.style.display = "none";
  }
  const dataProjectElement = document.querySelector('[data-project="scholastic"]');
  if (dataProjectElement) {
    dataProjectElement.style.display = "none";
  }
}

export function checkLocationAndRemoveElements() {
  fetch("https://ipapi.co/json/")
    .then((response) => response.json())
    .then((data) => {
      // Define DC and nearby commutable areas
      const isDC = data.region_code === "DC";
      const isNearbyCommutable =
        (data.region_code === "MD" && ["Montgomery", "Prince George's"].includes(data.city)) ||
        (data.region_code === "VA" && ["Arlington", "Alexandria", "Fairfax", "Falls Church"].includes(data.city));

      if (isDC || isNearbyCommutable) {
        removeSpecificElements();
      } else {
        // Elements will remain visible for other locations
      }
    })
    .catch((error) => console.error("Error:", error));
}
