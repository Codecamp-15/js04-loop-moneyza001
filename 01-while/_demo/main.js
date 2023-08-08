console.log('Welcome')

// ประเภทของลูป
// -- Condition Loop ตัดสินใจว่าจะรันต่อไหม จาก Boolean
// -- Counting Loop ตัดสินว่าจะรันต่อไหมจาก จาก ตัวเลข
// -- List Loop "---------------------" จาก จำนวนของรายการ

console.log("Starting...")

// let i = 1;

// while(i <= 10){

//     console.log(i)
//     i++;
// }


// // console.log("End....")
// let i = 1;

// while(i <= 20){

//     // if(i % 3 == 0){
//     //     console.log(i)
        
//     // }


//     // if(i % 3 != 0){
//     //     console.log(i)
//     // }else if(i % 5 == 0){
//     //     console.log(`${i} : High five`)
//     // }

//     if(i % 5 == 0){
//         console.log(`${i} : High five`)
//     }else if(i % 3 != 0){
//         console.log(i)
//     }



// i++;
// }

// FizzBuzz
// Range : 1-20;
// divided by 3 : PRINT Fizz
// divided by 5 : PRINT Buzz
// divided by 3 and 5 : PRINT FizzBuzz
// Other PRINT number

let i = 1 ;

while(i <= 20){
    if(i %3 == 0 && i %5 == 0){
        console.log('FizzBuzz')
    }else if(i %3 == 0){
        console.log('Fizz')
    }else if(i %5 == 0){
        console.log('Buzz')
    }else{
        console.log(i)
    }
    i++;
}

console.log("End....")