function solution(people, limit) {
    people.sort((a, b) => b - a)    // 내림차순 정렬
    let left = 0;
    let right = people.length - 1;
    let count = 0;
    
    while(left <= right) {
        count++;
        if(people[left] + people[right] <= limit) {
            left++;
            right--;
        } else {
            left++;
        }
    }
    
    return count;
}