/**
 * 0: 벽이 있는 자리, 1: 벽이 없는 자리
 * 시작 지점: (1, 1)
 */
function solution(maps) {
    const n = maps.length
    const m = maps[0].length
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]

    const bfs = (start) => {
        const queue = [start]
        const visited = Array.from({ length: n }, () => Array(m).fill(false));
        visited[0][0] = true;

        while (!!queue.length) {
            const [y, x, dist] = queue.shift()
            if(y === n - 1 && x === m - 1) return dist
            
            for(const [dy, dx] of directions) {
                const nx = x + dx
                const ny = y + dy
                
                // 맵 넘어가면 안감
                const isOver = nx < 0 || nx >= m || ny < 0 || ny >= n
                
                if (!isOver) {
                    // 벽이면 안감
                    const isWall = maps[ny][nx] === 0
                    // 방문했으면 안감
                    const isVisited = visited[ny][nx]
                    
                    if(!isWall && !isVisited) {
                        visited[ny][nx] = true
                        queue.push([ny, nx, dist+1])
                    }
                }

            }
        }
        
        return -1
    }

    return bfs([0, 0, 1])
}