let count = 0
function codeCounter(arr) {
    for (i = 0; i < arr.lenght; i++) {
        if (arr[i] === "code") {
            count += 1
        }
    } return count;
}

codeCounter(["code", "code","codeit"])