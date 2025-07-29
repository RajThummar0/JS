/*                      link: https://www.youtube.com/watch?v=aXHanyXQqI0
        Y = MX+C    or j len = gap * i +    c 
        Y = here like starting from where actuall there its 25
        M = what is gap
        X = from where outer loop will be start like here 10
        you will find C
        affter that jlen=gap*i+c
        c we will know + gap +C

*/
/*






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

for(let i=10;i<=13;i++){//
    for(let j=25;j<=i+15;j++){
         process.stdout.write(String('*'));
    }
    console.log();
}


    