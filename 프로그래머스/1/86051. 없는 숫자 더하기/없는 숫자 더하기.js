function solution(numbers) {
    let answer = [];
    for(let i=0; i<10; i++) {
        if(numbers.indexOf(i) === -1) {
            answer.push(i);
        }
    }
    
    return answer.reduce((arr, cur) => arr + cur, 0);
}