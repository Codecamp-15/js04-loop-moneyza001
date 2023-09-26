

// for(let i =2;i <=100; i++){
//     let number = 0;
//     for(let j =2 ;j <= 100;j++){
//         if(i % j ==0){
//             number = number+1
//         }
//     }
//     if(number > 1){
//         continue}
//     else{
//         console.log(i)
//     }
// }

// Test Other Program  !!
// let n =5;

for(let n = 2 ; n <= 100;n++){
    let isPrime = true; // flag
for (let divider = 2; divider < n; divider++){
    if (n % divider  == 0 ){
        isPrime = false;
        break;
    }
}
if(isPrime) console.log(`number ${n} is prime number`);
}
/*
else (isPrime) console.log(`number ${n} not prime number`);

*/