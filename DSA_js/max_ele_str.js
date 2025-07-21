let str = 'heelelo';
let maxkey = '';
let strobj = {};

for (let i = 0; i < str.length; i++) {
    let key = str[i];
    if (!strobj[key]) {//if donesn't exist key in str then its value is 0
        strobj[key] = 0;
    }
    strobj[key]++;
    if (maxkey === '' || strobj[key] > strobj[maxkey]) {
        maxkey = key;
    }
}
console.log('The maximum alphabet is:', maxkey);
console.log('It appears', strobj[maxkey], 'times.');
