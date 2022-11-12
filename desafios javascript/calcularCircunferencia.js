function qualquerCoisa(radius){
    let area = 3.1415 * radius * radius;
    return area;
}

let calcular = qualquerCoisa;
console.log(calcular(3));

let calcular2 = qualquerCoisa;
console.log(calcular2(5))