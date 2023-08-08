let sum1 = 0;
let sum2 = 0;
let sum3 = 0;
let sum4 = 0;
let sum5 = 0;
for(let i = 0; i <= 100; i++){
    sum1 = sum1 + i;
    if(i%2 === 0){
        sum2 = sum2 + i;
    }
    if(i%2 == 1){
        sum3 = sum3 + i;
    }
}

for(let i = 0; i <= 100; i++){
    if(i % 3 === 0){
        sum4 = sum4 + i**2;
    }
    if(i % 2 === 0){
        sum5 = sum5 + i**2;
    }

}
    console.log(`Sum All ${sum1}`)
    console.log(`Sum Even ${sum2}`)
    console.log(`Sum ODD ${sum3}`)
    console.log(sum5)

    console.log(sum5-sum4)

    