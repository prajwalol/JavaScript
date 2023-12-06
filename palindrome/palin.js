function palin() {
  var rem,
    temp,
    pal = 0;
  var num = Number(document.getElementById("n").value);
  temp = num;
  while (num > 0) {
    rem = num % 10;
    pal = pal * 10 + rem;
    num = parseInt(num / 10);
  }
  if (pal == temp) {
    window.alert("the number is palindrome");
  } else {
    window.alert("the number is not palindrome");
  }
}
