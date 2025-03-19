function solution(progresses, speeds) {
    var answer = [];
    var done = [];
    
    for(var i in progresses) {
        done.push(Math.ceil((100 - progresses[i])/speeds[i]));
    }

    var stack = [done[0]];
    for(var i=1; i<done.length; i++) {
        if(stack[0] >= done[i]) {
            stack.push(done[i])
        }
        else {
            answer.push(stack.length)
            stack = []
            stack.push(done[i])
        }
    }
    
    if(answer) {
        answer.push(stack.length);
    }
    return answer;
}