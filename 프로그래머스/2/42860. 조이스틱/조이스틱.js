function solution(name) {
    let count = 0;    
    let minMove = name.length - 1;
    
    for(let i=0; i<name.length; i++) {
        count += Math.min(name[i].charCodeAt() - 'A'.charCodeAt(), Math.abs('Z'.charCodeAt() - name[i].charCodeAt() + 1));
        
        let nextIdx = i + 1;
        while(nextIdx<name.length && name[nextIdx] === "A") nextIdx++;
        
        minMove = Math.min(minMove,
                            i * 2 + name.length - nextIdx,
                            i + (name.length - nextIdx) * 2);
    }
    
    return count + minMove;
}