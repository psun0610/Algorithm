'''
import sys
input = sys.stdin.readline
T = int(input())
for _ in range(T):
    n = int(input())
    test = []
    cnt = 0

    for _ in range(n):
        a, b = map(int, input().split())
        test.append((a, b))
    
    test.sort(key=lambda x: x[0])
    
    # for applicant in test:
    #     for j in range(applicant[0]-1):
    #         if applicant[1] > test[j][1]:
    #             break
    #     else:
    #         cnt += 1

    best = test[0][1]

    for i in test:
        if i[1] <= best:
            best = i[1]
            cnt += 1

    print(cnt)
'''

#   score = [0] * (n + 1)
#   for _ in range(n):
#       x, y = map(int, sys.stdin.readline().split())
#       score[x] = y

import sys
input = sys.stdin.readline
T = int(input())
for _ in range(T):
    n = int(input())
    cnt = 0
    score = [0] * (n + 1)
    for _ in range(n):
        x, y = map(int, sys.stdin.readline().split())
        score[x] = y

    best = score[1]
    for i in range(1, n+1):
        if best >= score[i]:
            best = score[i]
            cnt += 1

    print(cnt)