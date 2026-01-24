function solution(s) {
    const pair = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    
    let answer = 0
    
    for(let i = 0; i < s.length; i++) {
        const stack = []
        let isValid = true
        for (let j = 0; j < s.length; j++) {
            const curIndex = (j + i) % s.length // 현재 실제 인덱스
            const curBracket = s[curIndex]
            
            if(['(', '{', '['].includes(curBracket)) {
                stack.push(curBracket)
            } else if (stack.pop() !== pair[curBracket]) {
                isValid = false
                break
            }
        }
        
        if(isValid && !stack.length) {
            answer++
        }
    }
        
    return answer
}