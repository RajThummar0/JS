for(let i=1;i<=5;i++){
    for(j=1;j<=-i+6;j++){
        process.stdout.write('*');
    }
    for(let j=1;j<=-1+2*i;j++){
       process.stdout.write('');

    }
    for(j=1;j<=-i+6;j++){
        process.stdout.write('*');
    }
    console.log();
}

/*

**********
****  ****
***    ***
**      **
*        *
 */