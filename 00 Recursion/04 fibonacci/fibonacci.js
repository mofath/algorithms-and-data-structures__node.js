function fibonacci(num) {
  if (num <= 2) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

// iterative fibonacci
// function fibonacci(num) {
//   let prevPrevNum,
//     prevNum = 0,
//     currentNum = 1;
//   for (i = 1; i < num; i++) {
//     prevPrevNum = prevNum;
//     prevNum = currentNum;
//     currentNum = prevPrevNum + prevNum;
//   }
//   return currentNum;
// }

module.exports = fibonacci;
