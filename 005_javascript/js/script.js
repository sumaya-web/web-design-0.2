// if-else conditional statement
var a = 11;
if (a == 10) {
  document.write("Yes");
} else {
  document.write("No");
}

document.write("<br>");
document.write("<br>");

// using of prompt to get user input
var a = prompt(
  "Enter value of a "
);
var b = prompt(
  "Enter value of b "
);

// example of else-if conditional statement using prompt
if (a > b) {
  document.write("A is big");
} else if (a < b) {
  document.write("B is big");
} else if (a == b) {
  document.write(
    "A & B are equal"
  );
} else {
  document.write("Invalid");
}

document.write("<br>");
document.write("<br>");

// a simple program using conditional statement
const age = prompt(
  "Enter your age"
);
const gender = prompt(
  "Enter your gender"
);

if (
  age > 14 &&
  age <= 60 &&
  (gender === "male" ||
    gender === "female")
) {
  document.write(
    "You can enter"
  );
} else if (age <= 14) {
  document.write(
    "You are a kiddo"
  );
} else if (
  age > 60 &&
  age <= 100
) {
  document.write(
    "You are too old"
  );
} else if (age > 100) {
  document.write(
    "You are a alien"
  );
} else {
  document.write(
    "You can't enter"
  );
}