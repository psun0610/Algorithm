import java.util.*;

class Solution {
    public int[] solution(int l, int r) {
        List<Integer> resultList = new ArrayList<>();
        
        // l부터 r까지의 정수 중에서 조건에 맞는 숫자 찾기
        for (int i = l; i <= r; i++) {
            if (isZeroOrFiveOnly(i)) {
                resultList.add(i);
            }
        }
        
        // 조건에 맞는 숫자가 없는 경우 -1 반환
        if (resultList.isEmpty()) {
            return new int[] {-1};
        }
        
        // 리스트를 배열로 변환하여 반환
        return resultList.stream().mapToInt(Integer::intValue).toArray();
    }
    
    // 숫자가 "0"과 "5"로만 이루어졌는지 확인하는 함수
    public boolean isZeroOrFiveOnly(int num) {
        String str = String.valueOf(num);
        for (char c : str.toCharArray()) {
            if (c != '0' && c != '5') {
                return false;
            }
        }
        return true;
    }
}
