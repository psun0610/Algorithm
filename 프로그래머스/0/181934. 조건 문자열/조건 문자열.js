function solution(ineq, eq, n, m) {
    if(n === m) {
        if(eq === "=") return 1;
    } else {
        if(n > m && ineq === ">") return 1;
        else if(n < m && ineq === "<") return 1;
        else return 0;
    }
}