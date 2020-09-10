export default function flattenArray(array) {
  // This function flattens a nested array into a sequence.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in flatten_array_spec.js.
  // * Please do NOT modify the signature of the function.
  if (array == null) throw new Error('Flatten undefined or null array');
  else if (!Array.isArray(array)) throw new Error();
  else {
    const res = [];
    array.forEach((item) => {
      if (Array.isArray(item)) {
        item.forEach(item2 => res.push(item2));
      } else {
        res.push(item);
      }
    });
    return res;
  }
}
