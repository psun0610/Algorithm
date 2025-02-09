function solution(arr1, arr2) {
    const compareLength = arr1.length - arr2.length;
    const compareSum = arr1.reduce((a, c) => a + c) - arr2.reduce((a, c) => a + c)
    
    if(compareLength > 0) return 1
    else if(compareLength < 0) return -1
    else {
        if(compareSum > 0) return 1;
        else if (compareSum < 0) return -1;
        else return 0;
    }
}