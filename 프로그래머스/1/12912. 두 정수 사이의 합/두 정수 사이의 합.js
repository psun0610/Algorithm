function solution(a, b) {
    answer = 0;
    for(let num=Math.min(a,b); num <= Math.max(a,b); num++) {
        answer += num;
    }
    return answer;
}