# 그냥 input() 사용시 시간 초과 문제 발생
import sys
input = sys.stdin.readline

n = int(input())
stack = []

for i in range(n):
    command = input().split()

    # 1: 정수 X를 스택에 넣는다.
    if command[0] == "1":
        stack.append(command[1])

    # 2: 스택에 정수가 있다면 맨 위의 정수를 빼고 출력한다. 없다면 -1을 대신 출력한다.
    elif command[0] == "2":
        if len(stack) > 0:
            print(stack.pop())
        else:
            print(-1)

    # 3: 스택에 들어있는 정수의 개수를 출력한다.
    elif command[0] == "3":
        print(len(stack))

    # 4: 스택이 비어있으면 1, 아니면 0을 출력한다.
    elif command[0] == "4":
        if len(stack) > 0:
            print(0)
        else:
            print(1)

    # 5: 스택에 정수가 있다면 맨 위의 정수를 출력한다. 없다면 -1을 대신 출력한다.
    elif command[0] == "5":
        if len(stack) > 0:
            print(stack[-1])
        else:
            print(-1)
