function prod() {
  var temp,
    num,
    rem,
    add = 1;

  var num = Number(document.getElementById("N").value);
  temp = num;
  while (num > 0) {
    rem = num % 10;
    add = add * rem;
    num = parseInt(num / 10);
  }
  window.alert(temp + "=" + add);
}
