function solution(array, commands) {
    let answer = [];
    for(let idx=0; idx<commands.length; idx++) {
        let [i,j,k] = commands[idx];
        answer.push(array.slice(i-1,j).sort((a,b) => a-b)[k-1])
    }
    return answer
}