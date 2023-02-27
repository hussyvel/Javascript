const arr = new Array()
const arr2 = new Array(true, "Daniel", 34, new Array(3, 6, 9), new Array(7,8,9))

console.log(arr2[3][2])
console.log(arr2[3][arr2[3].length-1])

const arr4 = ["Hussyvel", 34, [8, 10, 22], true]
arr4.push("João Ethan")
console.log(arr4[2][1])
let n = 1
console.log(arr4[n])