function creatingElement(element, container) {
  const domElement = document.createElement(element.type);
  domElement.innerText = element.children;
  domElement.setAttribute("href", element.props.href);
  domElement.setAttribute("target", element.props.target);
  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

const mainContainer = document.getElementById("root");

creatingElement(reactElement, mainContainer);
