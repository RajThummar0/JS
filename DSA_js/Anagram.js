//anagram : it's a basically 2 string in that both of side same letter but diffrent arrangement like raj and arj m.
// 1. length same
// 2. same alphabets in both strings
//string1='hello' -> string2='elhlo'

function Anagram(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }
  let counter = {};
  for (let letter of str1) {
    counter[letter] = (counter[letter] || 0) + 1;//value ne +1 kari dey 
    console.log(counter[letter]);
  }
  for (let item of str2) {
    if (!counter[item]) {
      console.log("efe");
      return false;
    }
    counter[item] -= 1;
  }
  return true;
}

const result = Anagram("hello", "hlelo");
console.log(result);
