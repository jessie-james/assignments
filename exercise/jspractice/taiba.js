function balanceParentheses(str) {
    let checkedOne = 0;
    let checkTwo = 0;
    newArr = str.split('')

    for (i = 0; i <= newArr.length; i++) {
        if (newArr[i] === `(`) {
         checkTwo += 1;
        } else if (newArr[i] === `)`) {
            checkedOne += 1;
        } else {
            console.log("fired")
        }
    }
    if (checkedOne === checkTwo) {
        return true
    } else {
        return false
    }
    
}

console.log(balanceParentheses(`()`))