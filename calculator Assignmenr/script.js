function display(value) {
  const result = document.getElementById("result");
  result.value += value;
}

function clearscreen() {
  const result = document.getElementById("result");
  result.value = "";
}

function calculate() {
  const result = document.getElementById("result");
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = "Error";
  }
}