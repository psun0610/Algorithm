import java.util.*;

class Solution {
    boolean solution(String s) {
        Stack<Character> stack = new Stack<>();
        
        for(int i=0; i<s.length(); i++) {
            if(s.charAt(i) == '(') {
                stack.push('(');
            }
            else {
                if(stack.size() > 0) {
                    stack.pop();
                } else {
                    return false;
                }
            }
        }
        
        if(stack.size() != 0) return false;
        else return true;
    }
}