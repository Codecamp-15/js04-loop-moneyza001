console.log('Lab04')


let number = +prompt('Enter number')
// console.log(number)

//PATTERN RECOGNITION
// 1150/10 => 115 cunt 1;
// 115/10 => 11.5 cunt 2;
// 11.5/10 => 1.15 cunt 3;
// 1.15/10 => 0.115 cunt 4;
let count = 0;

if(number < 0){
    number = -number;
}

while(number >= 1){
    // console.log(number);
    count++;
    number = number / 10;
}
console.log(count)