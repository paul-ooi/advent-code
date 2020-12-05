let numArr = [1721,979,366,299,675,1456]; //Sample

let numArr2 = Array.from(numArr);
let numArr3 = Array.from(numArr);
let totals = [];
let m;

numArr.forEach( (num, i) => {
    numArr2.forEach ( (num2, ii) => {
        numArr3.forEach ( (num3, iii) => {
        
            if (i != ii && ii != iii) {
                let sum = parseInt(num) + parseInt(num2) + parseInt(num3);
                if (sum == 2020) {
                    totals = [num, num2, num3];
                    m = totals[0] * totals[1] * totals[2];
                }    
            }
                
        })
        
    })
})

console.log(totals);
console.log(m);