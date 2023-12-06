function factorial() {
  var i;
  f = 1;
  var n = Number(document.getElementById("s").value);
  {
    var f = 1;
    for (i = 1; i <= n; i++) {
      f = f * i;
    }

    window.alert("factorial=" + f);
  }
}
