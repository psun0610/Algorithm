function solution(food) {
    // 음수면 한개 버림
    let arr = [];
    for(let i=1; i<food.length; i++) {
        arr.push(String(i).repeat(Math.floor(food[i]/2)));
    }
    return arr.join("") + "0".repeat(food[0]) + arr.reverse().join("")
}