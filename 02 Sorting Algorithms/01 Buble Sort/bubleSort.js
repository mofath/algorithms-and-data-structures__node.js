const swap = (arr, idx1, idx2) =>
  ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

function bubleSort(arr) {
  let isSwapped = true;
  while (isSwapped) {
    isSwapped = false;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        isSwapped = true;
      }
    }
  }
  return arr;
}

module.exports = bubleSort;
