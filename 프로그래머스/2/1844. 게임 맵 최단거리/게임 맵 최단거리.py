from collections import deque


    
def solution(maps):
    n = len(maps)    # 행 (y)
    m = len(maps[0]) # 열 (x)
    
    dx = [0, 0, 1, -1]
    dy = [1, -1, 0, 0]

    visited = [[False for _ in range(m)] for _ in range(n)]
    
    # BFS 시작
    queue = deque([(0, 0, 1)])
    visited[0][0] = True
    
    # 큐가 끝났는데도 도착 못하면 -1 return
    while queue:
        # 큐에서 한개 꺼내기
        y, x, dist = queue.popleft()
        
        
        # 만약 꺼낸 곳이 도착지라면 return
        if y == n - 1 and x == m - 1:
            return dist
        
        # 현재 위치에서 갈 수 있는 곳 다 가보기
        for i in range(4):
            nx = x + dx[i] 
            ny = y + dy[i]

            # 맵 범위 내에 있고
            if 0 <= ny < n and 0 <= nx < m:
                # 벽이 아니며(1), 아직 방문하지 않았다면
                if maps[ny][nx] == 1 and not visited[ny][nx]:
                    visited[ny][nx] = True
                    # 다음 칸으로 이동할 때 거리를 +1 해서 큐에 삽입
                    queue.append((ny, nx, dist + 1))
    
    return -1
        
        