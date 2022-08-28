# 테스트케이스 3개 런타임에러
'''
def solution(genres, plays):
    answer = []
    album = {}
    for i in range(len(genres)):
        if genres[i] not in album:
            album[genres[i]] = [[i, plays[i]]]
        else:
            album[genres[i]].append([i, plays[i]])

    print(album)

    for g in album:
        # 많이 재생된 노래 정렬
        album[g].sort(key = lambda x:-x[1])
    
    lenlist = []
    sumlist = []
    for g in album:
        # 많이 재생된 장르
        sum_ = 0
        len_ = 0
        for play in album[g]:
            sum_ += play[1]
            len_ += 1
        album[g].append(sum_)
        lenlist.append(len_)
        sumlist.append(sum_)
    sumlist.sort(reverse=True)

    for i in range(len(sumlist)):
        for g in album:
            print('album[g]', album[g])
            if sumlist[i] in album[g]:
                answer.append(album[g][0][0])
                if lenlist[i] >= 2:
                    answer.append(album[g][1][0])

    return answer
'''

def solution(genres, plays):
    answer = []
    album = {}
    for i in range(len(genres)):
        if genres[i] not in album:
            album[genres[i]] = [[i, plays[i]]]
        else:
            album[genres[i]].append([i, plays[i]])

    genre_play = {}
    for genre in genres:
        sum_ = 0
        for i in album[genre]:
            sum_ += i[1]
        genre_play[genre] = sum_

    return answer

print(solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 150, 2500]))
