const root = document.querySelector("#root");

function component() {
  console.log("test");
  const element = document.createElement("div");
  element.innerHTML = "Welcome to my portfolio";
  return element;
}
root.appendChild(component());
