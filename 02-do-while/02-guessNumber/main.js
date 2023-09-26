// PROGRAM-1 : User1

// V.1 !!

// ansNumer === null || ansNumer.trim() === '' || isNaN(ansNumer) === true
// let isNull = ansNumber === null;
// let isEmty = ansNumber.trim() ==='';
// let isNan = isNaN(ansNumber);

// let ansNumber = prompt('Input your anser'); // => null, string : "", "   ","qwewq",'123

// let isValid = ansNumber === null || ansNumber.trim() === '' || isNaN(ansNumer);
// let outOfRange = Number(ansNumber) < 1 || Number(ansNumber) > 99;
// let isInRange = Number(ansNumber) <= 1 || Number(ansNumber) >= 99;


// if (isValid) {
    //     alert('Invalid Input');
    // }else if (outOfRange){
        //     alert('Invalid Number Is Out Of Range')
        // }else if (isInRange){
            //     alert('Try To Guess Number') //Programe : Player 2 !!
            // }
            
            // V.2 !! : รับ Input ได้เรื่อยๆจนกว่าจะพิมพ์ถูก / แต่ให้ esc ได้
            
// let isInvalid = ansNumber === null || ansNumber.trim() === '' || isNaN(ansNumber);
let ansNumber = '';
let isEmty;
let isNan;
let outOfRange;
let isInRange = Number(ansNumber) <= 1 || Number(ansNumber) >= 99;

do {
    ansNumber = prompt('Enter your Magic Number') ||'';
    isEmty = ansNumber.trim() ==='';
    isNan = isNaN(ansNumber);
    outOfRange = Number(ansNumber) < 1 || Number(ansNumber) > 99;
    if (isEmty || isNan) {
        alert('Invalid Input. Try 1-99')
    }else if (outOfRange) {
        alert('Invalid Range, Try 1-99')
    }
} while (isEmty || isNan);

// Program 2 : Guess
// ทายซ้ำ
// hint
// ทายได้ไม่เกิน 5 ครั้ง

let guessNumber;
let i;


do {
    guessNumber = prompt('Enter your Answer') || '';
    isEmty = guessNumber.trim() ==='';
    isNan = isNaN(ansNumber);
    outOfRange = Number(guessNumber) < 1 || Number(guessNumber) > 99;
    if (isEmty || isNan) {
        alert('Invalid Input. Try 1-99')
    }else if (outOfRange) {
        alert('Invalid Range, Try 1-99')
    }
    else if(+guessNumber > +ansNumber){
        alert('Too High')
    }else if(+guessNumber < +ansNumber){
        alert('Too Low')
    }else if (+guessNumber === +ansNumber){
        alert('Correct')
    }
}
while(+guessNumber != +ansNumber || i == 5)
