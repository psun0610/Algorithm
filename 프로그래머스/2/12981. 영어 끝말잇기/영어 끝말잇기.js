function solution(n, words) {
    const dict = new Map([[words[0], 1]]);
    let curEnd = words[0][words[0].length-1];
    
    for(let i=1; i<words.length; i++) {
        const start = words[i][0];
        const end = words[i][words[i].length-1];
        // 끝말잇기가 안되면
        if(start != curEnd) {
            return [(i % n) + 1, Math.floor(i / n) + 1];
        }
        // 이미 나온 단어라면
        if(dict.get(words[i]) === 1) {
            return [(i % n) + 1, Math.floor(i / n) + 1];
        } else {
            dict.set(words[i], 1);
        }
        
        curEnd = end;
    }
    return [0, 0]
}