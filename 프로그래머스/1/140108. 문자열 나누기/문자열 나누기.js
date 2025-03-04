function solution(s) {
    let target = "";
    let sep = "";
    let cnt = 0;
    
    for(let i=0; i<s.length; i++) {
        if(!target) {
            target=s[i];
            continue;
        }

        if(s[i] === target[0]) {
            target += s[i];
        } else {
            sep += s[i];
        }
        
        if(target.length === sep.length) {
            cnt++;
            target = "";
            sep = "";
        }
    }
    
    return cnt + (target.length !== 0 && 1);
}