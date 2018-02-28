/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
solution('camelCasing') // => should return 'camel Casing' */

/* My Solution */

function solution(string) {
  i = 0;
  result = "";
     while (i < string.length){
    if(string.charAt(i) == string.charAt(i).toUpperCase()){
      result += " " + string.charAt(i);
        } else {
      result += string.charAt(i);
        }
    i++
    }
  return result;
}
