import java.util.*;

class Solution {
    public int solution(int[] priorities, int location) {
        int cnt = 0;
        PriorityQueue<Integer> queue = new PriorityQueue<>(Collections.reverseOrder());
        
        for(int p: priorities) {
            queue.offer(p);
        }
        
        while(!queue.isEmpty()) {
            for(int i=0; i<priorities.length; i++) {
                if(queue.peek() == priorities[i]) {
                    queue.poll();
                    cnt++;
                    
                    if(i == location) {
                        return cnt;
                    }
                }
            }
        }
        
        return cnt;
    }
}