
let $ = function (selector, node = document) {
  return node.querySelector(selector);
}

let createElement = function(tagName, className, text) {
  let element = document.createElement(tagName);
  if (className) {
    element.setAttribute("class", className);
  }
  if (text) {
    element.textContent = text;
  }

  return element;
}