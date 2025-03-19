function solution(numbers) {
    let numSet = new Set();
    
    function getAnswer(numbers, cur) {
        if (cur.length > 0) numSet.add(Number(cur)); // 조합된 숫자 Set에 추가
        if (numbers.length === 0) return;
        
        for (let i = 0; i < numbers.length; i++) {
            let newNumbers = numbers.slice(0, i).concat(numbers.slice(i + 1));  // 숫자 하나를 제외한 배열 생성
            getAnswer(newNumbers, cur + numbers[i]);
        }
    }
    
    getAnswer(numbers.split(""), "");
    
    return [...numSet].filter(isPrime).length;
}

const isPrime = num => {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
