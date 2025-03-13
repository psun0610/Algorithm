function solution(arr, divisor) {
    var answer = [];
    arr.map(val => {
        if(val%divisor === 0) {
            answer.push(val);
        }
    })
    
    return answer.length ? answer.sort((a, b) => a - b) : [-1];
}