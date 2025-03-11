function solution(clothes) {
    let answer = 1;
    const clothes_map = new Map();
    
    for(let cloth of clothes) {
        if(clothes_map.has(cloth[1])) {
            clothes_map.set(cloth[1], [...clothes_map.get(cloth[1]), cloth[0]]);
        } else {
            clothes_map.set(cloth[1], [cloth[0]])
        }
    }
    
    clothes_map.forEach(value => {
        answer *= (value.length + 1);
    })
    
    return answer - 1;
}