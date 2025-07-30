let n=5;
for(let i=1;i<=n;i++){
    let line='';

    for(let j=1;j<=i;j++){
        //process.stdout.write(String('*'));
        line+='*';
    }
    for(let k=1;k=n-i;k++){

        
        //process.stdout.write('1');
        line+='1';
    }
    for(let j=1;j<=i;j++){
        //process.stdout.write(String('*'));
        line+='*';
    }
    console.log(line);
}
    






/*
*    *
**   **
***  ***
**** ****
**********
*/