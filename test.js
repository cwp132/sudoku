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
// numStringToNumNum();

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

var test1 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
var test2 = ['1', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
var g = 0;
for (let i = 0; i < test1.length; i++) {
    if (test1[i] === test2[i]) {
        g++;
        console.log('Fuck yeah ' + g);
    } else {
        console.log('blah');
    }
    // console.log(g);
}
if (test1 === test2) {
    console.log('hell yeah');
} else {
    // console.log('blah');
};

// var bullShit = ["↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1", "↵↵                1"];

// // var notShitData = bullShit.map(trim());

// // for (let i = 0; i < bullShit.length; i++) {
// //     var notShitData = bullShit[i].trim();
// // }

// var notShitData;

// bullShit.map(function (bullShit) {
//     return notShitData = bullShit.replace("/(\u21B5)/g");
// });

// console.log(notShitData);
