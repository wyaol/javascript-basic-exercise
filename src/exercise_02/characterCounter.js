export default function countCharacter(string, prediction) {
  // This function will count the character number in a string which satisfies specific prediction.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in character_counter_spec.js.
  // * Please do NOT modify the signature of the function.

  let res;
  if (prediction instanceof Function) {
    res = 0;
    for (let i = 0; i < string.length; i += 1) {
      res += prediction(string[i]) ? 1 : 0;
    }
  } else {
    res = (typeof string === 'string') ? string.length : 0;
  }

  return res;
}
