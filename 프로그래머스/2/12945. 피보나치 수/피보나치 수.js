function solution(n) {
    const fibo = [0, 1];
    for(let i=2; i<n+1; i++) {
        fibo.push((fibo[i-2] + fibo[i-1]) % 1234567);
    }
    
    return fibo[n];
}