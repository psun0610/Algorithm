# DFS
def dfs(tickets, visited,  way):
    if len(way) == len(tickets) + 1:
        return way
    
    for idx, ticket in enumerate(tickets):
        start, end = ticket
        if start == way[-1] and not visited[idx]:
            visited[idx] = True
            
            result = dfs(tickets, visited, way + [end])
            
            if result:
                return result
            visited[idx] = False
            
    return None
    
def solution(tickets):
    answer = []
    n = len(tickets)
    tickets.sort(key=lambda x: x[1])  
    
    usedTicket = [False for _ in range(n)]
    
    return dfs(tickets, usedTicket,  ["ICN"])
    
