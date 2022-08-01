let gradeCalc = function(score, totalScore) {
    let percent = (score / totalScore) * 100
    let letterGrade = ''

    if (percent >= 90){
        letterGrade = 'A'
    } else if (percent >= 80) {
        letterGrade = 'B'
    } else if (percent >= 70)  {
        letterGrade = 'C'
    } else { 
        letterGrade = 'D'
    }
    return `You got a ${letterGrade} (${percent})`
}

let resultado = gradeCalc(9, 20)
    console.log(resultado)