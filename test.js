// var testArr = [1, 3, 5, 0, 0];

// function noZeros() {
//     for (let i = 0; i < testArr.length; i++) {
//         if (testArr[i] === 0) {
//             testArr[i] = ' ';
//         }
//     }
//     testArr = testArr;
//     console.log(testArr);
// }

// // console.log(testArr);

// noZeros();

function numStringToNumNum() {
    var testStr = '004300209005009001070060043006002087190007400050083000600000105003508690042910300';
    var blahTest = testStr.split('')
    // console.log(blahTest);
    for (let i = 0; i < blahTest.length; i++) {
        var numNum = parseInt(blahTest[i], 10);
        console.log(numNum);
    }
}
numStringToNumNum();

// var n = '1,2,3,4,5,6,7,8,9';
// var digits = ("" + n).split("");
// console.log(digits);

// for (let i = 0; i < digits.length; i++) {
//     var blah = parseInt(digits[i]);
//     console.log(blah);
// }
// // console.log(blah);
// var intArr = parseInt(digits, 10);
// // console.log(intArr);

// var b = n.split(',').map(function (item) {
//     return parseInt(item, 10);
// });
// // console.log(b);
// console.log(Math.floor(Math.random() * 4))

