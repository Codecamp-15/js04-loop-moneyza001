

for(let i =2;i <=100; i++){
    let number = 0;
    for(let j =2 ;j <= 100;j++){
        if(i % j ==0){
            number = number+1
        }
    }
    if(number > 1){
        continue}
    else{
        console.log(i)
    }
}