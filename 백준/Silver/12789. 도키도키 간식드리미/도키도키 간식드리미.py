from collections import deque

n = int(input())
line = deque((map(int, input().split())))
stack = []
success = []
current = 1

for i in range(1, n + 1):
    if line[0] == current:
        success.append(line.popleft())
        current += 1
    elif stack and stack[-1] == current:
        success.append(stack.pop())
        current += 1
    else:
        stack.append(line.popleft())
success.extend(stack[::-1])

if sorted(success) == success:
    print("Nice")
else:
    print("Sad")