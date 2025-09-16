/* There is an error in the code below. Find and fix the error. Explain your solution.

interface Rectangle {
  width: number;
  height: string; // Error is here
}

*/

interface Rectangle {
  width: number;
  height: number; // Fixed: height property should be number, not string
}

const myRectangle: Rectangle = {
  width: 10,
  height: 20,
};

// Fix Explanation:
// In the interface definition above, the 'height' property was incorrectly specified as 'string'.
// However, a rectangle's height should be a numerical value. Therefore, the type of the 'height' property was changed to 'number'.