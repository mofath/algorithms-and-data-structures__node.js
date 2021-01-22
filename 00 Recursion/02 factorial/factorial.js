function factorial(num) {
  if (num == 0) return 1;
  return num * factorial(num - 1);
}

// iterativelly
// function factorial(num) {
// let fact = 1;
//   for (let i = num; i > 1; i--) {
//     console.log(i);
//   }
//   console.log("All Done!");
// }

module.exports = factorial;
