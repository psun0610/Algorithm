function solution(nums) {
    var dict = {};
    
    nums.map(num => {
        dict[num] ? dict[num]++ : dict[num] = 1;
    })
    
    return Math.min(nums.length/2, Object.keys(dict).length);
}