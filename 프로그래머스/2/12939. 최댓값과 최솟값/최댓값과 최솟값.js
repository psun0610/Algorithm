function solution(s) {
    const newS = s.split(" ");
    return `${Math.min(...newS)} ${Math.max(...newS)}`;
}