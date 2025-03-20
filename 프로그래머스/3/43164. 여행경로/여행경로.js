function solution(tickets) {
    let answer = ["ICN"];
    tickets.sort();    // 오름차순 정렬
    
    let visited = new Array(tickets.length).fill(false);    // 방문 여부
    let count = 0;  // 다 돌았는지 체크하기 위해 count
    
    function dfs(cur, path, count) {
        path.push(cur);
        
        // 종료 조건: 모든 티켓 다 사용
        if (count === tickets.length) {
            answer = [...path];
            return true;
        }
        
        for(let next=0; next<tickets.length; next++) {
            if(cur === tickets[next][0] && !visited[next]) {
                visited[next] = true;
                
                // 찾으면 즉시 종료
                if(dfs(tickets[next][1], path, count+1)) return true;
                visited[next] = false;
            }
        }
        path.pop();
        return false;
    }
    
    dfs("ICN", [], 0);
    return answer;
}
