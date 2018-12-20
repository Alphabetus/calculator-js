$(document).ready(function(){
// initialize vars
var operation; // defines the mathematical operation we are about to perform
var storedNumber; // stores the number on mathematical opeation set
var change; // defines when we are changing for the second parcel

// startup
showOperations(true, null);
  // number listeners
  $(".btn_number").on('click', function (){
    var btnNumber = Number($(this).data("number"));
    var result = $("#result").text();
    var resultINT = Number(result);
    insertNumber(btnNumber, resultINT);
    // log
    console.log("button #" + btnNumber + " " + resultINT);
  });
  // airthmetic operations buttons
  $(".btn_operation_class").on('click', function (){
    operation = $(this).data("op");
    showOperations(false, operation);
    storedNumber = Number($("#result").text());
    change = 1;
    // log
    console.log("operation set is " + operation);
  });
  // equal button
  $("#btn_equal").on('click', function(){
    var out = calculateTotal(Number($("#result").text()), operation);
    $("#result").text(out);
    // log
    console.log("result is " + out);
  });
  // reset button
  $("#btn_reset").on('click', function(){
    operation = null;
    change = null;
    storedNumber = null;
    $("#result").text(0);
    showOperations(true, null);
    // log
    console.log("reset calculator");
  });

// FUNCTIONS
// handle display of operating buttons to avoid errors
function showOperations(bool, op){
  if (bool){
    $("#output_display").text();
    $("#output").hide();
    $(".btn_operation_class").show();
    // log
    console.log("display operators & hide operation display");
  }
  else{
    $(".btn_operation_class").hide();
    $("#output_display").text("calculator defined to " + op);
    $("#output").show();
    // log
    console.log("hide operators & set operation display");
  }
};
// calculate general
function calculateTotal(resultCurrent, operation){
  var total = null;
  switch (operation){
    case "sum":
      total = storedNumber + resultCurrent;
      break;
    case "subtract":
      total = storedNumber - resultCurrent;
      break;
    case "divide":
      total = storedNumber / resultCurrent;
      break;
    case "multiply":
      total = storedNumber * resultCurrent;
      break;
    default:
      console.log("error on switch");
  }
  operation = null;
  change = 1;
  storedNumber = null;
  showOperations(true);
  // log
  console.log("calculation is done");
  return total;
};
// insert button on click
function insertNumber(number, resultCurrent){
var newParcel = null;
  // validate if we need to change for the second parcel
  if (change != null){
    newParcel = true;
    $("#result").html(0);
    // resultCurrent = 0;
    change = null;
    // log
    console.log("change parcel detected");
  }
  // validate if new parcel
  if (resultCurrent === 0 || newParcel === true){
    // validate if zero just for log
    if (resultCurrent === 0){
      console.log("calculator was zero");
    }
    // there is no number on the calc
    $("#result").html(number);
    // log
    console.log("start new parcel");
  }
  else{
    // there is already a number on the calc. add new digit and send it back.
    var out = resultCurrent.toString() + number.toString();
    $("#result").html(out);
    // log
    console.log("same number parcel");
  }
};
// no return
return false;
});
