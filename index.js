let x = ["aba", "baba", "aba", "xzxb"]
let y = ["aba", "xzxb", "ab"]

let a = ["xzz", "xy", "xyz", "yyy", "yyy", "yyy", "xyz"]
let b = ["xy", "xyz", "yy"]

let countarr = []

for(let i = 0; i < y.length; i++){
    let count = 0
    for(let j = 0; j < x.length; j++){
        if(y[i] == x[j]){
            count +=1
        }
    }
    counterarr[i] = count
    //counterarr.push(count)
}
console.log(countarr)
