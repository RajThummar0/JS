function patt(n){
for(let i=1;i<=n;i++){
    
    for(let j=n;j>=i;j--){
        process.stdout.write(String('*'));
        
    }
    console.log();
}
}
patt(5)
/*
*****
****
***
**
*


*/