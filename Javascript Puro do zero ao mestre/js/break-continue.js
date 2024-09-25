let car = ["BMW", "Volvo", "Saab", "Ford"]

list:{
    console.log(car[0]);
    console.log(car[1])
    break list;
    console.log(car[2])
}

for(let i = 0; i < 10; i++){
    if(i === 3){
        continue;
    }
    console.log("O numero atual é " + i)
}