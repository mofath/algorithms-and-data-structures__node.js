function binarySearch(sortedArr, target) {
  let start = 0;
  let end = sortedArr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (target !== sortedArr[middle] && start <= end) {
    if (target < sortedArr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }

  return sortedArr[middle] === target ? middle : -1;
}

module.exports = binarySearch;
