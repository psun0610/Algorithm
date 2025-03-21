function solution(numbers) {
    numbers = numbers.map(String);
    // 내림차순 정렬
    numbers.sort((a, b) => (b+a) - (a+b));
    
    if(numbers[0] === "0") return "0"
    
    return numbers.join("");
}