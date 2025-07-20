/*   1 
    2 2
   3 3 3
  4 4 4 4
 5 5 5 5 5
 */

for (let i = 1; i <= 10; i++) {
    for (let j = 10; j >= i; j--) {
        process.stdout.write(' '); // Print leading spaces for alignment
    }
    for (let k = 1; k <= i; k++) {

        process.stdout.write(String(i) + '  '); // Print the number i
    }

    console.log(); // Move to the next line after each row
}