import java.util.Arrays;

class Solution {
    public int[] solution(int[] array, int[][] commands) {
        int[] answer = new int[commands.length];
        
        for (int T = 0; T < commands.length; T++) {
            int start = commands[T][0] - 1;
            int end = commands[T][1];
            int k = commands[T][2] - 1;
            
            int[] subArray = Arrays.copyOfRange(array, start, end);
            Arrays.sort(subArray);
            answer[T] = subArray[k];
        }
        
        return answer;
    }
}
