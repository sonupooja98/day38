let n = Math.floor(Math.random() * 10);
let isPrime = true;
for (i = 2; i < n; i++) {
    let output = n % i;

    if (output == 0) {
        isPrime = false;
        break;
    }
}
if (isPrime) {
    console.log(n + " is Prime Number");
} else {
    console.log(n + " is not a Prime Number");
}