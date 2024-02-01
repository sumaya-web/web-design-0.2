/**
 * Todo => for loop syntax

 * for (start; condition; increment / decrement){
 *     * result
 * }

 */

document.write(
  "<h2>for loop</h2>"
);

// printing multiplication table of 2
for (let i = 2; i <= 2; i++) {
  for (
    let j = 1;
    j <= 10;
    j++
  ) {
    document.write(
      i +
        "*" +
        j +
        "=" +
        i * j
    );

    document.write("<br>");
  }
}

document.write("<br>");

// printing 1-0 using for loop
for (i = 1; i < 10; i++) {
  document.write(i + "<br>");
}

document.write("<br>");

// printing 10-100 and increment gap 10
for (
  i = 10;
  i <= 100;
  i += 10
) {
  document.write(i + "<br>");
}

document.write("<br>");

// printing 10-1 decremented
for (i = 10; i >= 1; i--) {
  document.write(i + "<br>");
}

/**
 * Todo =>  while loop syntax

 * start i;
 * while(condition){
 *      *result;
 * increment/decrement;
}
*/

document.write(
  "<h2>while loop</h2>"
);

// printing 0-100 using while loop and increment gap 20
var i = 0;
while (i <= 100) {
  document.write(i + "<br>");
  i += 20;
}

/**
 * Todo => do while loop

 * initialize var;
 * do{
 *      *result;
 * increment/decrement;
 * }

 * while(condition)
 */

document.write(
  "<h2>do while loop</h2>"
);

var i = 1;
do {
  document.write(
    i +
      ") " +
      "Hello World!" +
      "<br>"
  );
  i++;
} while (i < 10);

// todo => JavaScript Functions
document.write(
  "<h2>JavaScript Function</h2>"
);

function add() {
  const a = 10;
  const b = 20;
  const c = a + b;

  document.write(c + "<br>");
}

add();
