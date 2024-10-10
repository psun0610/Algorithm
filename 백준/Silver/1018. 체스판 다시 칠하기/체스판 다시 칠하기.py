# 맨 왼쪽 위 칸이 흰색인 경우, 검은색인 경우 2가지 경우의 수에서 칠해야 하는 정사각형의 최소 개수의 최소값

n, m = map(int, input().split())

board = [list(input()) for i in range(n)]
result = []

# 8*8 크기로 나눌 수 있는 체스판 모두 체크
for a in range(n - 7):
    for b in range(m - 7):
        start1 = 0
        start2 = 0

        # 번갈아가며 체크하고 추가함
        for i in range(a, a + 8):
            for j in range(b, b + 8):
                if (i + j) % 2 == 0:
                    if board[i][j] == "W":
                        start1 += 1
                    else:
                        start2 += 1
                else:
                    if board[i][j] == "B":
                        start1 += 1
                    else:
                        start2 += 1
        result.append(start1)
        result.append(start2)

print(min(result))
