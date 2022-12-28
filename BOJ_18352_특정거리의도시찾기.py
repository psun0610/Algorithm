import sys

input = sys.stdin.readline

n, m, k, x = map(int, input().split())
road = [[] for _ in range(n)]
for _ in range(m):
    a, b = map(int, input().split())
    road[a].append(b)

print(road)
