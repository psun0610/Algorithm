function solution(x) {
    return x % x.toString().split("").reduce((cur, acc) => (Number(acc) + Number(cur)), 0) === 0 ? true : false;
    
}