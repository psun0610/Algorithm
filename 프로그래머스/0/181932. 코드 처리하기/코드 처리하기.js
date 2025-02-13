function solution(code) {
    let mode = 0;
    let ret = "";
    
    [...code].map((char, idx) => {
        if (mode === 0) {
            if (char !== "1") {
                ret += (idx%2 === 0 ? char : "");
            } else {
                mode = 1;
            }
        } else {
            if (char !== "1") {
                ret += (idx%2 === 0 ? "" : char);
            } else {
                mode = 0;
            }
        }
    })
    
    return ret ? ret : "EMPTY"
}