function Clear() {
  var inputText = document.getElementById("result");
  inputText.value = "";
}
function Back() {
  var content = document.getElementById("result");
  content.value = content.value.slice(0, -1);
}
function Solve(value) {
  var val = document.getElementById("result");
  val.value += value;
}
function Result() {
  var num1 = document.getElementById("result").value;
  var num2 = eval(num1);
  document.getElementById("result").value = num2;
}