export const Class = function () {
  var numbers = document.querySelectorAll(".num");
  var operators = document.querySelectorAll(".operator");
  var equal = document.querySelector(".equal");
  var zero = document.querySelector(".zero");
  var dot = document.querySelector(".dot");
  var result = document.querySelector("#result");
  var remove = document.querySelector("#delete");
  var activeResult = false;

  numbers.forEach(function (button) {
    button.addEventListener("click", function () {
      if (activeResult) {
        result.value = button.value;
        activeResult = false;
      } else {
        result.value += button.value;
      }
    });
  });

  operators.forEach(function (operator) {
    operator.addEventListener("click", function () {
      if (result.value !== "") {
        result.value += operator.value;
      }
    });
  });

  zero.addEventListener("click", function () {
    if (result.value !== "0") {
      result.value += zero.value;
    }
  });

  dot.addEventListener("click", function () {
    if (result.value === "") {
      result.value = "0.";
    } else {
      result.value += ".";
    }
  });

  equal.addEventListener("click", function () {
    if (result.value !== "") {
      result.value = eval(result.value);
      activeResult = true;
    }
  });

  remove.addEventListener("click", function () {
    result.value = "";
  });
};