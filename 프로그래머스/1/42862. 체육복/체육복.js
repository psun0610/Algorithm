function solution(n, lost, reserve) { 
    let realLost = lost.filter(x => !reserve.includes(x));
    let realReserve = reserve.filter(x => !lost.includes(x));
    
    realLost.sort((a, b) => a - b);
    realReserve.sort((a, b) => a - b);
    
    let count = n - realLost.length;

    for (let l of realLost) {
        let prevIdx = realReserve.indexOf(l - 1);
        let nextIdx = realReserve.indexOf(l + 1);
        
        if (prevIdx !== -1) {
            realReserve.splice(prevIdx, 1);
            count++;
            continue;
        }

        if (nextIdx !== -1) {
            realReserve.splice(nextIdx, 1);
            count++;
        }
    }

    return count;
}
