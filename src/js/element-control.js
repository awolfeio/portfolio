function makeElementFixed() {
  //var makeFixedElement = document.getElementById('fixed-element').value;
  var viewportOffset = document.querySelector("" + makeFixedElement + "").getBoundingClientRect();
  var x = viewportOffset.left;
  var y = viewportOffset.top;

  var element = document.querySelector(makeFixedElement);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  var innerHeight = element.clientHeight;

  var computedStyle = window.getComputedStyle(element);
  var topMargin = parseFloat(computedStyle.marginTop);
  var trueY = y - topMargin;

  //console.log("topmargin = "+topMargin+"");
  //console.log("trueY = "+trueY+"");
  //console.log("X = "+x+"");
  //console.log("Y = "+y+"");

  // Create dummy element and insert before target
  const dummyElement = document.createElement("div");
  dummyElement.className = "dummy-element";
  element.parentNode.insertBefore(dummyElement, element);

  // Style dummy element
  dummyElement.style.width = width + "px";
  dummyElement.style.height = height + "px";

  // Move and style target element
  const panelElement = document.querySelector(".panel");
  panelElement.parentNode.insertBefore(element, panelElement);
  element.style.top = trueY + "px";
  element.style.left = x + "px";
  element.style.position = "fixed";
}

//debug
document.getElementById("make-fixed")?.addEventListener("click", function () {
  makeElementFixed();
});
