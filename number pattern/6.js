let count=1;
for(let i=1;i<=4;i++){
    for(let j=4;j>=i;j--){
        process.stdout.write(' ');

    }
    for(let k=1;k<=i;k++){
        process.stdout.write(String(count) + ' '); // Print the current count
        count++; // Increment count for the next number

    }
    console.log(); // Move to the next line after each row is printed
}