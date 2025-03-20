const solution = (begin, target, words) => {
    if (!words.includes(target)) return 0;
    
    const queue = [[begin, 0]];
    
    while(queue.length) {
        let [cur, count] = queue.shift();
        if(cur === target) return count;
        for(let i=0; i<words.length; i++) {
            if(canConvert(words[i], cur)) {
                queue.push([words[i], count+1]);
            }
        }
    }
    return 0;
}

// 변환 가능한지
const canConvert = (a, b) => {
    let cnt = 0;
    for(let i=0; i<a.length; i++) {
        if(a[i] == b[i]) cnt++;
    }
    if(cnt === a.length-1) return true;
    else return false;
}