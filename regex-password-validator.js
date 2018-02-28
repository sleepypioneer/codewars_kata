/* 
You need to write regex that will validate a password to make sure it meets the following criteria:

At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a number
Valid passwords will only be alphanumeric characters.
*/

/* My Solution */

function validate(password) {
  return /((?!.*[^a-zA-Z0-9].*$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20})/.test(password);
}
