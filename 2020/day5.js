// BFFFBBFRRR: row 70, column 7, seat ID 567.
// FFFBBBFRRR: row 14, column 7, seat ID 119.
// BBFFBBFRLL: row 102, column 4, seat ID 820.
// 128 rows total, 8 columns total
let boardingPassArr = ["BFFFBBFRRR", "FFFBBBFRRR", "BBFFBBFRLL"];

let highestId = 0;
boardingPassArr.forEach( pass =>{
    
    let seatId = decodeBoardingPass(pass);
    highestId = (seatId > highestId ) ? seatId : highestId;
})
console.log(highestId);

function decodeBoardingPass(pass) {
    let seatId;
    let row, column, rowNum, colNum;

    row = pass.slice(0,7);
    column = pass.slice(-3);
    rowNum = 128;
    colNum = 8;

    //Setup Rows
    let arrRows = [];
    for(let i = 0; i < rowNum; i++){
        arrRows.push(i);
    }

    //Process Row Number
    for (let r of row) {
        arrRows = handleLowerUpper(r, arrRows);
    }
    
    //Setup Columns
    let arrCols = [];
    for(let i = 0; i < colNum; i++){
        arrCols.push(i);
    }
    //Process Column Number
    for (let c of column) {
        arrCols = handleLowerUpper(c, arrCols);                                         
    }

    row = arrRows[0];
    column = arrCols[0];

    seatId = row * 8 + column;

    
    return seatId;

}

function handleLowerUpper(char, arr) {

    let lowerHalfCutoffIndex = Math.floor((arr.length - 1) / 2);
    let upperHalfCutoffIndex = Math.ceil((arr.length - 1) / 2);

    switch(char){
        case "F":
        case "L":
            //keep lower half
            arr = arr.slice(0, upperHalfCutoffIndex )
            break;

        case "B":
        case "R":
            // keep upper half
            arr = arr.slice( -(upperHalfCutoffIndex) );
            break;

        default:
            //do Nothing
            break;
    }

    return arr;

}