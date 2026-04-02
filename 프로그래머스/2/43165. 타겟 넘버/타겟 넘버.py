# DFS
def solution(numbers, target):
    answer = 0
    
    def dfs(cur, _sum):
        nonlocal answer
        
        if len(numbers) == cur:
            if _sum == target:
                answer += 1
            return
        
        dfs(cur + 1, _sum + numbers[cur])
        dfs(cur + 1, _sum - numbers[cur])
        
    dfs(0, 0)
    
    return answer