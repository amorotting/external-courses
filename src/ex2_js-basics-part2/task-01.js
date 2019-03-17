var a = function typeOf (b) {
  if (typeof b === "string") {
    console.log("String");
  } else if (isNaN(b)) {
    console.log("Undefined");
  } else if (typeof b === "number") {
    console.log("Number");
  } else {
    console.log("Undefined");
  }
};

module.exports = typeOf;
