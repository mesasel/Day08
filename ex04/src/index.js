// Only change code below this line if
function localScope() {
  var myVariable = "I am here!";
  console.log(myVariable);
}
localScope();
// Only change code above this line if

// myVariable is not defined outside of localScope
if (typeof myVariable != "undefined") {
  console.log("outside localScope", myVariable);
} else {
  console.log("outside localScope UNDEFINED!!!");
}

module.exports = localScope;
