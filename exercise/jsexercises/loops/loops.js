
// // let str1 = "dkfeigjiesijfeid"

// // function mystring( str1) {
// //     let newnewArray = [];
// //     for (i = 0; i < str1.length; i++){
// //         newnewArray.push(str1[i])
// //     }
// //     console.log(newnewArray);
   
// //     return newnewArray;
    
// // }

// // mystring(str1);
// ///

// let str2 = "jessietaylynn"
// let charater = "j"
// let occurance = 0;

// function characterLoop(str2, charater) {
//     for (i = 0; i < str2.length; i++) {
//         if (str2[i] === charater) {
//             occurance++
//         } 
//     }

//     if (occurance > 1) {
//         console.log(charater + " occured " + occurance + " times!")
//     }
//     else if (occurance === 1) {
//         console.log(charater + " occured " + occurance + " time!") 
//     }
//     else {
//         console.log (" Not Found!")
//     }
// }

// characterLoop(str2, charater);

let numsArray = [1,2,3,4,5,6,32,12,42];
let numFound = 0;

function findNum(numsArray) {
    for (i = 0; i < numsArray.length; i++) {
        if (numsArray[i] === 42) {
            numFound++
        }
    }
    if (numFound >0 ) {
        console.log("Found 42!")
    }

    else {
        console.log(" 42 was Not Found!")
    }
    
}
findNum(numsArray);

let tenArray = [3, 6, 5, 7, 8, 1, 20, 8, 3, 200]

function smallestNum(tenArray) {
    let smallestNum = tenArray[0];
    for (i = 0; i < tenArray.length; i++){
        if (tenArray[i] < smallestNum) {
            smallestNum = tenArray[i]
        }
    }
    console.log(smallestNum)
        
}
smallestNum(tenArray);





