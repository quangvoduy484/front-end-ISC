$(document).ready(function(){

  var result = 0;
  var prevEntry = 0;
  var operation = null;
  var currentEntry = '0';
  updateScreen(result);

  $('.btn').click(function (evt) {
    var buttonPressed = $(this).html().trim();
    console.log('=>' + buttonPressed);

    if (buttonPressed === "C") {
      result = 0;
      currentEntry = '0';
    } else if (buttonPressed === "Del") {
      currentEntry = currentEntry.substring(0, currentEntry.length-1);
    } else if (buttonPressed === "+/-") {
      currentEntry *= -1;
    } else if (buttonPressed === '.') {
      currentEntry += '.';
    } else if (isNumber(buttonPressed)) {
      if (currentEntry === '0') currentEntry = buttonPressed;
      else currentEntry = currentEntry + buttonPressed;
    } else if (isOperator(buttonPressed)) {
      prevEntry = parseFloat(currentEntry);
      operation = buttonPressed;
      currentEntry = '';
    } else if (buttonPressed === '=') {
      currentEntry = operate(prevEntry, currentEntry, operation);
      operation = null;
    }
    console.log('currentEntry => "' + currentEntry + '"');
    updateScreen(currentEntry);

  });
});

updateScreen = function(displayValue) {
  var displayValue = displayValue.toString();
  $('#input').html(displayValue.substring(0, 10));
};

isNumber = function(value) {
  return !isNaN(value);
}

isOperator = function(value) {
  return value === '/' || value === '*' || value === '+' || value === '-';
};

operate = function(a, b, operation) {
  a = parseFloat(a);
  b = parseFloat(b);
  console.log(a, b, operation);
  if (operation === '+') return a + b;
  if (operation === '-') return a - b;
  if (operation === '*') return a * b;
  if (operation === '/') return a / b;
}













$(document).ready(function () {

  $("#clear").click(function () {
    $("#input").val("");
  });

  $("#bang").click(function () {
    $("#input").val(eval($("#input").val()));
  });

  $("#del").click(function () {
    $("#input").val($("#input").val().substring(0, $("#input").val().length - 1));
  });

  $("#cong").click(function () {
    $("#input").val($("#input").val() + "+");
  });
  $("#tru").click(function () {
    $("#input").val($("#input").val() + "-");
  });

  $("#nhan").click(function () {
    $("#input").val($("#input").val() + "*");
  });
  $("#chia").click(function () {
    $("#input").val($("#input").val() + "/");
  });

  $("#cham").click(function () {
    $("#input").val($("#input").val() + ".");
  });
  $("#doidau").click(function () {
    $("#input").val($("#input").val() + "-");
  });
  $("#0").click(function () {
    $("#input").val($("#input").val() + "0");
  });

  $("#1").click(function () {
    $("#input").val($("#input").val() + "1");
  });

  $("#2").click(function () {
    $("#input").val($("#input").val() + "2");
  });

  $("#3").click(function () {
    $("#input").val($("#input").val() + "3");
  });

  $("#4").click(function () {
    $("#input").val($("#input").val() + "4");
  });

  $("#5").click(function () {
    $("#input").val($("#input").val() + "5");
  });

  $("#6").click(function () {
    $("#input").val($("#input").val() + "6");
  });

  $("#7").click(function () {
    $("#input").val($("#input").val() + "7");
  });

  $("#8").click(function () {
    $("#input").val($("#input").val() + "8");
  });

  $("#9").click(function () {
    $("#input").val($("#input").val() + "9");
  });
});