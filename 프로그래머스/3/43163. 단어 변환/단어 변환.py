from collections import deque

# 단어가 한개만 다른지 판별하는 함수
def isDiffOne(word1, word2):
    n = len(word1)
    diff = 0
    
    for index in range(n):
        if word1[index] != word2[index]:
            diff += 1
        if diff > 1:
            return False
        
    if diff == 1:
        return True
    else:
        return False

        
    
# BFS
def solution(begin, target, words):

    visited = [False for _ in range(len(words))]
    queue = deque([(begin, 0)])
    
    while queue:
        curWord, dist = queue.popleft()
            
        # 만약 꺼낸 단어가 target이면 종료!
        if curWord == target:
            return dist
        

        
        for index, word in enumerate(words):
            # 딱 한글자만 다르고 방문하지 않은 단어들을 모두 방문한다.
            if isDiffOne(curWord, word) and not visited[index]:
                queue.append((word, dist + 1))
                visited[index] = True

    return 0