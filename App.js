/*
* <div id="parent">
<div id="children">
<h1></h1>
</div>
<div id="children2">
<h1></h1>
</div>
</div>
*
*
*/
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hey simple From React"
);
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "children" },
    heading,
    React.createElement("h2", {}, "HEY SWEETHEART")
  ),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
