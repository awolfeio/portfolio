let viewportWidth = window.innerWidth;
let viewportHeight = window.innerHeight;
let screenType = "error: undetected";

export function viewportType() {
  if (viewportHeight > viewportWidth) {
    document.body.classList.add("portrait");
  }

  // Get Screen Type (Default, Touch, or Cursor & Touch)
  if ("ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) {
    //console.log('Screentype is touch!');
    document.documentElement.classList.add("touch-device");
  }

  if (window.matchMedia("(pointer: coarse)").matches && window.matchMedia("(hover: none)").matches) {
    screenType = "touch";
    //console.log('Screentype is: '+screenType);
    document.documentElement.classList.add("touch-device");
    //document.documentElement.style.height = window.innerHeight + 'px';
    return screenType;
  } else if (window.matchMedia("(any-pointer: fine)").matches && window.matchMedia("(pointer: coarse)").matches) {
    screenType = "cursorTouch";
    //console.log('Screentype is: '+screenType);
    return screenType;
  } else {
    screenType = "default";
    //console.log('Screentype is: '+screenType);
    return screenType;
  }
}

export function viewportSize() {
  // Get Screen Dimensions
  viewportWidth = window.innerWidth;
  viewportHeight = window.innerHeight;
  //console.log('Viewport width is: '+viewportWidth);
  //console.log('Viewport height is: '+viewportHeight);

  //var oldviewportWidth = viewportWidth;
  //var oldviewportHeight = viewportHeight;

  if (viewportWidth < 768) {
    const stage = document.getElementById("stage");
    const nav = document.querySelector("nav");
    const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");

    if (stage && nav) stage.insertBefore(nav, stage.firstChild);
    if (stage && mobileMenuToggle) stage.insertBefore(mobileMenuToggle, stage.firstChild);
  } else {
    const header = document.querySelector("header");
    const nav = document.querySelector("nav");
    const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");

    if (header && nav) header.appendChild(nav);
    if (header && mobileMenuToggle) header.appendChild(mobileMenuToggle);
  }

  //const appHeight = () => document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`)
  //window.addEventListener('resize', appHeight)
  //appHeight()

  //const windowHeight = window.innerHeight;
  //const vhHeight = document.getElementById('height-detect').offsetHeight;
  //const addressBarHeight = vhHeight - windowHeight;
  //var trueHeight = windowHeight - addressBarHeight;
  //document.documentElement.style.height = trueHeight + 'px';

  return [viewportWidth, viewportHeight];
}
