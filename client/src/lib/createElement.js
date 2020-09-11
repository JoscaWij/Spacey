export default function createElement(tagName, props) {
  const element = document.createElement(tagName);
  Object.assign(element, props);
  return element;
}
