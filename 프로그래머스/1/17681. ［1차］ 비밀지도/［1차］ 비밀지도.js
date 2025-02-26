const decrypteArr = (n, arr) => {
    let newArr = [];
    for(let i=0; i<n; i++) {
        let str = "0".repeat(n-arr[i].toString(2).length) + arr[i].toString(2);
        newArr.push(str);
    }
    return newArr;
}

function solution(n, arr1, arr2) {
    let answer = [];
    arr1 = decrypteArr(n, arr1);
    arr2 = decrypteArr(n, arr2);
    
    for(let i=0; i<n; i++) {
        let str = "";
        for(let j=0; j<n; j++) {
            str += (arr1[i][j] === "0" && arr2[i][j] === "0") ? " " : "#";
        }
        answer.push(str);
    }
    
    return answer;
}
    