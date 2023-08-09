let sumNumber = 0;
let sumEven = 0;
let sumOdd = 0;
let sumEvenSquare = 0;
let sumThirdSqare = 0;

for(let i = 0; i <= 100; i++){
    sumNumber = sumNumber + i;
    if(i%2 === 0){
        sumEven = sumEven + i;
    }
    if(i%2 == 1){
        sumOdd = sumOdd + i;
    }
}

for(let i = 0; i <= 100; i++){
    if(i % 3 === 0){
        sumThirdSqare = sumThirdSqare + i**2;
    }
    if(i % 2 === 0){
        sumEvenSquare = sumEvenSquare + i**2;
    }

}
    console.log(`Sum All ${sumNumber}`)
    console.log(`Sum Even ${sumEven}`)
    console.log(`Sum Odd ${sumOdd}`)
    console.log(sumEvenSquare-sumThirdSqare)

    