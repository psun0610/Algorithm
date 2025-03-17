import java.util.*;
class Solution {
    public int[] solution(int[] answers) {
        int[] supo_1 = {1, 2, 3, 4, 5};
        int[] supo_2 = {2, 1, 2, 3, 2, 4, 2, 5};
        int[] supo_3 = {3, 3, 1, 1, 2, 2, 4, 4, 5, 5};
        int[] supo_answer = {0, 0, 0};
        
        for(int i=0; i<answers.length; i++) {
            if(answers[i] == supo_1[i % supo_1.length]) {
                supo_answer[0]++;
            }
            if(answers[i] == supo_2[i % supo_2.length]) {
                supo_answer[1]++;
            }
            if(answers[i] == supo_3[i % supo_3.length]) {
                supo_answer[2]++;
            }
        }
        // 최고 점수 찾기 (반복문 사용)
        int maxScore = supo_answer[0];
        for (int i = 1; i < 3; i++) {
            if (supo_answer[i] > maxScore) {
                maxScore = supo_answer[i];
            }
        }

        ArrayList<Integer> topScorers = new ArrayList<>();
        for (int i = 0; i < 3; i++) {
            if (supo_answer[i] == maxScore) {
                topScorers.add(i + 1);
            }
        }

        int[] answer = new int[topScorers.size()];
        for (int i = 0; i < topScorers.size(); i++) {
            answer[i] = topScorers.get(i);
        }

        return answer;
    }
}