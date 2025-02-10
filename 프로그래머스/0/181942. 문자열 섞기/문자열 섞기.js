function solution(str1, str2) {
    return [...str1].reduce((acc, cur, i) => acc + cur + str2[i], '')
}