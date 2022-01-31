const trees = "Aspen and Pine";

function wildlife() {
  console.log("Elk, Bighorn Sheep, Moose");
}

function elevation() {
  console.log("9583 ft");
}
// With named exports, we can export multiple variables from a file
export { trees, wildlife, elevation };
