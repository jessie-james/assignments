function solution(A, B, C) {
    let newArray = [A, B, C];
    let largest = Math.max(...newArray);
    
    let secondLarge = Math.max(...newArray);
    return largest;
}
console.log(solution(2, 4, 1));

// function solution(S) {
//     let newArray = S.split('');
//     for (i = 0; i < newArray.length; i++) {
//         if (newArray[i] === newArray[i + 1]) {
//             while (newArray[i] === newArray[i + 2]) {
//                 newArray.splice(i, 1);
//             }
//         }
//     }
//     return newArray.join('')
//     // write your code in JavaScript (Node.js 8.9.4)
// }

// function solution(A) {
//     var ans = 0;
//     for (i = 1; i < A.length; i++) {
//         if (A[i] < ans) {
//             ans = A[i];
//         }
//     }
//     return ans;
// }

