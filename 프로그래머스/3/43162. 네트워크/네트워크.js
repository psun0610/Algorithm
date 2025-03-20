function solution(n, computers) {
    let count = 0;
    let visited = new Array(n).fill(false); // node 개수만큼 방문 여부 초기화
    
    function dfs(node) {
        visited[node] = true;
        for(let next=0; next<n; next++) {
            if(!visited[next] && computers[node][next] === 1) {
                dfs(next);
            }     
        }
    }
    
    for(let i=0; i<n; i++) {
        if(!visited[i]) {
            dfs(i);
            count++;
        }
    }
    
    return count;
}