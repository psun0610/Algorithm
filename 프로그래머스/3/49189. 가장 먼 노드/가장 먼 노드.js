function solution(n, edge) {
    const answer = [];
    const graph = Array.from({ length: n + 1 }, () => []);
    
    edge.forEach(e => {
        const [a, b] = e;
        graph[a].push(b);
        graph[b].push(a);
    });

    const visited = Array(n + 1).fill(false);
    const queue = [1];
    visited[1] = true;
    
    while (queue.length) {
        const curList = [];
        const len = queue.length;
        
        for (let i = 0; i < len; i++) {
            const cur = queue.shift();
            graph[cur].forEach(next => {
                if (!visited[next]) {
                    visited[next] = true;
                    queue.push(next);
                    curList.push(next);
                }
            });
        }
        if(curList.length > 0) answer.push(curList);
    }

    
    return answer[answer.length - 1].length;
}