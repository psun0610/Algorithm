// @params k: number 유저 피로도
// @params dungeons: number[][] [던전 최소 필요 피로도, 소모 피로도][]
function solution(k, dungeons) {
    let answer = 0
    const visited = Array.from({length: dungeons.length}, () => false)
    
    const dfs = (k, count) => {
        answer = Math.max(answer, count)
        
        for(let i=0; i<dungeons.length; i++) {
            const [minRequired, somo] = dungeons[i]
            if(!visited[i] && k >= minRequired) {
                visited[i] = true
                dfs(k - somo, count + 1)
                visited[i] = false
            }
        }
    }
    
    dfs(k, 0)
    return answer
}