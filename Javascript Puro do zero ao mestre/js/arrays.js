const arr = new Array()
const arr2 = new Array(true, "Daniel", 34, new Array(3, 6, 9))

arr2[0] = false
console.log(arr2[3].length)

arr2[4] = `novo valor`

arr2[arr2.length] = "novo valor 2"

arr2.push(`João`)
arr2.push(`Ethan`)
console.log(arr2)