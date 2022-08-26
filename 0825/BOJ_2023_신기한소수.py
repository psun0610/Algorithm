import math
import sys
input = sys.stdin.readline

n = int(input())
for num in range(10**(n-1)*2, 10**(n-1)*8):
    for i in range(n-1, -1, -1):
        tmp = num // (10 ** i)            # 왼쪽부터 소수 확인
        j = 100000000
        for j in range(2, int(math.sqrt(tmp))+1):
            if tmp % j == 0:
                break
        if tmp % j == 0:
            break
    else:
        print(num)

# # DFS로 풀기
# import sys
# import math
# input = sys.stdin.readline

# n = int(input())

# def isPrime(num):
#     pass
# def dfs(num):
#     if len(str(num)) > n:
#         print(num)
#     else:
#         for i in range(10):


# dfs(2)
# dfs(3)
# dfs(5)
# dfs(7)