// function declaration expression and arrow functions default parameters
/**
 * Function to calculate the factorial of a number
 * @param {number} [n=1] the number to calculate the factorial of
 * @returns {number} the factorial of n
 */
const factorial = (n = 1) => {
    if (n === 0) return 1;
    return n * factorial(n - 1);
};

/**
 * Function to reverse a string
 * @param {string} str the string to reverse
 * @returns {string} the reversed string
 */
const reverseString = str => str.split('').reverse().join('');

/**
 * Types of functions
 * 1. Function Declaration
 *      function foo() {
 *          // code
 *      }
 *
 * 2. Function Expression
 *      const foo = function() {
 *          // code
 *      };
 *
 * 3. Arrow Function
 *      const foo = () => {
 *          // code
 *      };
 *
 * 4. Immediately Invoked Function Expression (IIFE)
 *      (function() {
 *          // code
 *      })();
 *
 * 5. Default Parameters
 *      const foo = function(a, b = 1) {
 *          // code
 *      };
 *
 * 6. Rest Parameters
 *      const foo = function(...args) {
 *          // code
 *      };
 *
 * 7. Spread
 *      const foo = function(a, ...args) {
 *          // code
 *      };
 */

alert(factorial(5));
alert(reverseString('Hello World!'));
