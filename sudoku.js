$(".col-sm").click(function () {
    var test = $(this).attr('id');
    // console.log(test);
});

$("#lightTheme").click(function () {
    $('body').css('background-color', 'white');
    $('html').css('background-color', 'white');
    $('.container').css('background-color', 'white');
    $('.block').css('background-color', '#97B3FF');
    $('.light').css('background-color', '#BCBCBC');
})

$("#darkTheme").click(function () {
    $('body').css('background-color', 'black');
    $('html').css('background-color', 'black');
    $('.container').css('background-color', 'black');
    $('.block').css('background-color', 'gray');
    $('.light').css('background-color', 'white');

})

// var sudoArr = [0, 0, 5, 0, 0, 0, 4, 0, 0, 9, 0, 8, 2, 0, 1, 0, 6, 0, 0, 6, 2, 7, 0, 0, 0, 1, 3, 5, 0, 0, 0, 6, 0, 0, 0, 7, 7, 0, 0, 0, 0, 9, 3, 4, 0, 3, 2, 0, 1, 0, 4, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 7, 9, 0, 6, 5, 0, 4, 8, 0, 9, 0, 5, 0, 0, 0, 1];
var sudoNums = {
    '0': [1, 0, 0, 0, 0, 0, 0, 9, 0, 2, 0, 8, 9, 7, 0, 6, 0, 5, 0, 0, 0, 5, 3, 2, 0, 0, 0, 0, 0, 6, 0, 5, 0, 4, 0, 0, 7, 0, 0, 8, 0, 6, 0, 0, 2, 0, 8, 3, 7, 0, 0, 0, 1, 0, 6, 0, 4, 0, 8, 0, 1, 2, 0, 8, 9, 0, 6, 0, 0, 0, 5, 0, 0, 1, 5, 0, 4, 0, 0, 0, 7],
    '1': [0, 0, 4, 3, 0, 0, 2, 0, 9, 0, 0, 5, 0, 0, 9, 0, 0, 1, 0, 7, 0, 0, 6, 0, 0, 4, 3, 0, 0, 6, 0, 0, 2, 0, 8, 7, 1, 9, 0, 0, 0, 7, 4, 0, 0, 0, 5, 0, 0, 8, 3, 0, 0, 0, 6, 0, 0, 0, 0, 0, 1, 0, 5, 0, 0, 3, 5, 0, 8, 6, 9, 0, 0, 4, 2, 9, 1, 0, 3, 0, 0],
    '2': [0, 4, 0, 1, 0, 0, 0, 5, 0, 1, 0, 7, 0, 0, 3, 9, 6, 0, 5, 2, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 7, 0, 0, 0, 9, 0, 6, 8, 0, 0, 8, 0, 3, 0, 5, 0, 6, 2, 0, 0, 9, 0, 0, 6, 0, 5, 4, 3, 6, 0, 0, 0, 8, 0, 7, 0, 0, 2, 5, 0, 0, 9, 7, 1, 0, 0],
    '3': [6, 0, 0, 1, 2, 0, 3, 8, 4, 0, 0, 8, 4, 5, 9, 0, 7, 2, 0, 0, 0, 0, 0, 6, 0, 0, 5, 0, 0, 0, 2, 6, 4, 0, 3, 0, 0, 7, 0, 0, 8, 0, 0, 0, 6, 9, 4, 0, 0, 0, 3, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 5, 0, 0, 8, 9, 7, 0, 0, 0, 0, 0, 5, 0, 2, 0, 0, 0, 1, 9, 0],
    '4': [4, 9, 7, 2, 0, 0, 0, 0, 0, 1, 0, 0, 4, 0, 0, 0, 0, 5, 0, 0, 0, 0, 1, 6, 0, 9, 8, 6, 2, 0, 3, 0, 0, 0, 4, 0, 3, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 1, 0, 7, 2, 6, 0, 0, 0, 0, 2, 0, 0, 5, 8, 7, 0, 0, 0, 0, 6, 0, 0, 0, 0, 4, 5, 3, 0, 0, 9, 7, 0, 6, 1],
    '5': [1, 0, 0, 0, 0, 8, 5, 0, 0, 0, 0, 0, 3, 0, 7, 0, 8, 9, 7, 0, 0, 6, 0, 0, 2, 0, 0, 0, 9, 0, 0, 5, 0, 1, 0, 3, 4, 2, 0, 0, 6, 0, 9, 7, 0, 3, 5, 0, 2, 0, 0, 0, 4, 0, 0, 0, 2, 0, 0, 0, 0, 0, 8, 0, 0, 0, 4, 0, 9, 6, 1, 0, 6, 0, 0, 5, 7, 0, 0, 0, 4],
    '6': [7, 0, 1, 0, 2, 0, 0, 8, 0, 0, 0, 0, 0, 1, 0, 0, 0, 4, 0, 9, 0, 3, 0, 5, 0, 0, 0, 0, 0, 9, 8, 0, 0, 2, 4, 0, 1, 6, 0, 0, 7, 0, 0, 0, 0, 5, 2, 0, 9, 0, 4, 0, 3, 0, 0, 0, 0, 0, 0, 2, 0, 9, 0, 0, 8, 3, 1, 0, 6, 5, 0, 7, 0, 5, 0, 4, 0, 7, 6, 0, 8],
    '7': [0, 0, 0, 3, 8, 0, 1, 0, 9, 0, 1, 2, 0, 9, 5, 3, 0, 0, 0, 6, 0, 2, 0, 0, 0, 0, 8, 0, 5, 9, 0, 0, 0, 2, 3, 0, 4, 0, 6, 0, 2, 0, 0, 7, 0, 7, 0, 0, 0, 4, 0, 9, 0, 0, 3, 0, 1, 9, 0, 7, 6, 0, 0, 0, 8, 0, 6, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 1],
    '8': [9, 1, 0, 0, 8, 0, 0, 3, 0, 0, 4, 6, 2, 9, 0, 1, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 4, 0, 0, 0, 3, 0, 0, 0, 5, 1, 1, 2, 0, 0, 4, 0, 8, 6, 9, 6, 5, 4, 0, 0, 0, 0, 2, 0, 3, 7, 0, 5, 0, 0, 0, 8, 0, 0, 0, 0, 6, 0, 0, 0, 0, 3, 0, 0, 2, 9, 0, 1, 7, 4, 0],
    '9': [0, 3, 4, 0, 2, 1, 5, 6, 0, 1, 0, 0, 8, 0, 0, 0, 0, 0, 6, 0, 0, 0, 7, 0, 3, 0, 0, 5, 0, 0, 0, 1, 0, 0, 9, 0, 0, 6, 8, 0, 0, 9, 0, 0, 0, 0, 0, 2, 7, 0, 0, 6, 3, 4, 0, 8, 7, 0, 0, 6, 0, 0, 2, 2, 0, 0, 5, 0, 0, 4, 0, 3, 0, 0, 1, 0, 9, 4, 8, 0, 0],
    '10': [0, 0, 0, 1, 0, 7, 6, 9, 0, 9, 0, 0, 0, 4, 0, 5, 7, 0, 2, 3, 0, 6, 0, 5, 0, 0, 1, 0, 5, 0, 7, 3, 8, 0, 0, 0, 0, 9, 2, 0, 1, 0, 0, 0, 0, 3, 0, 8, 0, 0, 0, 7, 6, 0, 1, 0, 3, 0, 8, 0, 9, 0, 0, 6, 2, 0, 0, 0, 0, 0, 4, 5, 0, 8, 4, 0, 0, 2, 0, 0, 0],



}

