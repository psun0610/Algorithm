import java.util.*;

class Solution {
    static int[] dx = {0, 1, 0, -1};
    static int[] dy = {1, 0, -1, 0};
    
    public int solution(int[][] maps) {
        int[][] visited = new int[maps.length][maps[0].length];
        return bfs(maps, visited);
    }
    
    public int bfs(int[][] maps, int[][] visited) {
        int x = 0;
        int y = 0;
        Queue<int[]> queue = new LinkedList<>();
        visited[x][y] = 1;
        queue.add(new int[]{x, y});
        
        while (queue.size() != 0) {
            int[] xy = queue.poll();
            int cx = xy[0];
            int cy = xy[1];
            
            // 목표에 도착하면 거리 반환
            if (cx == maps.length - 1 && cy == maps[0].length - 1) {
                return visited[cx][cy];
            }
            
            for (int i = 0; i < 4; i++) {
                int nx = cx + dx[i];
                int ny = cy + dy[i];
                
                // 바깥으로 나간 것 체크
                if (nx < 0 || ny < 0 || nx >= maps.length || ny >= maps[0].length)
                    continue;
                
                // 방문여부, 통로인지 체크
                if (visited[nx][ny] != 0 || maps[nx][ny] == 0)
                    continue;
                
                // 로직
                visited[nx][ny] = visited[cx][cy] + 1;
                queue.add(new int[] {nx, ny});
            }
        }
        
        return -1;
    }
}