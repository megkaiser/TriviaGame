$(document).ready(function() {

//  Interval Demonstration
//  Set our number counter to 100.
var number = 100;
//  Variable that will hold our interval ID when we execute
//  the "run" function
var intervalId;

function run() {
    intervalId = setInterval(decrement, 1000);
}
//  The decrement function.
function decrement() {
    //  Decrease number by one.
    number--;
    //  Show the number in the #show-number tag.
    $("#show-number").html("<h2> Time Remaining: " + number + "</h2>");
    //  Once number hits zero...
    if (number === 0) {
        //  ...run the stop function.
        stop();
        //  Alert the user that time is up.
        alert("Time Up!");
    }
}
//  The stop function
function stop() {
    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
}
//  Execute the run function.
run();


$(".radio").on("click", function(event) {
  console.log($(this));
});

$("input:radio[name=q1]:nth(0)").on("click", function(event) {
  console.log("q1");
});  

$("input:radio[name=q2]").on("click", function(event) {
  console.log("q2");
}); 

// var correct = 
//   [$("input:radio[name=q1]:nth(2)"),
//   $("input:radio[name=q2]:nth(0)"),
//   $("input:radio[name=q3]:nth(3)"),
//   $("input:radio[name=q4]:nth(2)"),
//   $("input:radio[name=q5]:nth(0)"),
//   $("input:radio[name=q6]:nth(1)"),
//   $("input:radio[name=q7]:nth(3)"),
//   $("input:radio[name=q8]:nth(0)")];


// var incorrect = 
//   [$("input:radio[name=q1]:nth(0)"),
//   $("input:radio[name=q1]:nth(1)"),
//   $("input:radio[name=q1]:nth(3)"),
//   $("input:radio[name=q2]:nth(1)"),
//   $("input:radio[name=q2]:nth(2)"),
//   $("input:radio[name=q2]:nth(3)"),
//   $("input:radio[name=q3]:nth(0)"),
//   $("input:radio[name=q3]:nth(1)"),
//   $("input:radio[name=q3]:nth(2)"),
//   $("input:radio[name=q4]:nth(0)"),
//   $("input:radio[name=q4]:nth(1)"),
//   $("input:radio[name=q4]:nth(3)"),
//   $("input:radio[name=q5]:nth(1)"),
//   $("input:radio[name=q5]:nth(2)"),
//   $("input:radio[name=q5]:nth(3)"),
//   $("input:radio[name=q6]:nth(0)"),
//   $("input:radio[name=q6]:nth(2)"),
//   $("input:radio[name=q6]:nth(3)"),
//   $("input:radio[name=q7]:nth(0)"),
//   $("input:radio[name=q7]:nth(1)"),
//   $("input:radio[name=q7]:nth(2)"),
//   $("input:radio[name=q8]:nth(1)"),
//   $("input:radio[name=q8]:nth(2)"),
//   $("input:radio[name=q8]:nth(3)")];

// var answers = 
//   [$("input:radio[name=q1]:nth(0)"),
//   $("input:radio[name=q1]:nth(1)"),
//   $("input:radio[name=q1]:nth(2)"),
//   $("input:radio[name=q1]:nth(3)"),
//   $("input:radio[name=q2]:nth(0)"),
//   $("input:radio[name=q2]:nth(1)"),
//   $("input:radio[name=q2]:nth(2)"),
//   $("input:radio[name=q2]:nth(3)"),
//   $("input:radio[name=q3]:nth(0)"),
//   $("input:radio[name=q3]:nth(1)"),
//   $("input:radio[name=q3]:nth(2)"),
//   $("input:radio[name=q3]:nth(3)"),
//   $("input:radio[name=q4]:nth(0)"),
//   $("input:radio[name=q4]:nth(1)"),
//   $("input:radio[name=q4]:nth(2)"),
//   $("input:radio[name=q4]:nth(3)"),
//   $("input:radio[name=q5]:nth(0)"),
//   $("input:radio[name=q5]:nth(1)"),
//   $("input:radio[name=q5]:nth(2)"),
//   $("input:radio[name=q5]:nth(3)"),
//   $("input:radio[name=q6]:nth(0)"),
//   $("input:radio[name=q6]:nth(1)"),
//   $("input:radio[name=q6]:nth(2)"),
//   $("input:radio[name=q6]:nth(2)"),
//   $("input:radio[name=q7]:nth(0)"),
//   $("input:radio[name=q7]:nth(1)"),
//   $("input:radio[name=q7]:nth(2)"),
//   $("input:radio[name=q7]:nth(3)"),
//   $("input:radio[name=q8]:nth(0)"),
//   $("input:radio[name=q8]:nth(1)"),
//   $("input:radio[name=q8]:nth(2)"),
//   $("input:radio[name=q8]:nth(3)")];  

var q1 = 
  [$("input:radio[name=q1]:nth(0)"),
  $("input:radio[name=q1]:nth(1)"),
  $("input:radio[name=q1]:nth(2)"),
  $("input:radio[name=q1]:nth(3)")];

// if (correct.on("click")) {
//   console.log("correct");
// }  

// for(var=i; i<q1.length; i++) {

  if $("input:radio[name=q1]:nth(2)").on("click", function(event)) {
  console.log("correct");
} else if $("input:radio[name=q1]:nth(0)").on("click", function(event)){
  console.log("incorrect");
};

// }

// if (correct[0]) {
//   console.log("good");
// }

// $("input:radio[name=q1]:nth(1)").attr();

// $("inputradio[name=q1]").on("click", function(event) {
//   console.log("okay");
// });

});