var randNum = Math.floor(Math.random() * 10);
var sudoArr = sudoNums[randNum];
// console.log(sudoArr);
var one = 1;
// console.log(sudoNums);

function sudoBoardMaker() {
    for (let i = 0; i < sudoArr.length; i++) {
        if (sudoArr[i] === 0) {
            sudoArr[i] = ' ';
        }
        // console.log(sudoArr);
    }

    A1 = sudoArr[0];
    A2 = sudoArr[1];
    A3 = sudoArr[2];
    A4 = sudoArr[3];
    A5 = sudoArr[4];
    A6 = sudoArr[5];
    A7 = sudoArr[6];
    A8 = sudoArr[7];
    A9 = sudoArr[8];
    B1 = sudoArr[9];
    B2 = sudoArr[10];
    B3 = sudoArr[11];
    B4 = sudoArr[12];
    B5 = sudoArr[13];
    B6 = sudoArr[14];
    B7 = sudoArr[15];
    B8 = sudoArr[16];
    B9 = sudoArr[17];
    C1 = sudoArr[18];
    C2 = sudoArr[19];
    C3 = sudoArr[20];
    C4 = sudoArr[21];
    C5 = sudoArr[22];
    C6 = sudoArr[23];
    C7 = sudoArr[24];
    C8 = sudoArr[25];
    C9 = sudoArr[26];
    D1 = sudoArr[27];
    D2 = sudoArr[28];
    D3 = sudoArr[29];
    D4 = sudoArr[30];
    D5 = sudoArr[31];
    D6 = sudoArr[32];
    D7 = sudoArr[33];
    D8 = sudoArr[34];
    D9 = sudoArr[35];
    E1 = sudoArr[36];
    E2 = sudoArr[37];
    E3 = sudoArr[38];
    E4 = sudoArr[39];
    E5 = sudoArr[40];
    E6 = sudoArr[41];
    E7 = sudoArr[42];
    E8 = sudoArr[43];
    E9 = sudoArr[44];
    F1 = sudoArr[45];
    F2 = sudoArr[46];
    F3 = sudoArr[47];
    F4 = sudoArr[48];
    F5 = sudoArr[49];
    F6 = sudoArr[50];
    F7 = sudoArr[51];
    F8 = sudoArr[52];
    F9 = sudoArr[53];
    G1 = sudoArr[54];
    G2 = sudoArr[55];
    G3 = sudoArr[56];
    G4 = sudoArr[57];
    G5 = sudoArr[58];
    G6 = sudoArr[59];
    G7 = sudoArr[60];
    G8 = sudoArr[61];
    G9 = sudoArr[62];
    H1 = sudoArr[63];
    H2 = sudoArr[64];
    H3 = sudoArr[65];
    H4 = sudoArr[66];
    H5 = sudoArr[67];
    H6 = sudoArr[68];
    H7 = sudoArr[69];
    H8 = sudoArr[70];
    H9 = sudoArr[71];
    I1 = sudoArr[72];
    I2 = sudoArr[73];
    I3 = sudoArr[74];
    I4 = sudoArr[75];
    I5 = sudoArr[76];
    I6 = sudoArr[77];
    I7 = sudoArr[78];
    I8 = sudoArr[79];
    I9 = sudoArr[80];


    // console.log(sudoArr[0]);

    var sudokuObj = {
        A1: A1,
        A2: A2,
        A3: A3,
        A4: A4,
        A5: A5,
        A6: A6,
        A7: A7,
        A8: A8,
        A9: A9,
        B1: B1,
        B2: B2,
        B3: B3,
        B4: B4,
        B5: B5,
        B6: B6,
        B7: B7,
        B8: B8,
        B9: B9,
        C1: C1,
        C2: C2,
        C3: C3,
        C4: C4,
        C5: C5,
        C6: C6,
        C7: C7,
        C8: C8,
        C9: C9,
        D1: D1,
        D2: D2,
        D3: D3,
        D4: D4,
        D5: D5,
        D6: D6,
        D7: D7,
        D8: D8,
        D9: D9,
        E1: E1,
        E2: E2,
        E3: E3,
        E4: E4,
        E5: E5,
        E6: E6,
        E7: E7,
        E8: E8,
        E9: E9,
        F1: F1,
        F2: F2,
        F3: F3,
        F4: F4,
        F5: F5,
        F6: F6,
        F7: F7,
        F8: F8,
        F9: F9,
        G1: G1,
        G2: G2,
        G3: G3,
        G4: G4,
        G5: G5,
        G6: G6,
        G7: G7,
        G8: G8,
        G9: G9,
        H1: H1,
        H2: H2,
        H3: H3,
        H4: H4,
        H5: H5,
        H6: H6,
        H7: H7,
        H8: H8,
        H9: H9,
        I1: I1,
        I2: I2,
        I3: I3,
        I4: I4,
        I5: I5,
        I6: I6,
        I7: I7,
        I8: I8,
        I9: I9,
    }

    // console.log(sudokuObj);

    function insertingNums() {
        $('#A1').append(sudokuObj.A1);
        $('#A2').append(sudokuObj.A2);
        $('#A3').append(sudokuObj.A3);
        $('#A4').append(sudokuObj.A4);
        $('#A5').append(sudokuObj.A5);
        $('#A6').append(sudokuObj.A6);
        $('#A7').append(sudokuObj.A7);
        $('#A8').append(sudokuObj.A8);
        $('#A9').append(sudokuObj.A9);
        $('#B1').append(sudokuObj.B1);
        $('#B2').append(sudokuObj.B2);
        $('#B3').append(sudokuObj.B3);
        $('#B4').append(sudokuObj.B4);
        $('#B5').append(sudokuObj.B5);
        $('#B6').append(sudokuObj.B6);
        $('#B7').append(sudokuObj.B7);
        $('#B8').append(sudokuObj.B8);
        $('#B9').append(sudokuObj.B9);
        $('#C1').append(sudokuObj.C1);
        $('#C2').append(sudokuObj.C2);
        $('#C3').append(sudokuObj.C3);
        $('#C4').append(sudokuObj.C4);
        $('#C5').append(sudokuObj.C5);
        $('#C6').append(sudokuObj.C6);
        $('#C7').append(sudokuObj.C7);
        $('#C8').append(sudokuObj.C8);
        $('#C9').append(sudokuObj.C9);
        $('#D1').append(sudokuObj.D1);
        $('#D2').append(sudokuObj.D2);
        $('#D3').append(sudokuObj.D3);
        $('#D4').append(sudokuObj.D4);
        $('#D5').append(sudokuObj.D5);
        $('#D6').append(sudokuObj.D6);
        $('#D7').append(sudokuObj.D7);
        $('#D8').append(sudokuObj.D8);
        $('#D9').append(sudokuObj.D9);
        $('#E1').append(sudokuObj.E1);
        $('#E2').append(sudokuObj.E2);
        $('#E3').append(sudokuObj.E3);
        $('#E4').append(sudokuObj.E4);
        $('#E5').append(sudokuObj.E5);
        $('#E6').append(sudokuObj.E6);
        $('#E7').append(sudokuObj.E7);
        $('#E8').append(sudokuObj.E8);
        $('#E9').append(sudokuObj.E9);
        $('#F1').append(sudokuObj.F1);
        $('#F2').append(sudokuObj.F2);
        $('#F3').append(sudokuObj.F3);
        $('#F4').append(sudokuObj.F4);
        $('#F5').append(sudokuObj.F5);
        $('#F6').append(sudokuObj.F6);
        $('#F7').append(sudokuObj.F7);
        $('#F8').append(sudokuObj.F8);
        $('#F9').append(sudokuObj.F9);
        $('#G1').append(sudokuObj.G1);
        $('#G2').append(sudokuObj.G2);
        $('#G3').append(sudokuObj.G3);
        $('#G4').append(sudokuObj.G4);
        $('#G5').append(sudokuObj.G5);
        $('#G6').append(sudokuObj.G6);
        $('#G7').append(sudokuObj.G7);
        $('#G8').append(sudokuObj.G8);
        $('#G9').append(sudokuObj.G9);
        $('#H1').append(sudokuObj.H1);
        $('#H2').append(sudokuObj.H2);
        $('#H3').append(sudokuObj.H3);
        $('#H4').append(sudokuObj.H4);
        $('#H5').append(sudokuObj.H5);
        $('#H6').append(sudokuObj.H6);
        $('#H7').append(sudokuObj.H7);
        $('#H8').append(sudokuObj.H8);
        $('#H9').append(sudokuObj.H9);
        $('#I1').append(sudokuObj.I1);
        $('#I2').append(sudokuObj.I2);
        $('#I3').append(sudokuObj.I3);
        $('#I4').append(sudokuObj.I4);
        $('#I5').append(sudokuObj.I5);
        $('#I6').append(sudokuObj.I6);
        $('#I7').append(sudokuObj.I7);
        $('#I8').append(sudokuObj.I8);
        $('#I9').append(sudokuObj.I9);
    }
    insertingNums();
}

sudoBoardMaker();


