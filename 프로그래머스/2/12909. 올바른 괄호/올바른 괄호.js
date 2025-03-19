function solution(s){
    
    const stack = [];
    
    for(let bracket of s) {
        if(bracket === "(") {
            stack.push(1);
        } else if(stack.length > 0) {
            stack.pop();
        } else {
            return false
        }
    }
    
    if(stack.length !== 0) {
        return false
    }

    return true
}