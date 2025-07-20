/*
    1
   1 2
  1 2 3
 1 2 3 4
1 2 3 4 5

*/

for(let i=1;i<=5;i++){
    for(let j=5;j>=i;j--){
        process.stdout.write(' ');
    }
    for(let k=1;k<=i;k++){
        process.stdout.write(String(k) + ' ');
    }
    console.log();
}