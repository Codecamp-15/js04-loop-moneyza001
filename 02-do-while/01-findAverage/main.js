let input ;
let count = 0;
let result = 0;
let average;

do {
    input = +prompt('Put Number')
    if(input === null || input == 0 || input.trim == ''){
        break
    }else {
        count++;
        result += input;
    }
    average = result / count
}while(true)
console.log(`This average is ${average}`)
console.log(`This sum is ${result}`)