function solution(A,B){
    let Aasc = A.sort((a, b) => a - b);
    let Bdec = B.sort((a, b) => b - a);
    
    let Adec = A.sort((a, b) => b - a);
    let Basc = B.sort((a, b) => a - b);
    
    let a = Aasc.reduce((acc, cur, i) => acc += cur * Bdec[i], 0);
    let b = Adec.reduce((acc, cur, i) => acc += cur * Basc[i], 0);
    
    return Math.min(a, b)
}