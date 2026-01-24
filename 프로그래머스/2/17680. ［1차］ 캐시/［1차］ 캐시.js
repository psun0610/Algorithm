// 대소문자 구분 X
// LRU 사용
// cache hit : 실행시간 1
// cache miss : 실행시간 5
function solution(cacheSize, cities) {
    if (cacheSize === 0) return cities.length * 5
    
    let answerTime = 0
    const cache = []
    
    for(let city of cities) {
        city = city.toLowerCase()
        const index = cache.indexOf(city)
        
        if(index !== -1) {
            answerTime += 1
            cache.splice(index, 1)
            cache.push(city)
            continue
        } else if(cache.length >= cacheSize) {
            cache.shift()
            }
            cache.push(city) 
            answerTime += 5
    }
    
    return answerTime
}