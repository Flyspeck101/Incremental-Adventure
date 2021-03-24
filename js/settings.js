var desusifyValue = 0;
function desusify() {
  if (desusifyValue == 1) {
    document
      .getElementById("title")
      .innerHTML = "Incremental Adventure";
    desusifyValue = 0;
  } else {
    document
      .getElementById("title")
      .innerHTML = "Art Project";
    desusifyValue = 1;
  }
}
