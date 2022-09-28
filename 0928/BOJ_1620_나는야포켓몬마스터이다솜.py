import sys
input = sys.stdin.readline
n, m = map(int, input().split())
pokemons = {}
num = 0
for i in range(n):
    num += 1
    pokemons[input()] = num

for i in range(m):
    what = input()
    if what is int:
        