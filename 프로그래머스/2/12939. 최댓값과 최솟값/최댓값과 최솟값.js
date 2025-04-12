function solution(s) {
    const newS = s.split(" ").map(num => Number(num));
    return `${Math.min(...newS)} ${Math.max(...newS)}`;
}