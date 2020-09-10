export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.
  if (array == null) throw new Error('Creating list from undefined array');
  else if (array.length === 0) throw new Error('Creating list from empty array');
  else if (!Array.isArray(array)) throw new Error();
  else {
    const header = { value: array[0], next: null };
    let cur = header;
    array.forEach((element) => {
      const newNode = { value: element, next: null };
      cur.next = newNode;
      cur = cur.next;
    });
    return header.next;
  }
}
