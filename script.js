let a = [1, 2, 3, 4, 5, 6];
let b = [...a];
let c = b;
console.log(b);
function map() {
  for (let i = 0; i < a.length; i++) {
    c[i] = b[i] * 2;
  }
  console.log(c);
}
map();
