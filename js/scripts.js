$(document).ready(function(){
// initialize vars
var operation; // defines the mathematical operation we are about to perform
var storedNumber; // stores the number on mathematical opeation set
var change; // defines when we are changing for the second parcel
// startup
showOperations(true, null);
  // number button listeners 0 to 9
  $("#btn_0").on('click', function(){
    var result = $("#result").text();
    var resultINT = Number(result);
    insertNumber(0,resultINT);
  });
  $("#btn_1").on('click', function(){
    var result = $("#result").text();
    var resultINT = Number(result);
    insertNumber(1,resultINT);
  });
  $("#btn_2").on('click', function(){
    var result = $("#result").text();
    var resultINT = Number(result);
    insertNumber(2,resultINT);
  });
  $("#btn_3").on('click', function(){
    var result = $("#result").text();
    var resultINT = Number(result);
    insertNumber(3,resultINT);
  });
  $("#btn_4").on('click', function(){
    var result = $("#result").text();
    var resultINT = Number(result);
    insertNumber(4,resultINT);
  });
  $("#btn_5").on('click', function(){
    var result = $("#result").text();
    var resultINT = Number(result);
    insertNumber(5,resultINT);
  });
  $("#btn_6").on('click', function(){
    var result = $("#result").text();
    var resultINT = Number(result);
    insertNumber(6,resultINT);
  });
  $("#btn_7").on('click', function(){
    var result = $("#result").text();
    var resultINT = Number(result);
    insertNumber(7,resultINT);
  });
  $("#btn_8").on('click', function(){
    var result = $("#result").text();
    var resultINT = Number(result);
    insertNumber(8,resultINT);
  });
  $("#btn_9").on('click', function(){
    var result = $("#result").text();
    var resultINT = Number(result);
    insertNumber(9,resultINT);
  });
  // airthmetic operations buttons
  // plus button
  $("#btn_plus").on('click', function(){
    showOperations(false, "sum");
    storedNumber = Number($("#result").text());
    operation = "sum";
    change = 1;
  });
  // minus button
  $("#btn_minus").on('click', function(){
    showOperations(false, "subtract");
    storedNumber = Number($("#result").text());
    operation = "subtract";
    change = 1;
  });
  // multiply button
  $("#btn_multiply").on('click', function(){
    showOperations(false, "multiply");
    storedNumber = Number($("#result").text());
    operation = "multiply";
    change = 1;
  });
  // divide button
  $("#btn_divide").on('click', function(){
    showOperations(false, "divide");
    storedNumber = Number($("#result").text());
    operation = "divide";
    change = 1;
  });
  // equal button
  $("#btn_equal").on('click', function(){
    var out = calculateTotal(Number($("#result").text()), operation);
    $("#result").text(out);
  });
  // reset button
  $("#btn_reset").on('click', function(){
    operation = null;
    change = null;
    storedNumber = null;
    $("#result").text(0);
    showOperations(true, null);
  });

// FUNCTIONS
// handle display of operating buttons to avoid errors
function showOperations(bool, op){
  if (bool){
    $("#output_display").text();
    $("#output").hide();
    $(".btn_operation_class").show();
  }
  else{
    $(".btn_operation_class").hide();
    $("#output_display").text("calculator defined to " + op);
    $("#output").show();
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
  return total;
};
// insert button on click
function insertNumber(number, resultCurrent){
  // validate if we need to change for the second parcel
  if (change != null){
    $("#result").html(0);
    resultCurrent = 0;
    change = null;
  }
  // validate if 0
  if (resultCurrent == 0){
    // there is no number on the calc
    $("#result").html(number);
    // console.log("zero");
  }
  else{
    // there is already a number on the calc. add new digit and send it back.
    var out = resultCurrent.toString() + number.toString();
    $("#result").html(out);
    // console.log("zero nao");
  }
};
// no return
return false;
});
