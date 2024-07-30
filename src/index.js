module.exports = function reverse (n) {
  if (n < 0) n *= (-1);
  strN = '' + n;
  let dec = 1;
  for (let i = 1; i < strN.length; i++){
    dec *= 10;
  }
  let result = 0;
  let a = 1;
  for (let i = 0; i < strN.length; i++){
    result += Math.floor(n % (10 * a) / (1 * a)) * dec/(1 * a);
    a *= 10;
  }
  return result;
}
