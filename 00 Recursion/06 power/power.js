// function power(base, exponent) {
//   if (exponent === 0) return 1;
//   return base * power(base, exponent - 1);
// }

// enhanced version
function power(base, exponent) {
  if (exponent === 0) return 1;
  if (exponent === 1) return base;
  if (exponent % 2 === 0) {
    const res = power(base, exponent / 2);
    return res * res;
  } else return base * power(base, exponent - 1);
}

module.exports = power;
