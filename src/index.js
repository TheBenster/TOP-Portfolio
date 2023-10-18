import "./index.css";
const root = document.querySelector("#root");

function component() {
  console.log("test");
  const element = document.createElement("div");
  return element;
}
root.appendChild(component());
