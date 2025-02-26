const decrypteArr = (n, arr) => {
    let newArr = [];
    for(let i=0; i<n; i++) {
        let str = "";
        while(arr[i] > 0) {
            str = (arr[i] % 2).toString() + str;
            arr[i] = parseInt(arr[i] / 2);
        }
        
        str = "0".repeat(n - str.length) + str;
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
            if(arr1[i][j] === "0" && arr2[i][j] === "0") str += " ";
            else str += "#";
        }
        answer.push(str);
    }
    
    return answer;
}
    