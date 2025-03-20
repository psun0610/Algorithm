function solution(numbers, target) {
    let count = 0;

    function dfs(index, sum) {
        // 모든 숫자를 사용했을 때
        if (index === numbers.length) {
            // 합이 target과 같다면 count 증가
            if (sum === target) count++;
            return;
        }

        // 현재 숫자를 더하는 경우
        dfs(index + 1, sum + numbers[index]);

        // 현재 숫자를 빼는 경우
        dfs(index + 1, sum - numbers[index]);
    }

    dfs(0, 0);
    return count;
}
