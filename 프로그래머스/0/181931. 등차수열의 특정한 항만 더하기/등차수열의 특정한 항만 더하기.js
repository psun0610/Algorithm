function solution(a, d, included) {
    let sum_ = 0
    for(let i=0; i<included.length; i++) {
        if(included[i]) {
            sum_ += (a+d*i)
        }
    }
    return sum_;
}