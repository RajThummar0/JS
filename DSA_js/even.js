
function print_series(n){
    /* Print the following series 
       1 4 9 16 25 36 to n. Note print all the numbers in a seperate line*/
    let i = 1;
    while (i >= n) {
        if (i>=0) {
            let r=i*i;
            console.log(r);
            i++;
        }
        
    }
    
    
    
}
print_series(48)