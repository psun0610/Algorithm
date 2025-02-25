function solution(nums) {
    // 에라스토스테네스의 체
    const n = 3000;
    let che = new Array(n+1).fill(true);

    for(let i=2; i<=Math.sqrt(n); i++) {
        if(che[i]) {
            for(let j=i*i; j<=n; j+=i) {
                che[j] = false;
            }
        }
    }
    
    let answer = 0;
    for(let i=0; i<nums.length; i++) {
        for(let j=i+1; j<nums.length; j++) {
            for(let k=j+1; k<nums.length; k++) {
                if(che[nums[i] + nums[j] + nums[k]] === true) answer++;
            }
        }
    }
    
    return answer;
}