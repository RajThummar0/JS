//pelindrom  =>   level = level undhu vacho k sidhu sarkhu j vachay
//1 length same
//2 start and end same
//3 start+1 and end-1 same
//(123454321)

let str="level";//case sensitive
let start=0;
let end=str.length-1;
function palindrom(str){
    while(start<end){
        if(str[start]!==str[end]){
            return false;
        }
        start++;
        end--;
    }
    return true;
}

console.log(palindrom(str));