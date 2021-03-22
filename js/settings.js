var desusify = (
  function() {
    if (!document
        .getElementById("title")
        .innerHTML == "Incremental Adventure") {
      document
        .getElementById("title")
        .innerHTML = "Incremental Adventure";
    } else {
      document
        .getElementById("title")
        .innerHTML = "Art Project";
    }
  }
)
