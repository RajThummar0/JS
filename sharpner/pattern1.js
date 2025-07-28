
function pattern(n){
for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
        process.stdout.write(String('*'));
    }
    console.log();
}
}
pattern(8)
/*
*
**
***
****
*****
*/