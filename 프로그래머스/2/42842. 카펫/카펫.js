function solution(brown, yellow) {
    const answer = []; 
    
    let width = 3;
    let height = 0;
    while(true) {
        height = (brown + yellow) / width;
        if(width * 2 + (height - 2) * 2 === brown) {
            break;
        } 
        width++;
    }
    
    if(width < height) {
        [width, height] = [height, width];
    }
    return [width, height];
}