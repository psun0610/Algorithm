class Solution {
    public int solution(int[][] sizes) {
        int card_long = 0;
        int card_short = 0;
        
        for(int i=0; i<sizes.length; i++) {
            int width = sizes[i][0];
            int height = sizes[i][1];
            
            if(width > height) {
                if(width > card_long) card_long = width;
                if(height > card_short) card_short = height;
            } else {
                if(height > card_long) card_long = height;
                if(width > card_short) card_short = width;
            }
        }
        
        return card_long * card_short;
        
    }
}