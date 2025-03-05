function solution(dartResult) {
    let answer = [];
    
    let cur_point = "";
    
    dartResult.split("").map(val => {
        if(!isNaN(val)) {
            cur_point += val;
        }
        
        if(val === "S" | val === "D" | val === "T") {
            let cur_bonus = val === "D" ? 2 : val === "T" ? 3 : 1;
            answer.push(Number(cur_point) ** cur_bonus);
            cur_point = "";
        }
        
        if(val === "*") {
            answer[answer.length-1] = answer[answer.length-1] * 2;
            answer[answer.length-2] = answer[answer.length-2] * 2;
        }
        
        if(val === "#") {
            answer[answer.length-1] = -answer[answer.length-1]
        }
    })
    console.log(answer)
    return answer.reduce((cur, acc) => acc += cur, 0);
}