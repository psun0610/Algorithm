function solution(n) {
    let answer = 0;
    
    for(let i=0; i<=n; i++) {
        if (n % 2 === 0 && i % 2 === 0) {
            answer += i**2
        } else if (n % 2 !== 0 && i % 2 !== 0) {
            answer += i
        }
    }
    
    return answer
}