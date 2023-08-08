
let n = +prompt('Enter number')
let count = 0;
let sum = 0;
while (n) {
    let r = n % 10;
    sum = sum + r;
    n = (n - r) /10;
    count++;

}
console.log(sum);

