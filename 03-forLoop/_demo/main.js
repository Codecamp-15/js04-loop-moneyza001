console.log('Lern counting Loop');


console.log("Starting...")
// () = paremthesis
//{} = bracket
// [] = square bracket

// for(let i = 1; i <= 3; i++){
//     console.log(`>>Hello`)
//     console.log(`>>Codecamp`)
// }
// Even number
// for(let i =2; i<= 20; i = i +2){
//     console.log(i);
// } 

//FizzBuzz 

// for(let i = 1;i <= 20; i++ ){
//     if(i %3 == 0 && i %5 == 0) console.log('FizzBuzz');
//     else if(i %3 == 0)console.log('Fizz');
//     else if(i %5 == 0)console.log('Buzz');
//     else console.log(i);
// }


// Continue
// for(let i = 1;i <= 20; i++ ){
//     if(i %3 == 0 && i %5 == 0) console.log('FizzBuzz');
//     else if(i %5 == 0)console.log('Buzz');
//     else if(i %3 == 0)continue;
//     else console.log(i);
// }


// String concat
// let str = "";
// for(let i = 1; i <=10;i++){

//     if(i %3 == 0 ){continue;}
//     str += i;
// } 

// console.log(str)


// EX.5 : Remove vowel (a,e,i,o,u)

// let src = "codecamp"
// let res = ''

// for(let i = 0; i < src.length; i++){
//     let c = src[i];
//     let isVowel = (c == 'a' || c == 'e'|| c == 'i'|| c == 'o'|| c == 'u')
//     if(isVowel)continue;
//     else res = res + src[i];
// }
// console.log(res)


// ADVANCE : Nester Loop;
// Multiplication Table

for(let i = 2; i <= 12; i++){
    console.log('Start table')
    
    for(let j = 1; j <= 12; j++){
        console.log(`${i} * ${j} = ${i * j}`)
    }
    console.log('\n')
}


console.log("End...")
