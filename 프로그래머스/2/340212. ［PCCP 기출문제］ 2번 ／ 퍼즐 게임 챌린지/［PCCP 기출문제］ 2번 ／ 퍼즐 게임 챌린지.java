import java.util.*;

class Solution {
    public int solution(int[] diffs, int[] times, long limit) {
        // 이진 탐색 이용
        int left = 1;
        int right = Arrays.stream(diffs).max().getAsInt();
        
        while (left < right) {
            int mid = (left + right) / 2;
            if (calcTime(diffs, times, limit, mid) <= limit) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;        
    }
    
    public long calcTime(int[] diffs, int[] times, long limit, int level) {
        long total_times = 0; // 매번 새로운 level에 대해 시간을 초기화

        for (int i = 0; i < diffs.length; i++) {
            int diff = diffs[i];        // 현재 퍼즐 난이도
            int time_cur = times[i];    // 현재 퍼즐의 소요 시간
            int time_prev = (i > 0) ? times[i - 1] : 0; // 이전 퍼즐의 소요 시간

            if (diff <= level) {
                // level이 같거나 높을 경우
                total_times += time_cur;
            } else {
                // level이 낮을 경우
                int mistakes = diff - level;
                total_times += time_cur * (mistakes + 1) + time_prev * mistakes;
            }
        }
        
        return total_times;
    }
}
