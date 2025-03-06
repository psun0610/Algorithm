function solution(nums) {
    var dict = {};
    
    nums.map(num => {
        if(num in dict) {
            dict[num] = 1;
        } else {
            dict[num] += 1;
        }
    })
    
    return Math.min(nums.length/2, Object.keys(dict).length);
}