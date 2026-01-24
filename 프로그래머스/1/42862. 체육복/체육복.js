// n: 전체 학생 수
// lost: 도난 당한 학생 번호 배열
// reserve: 여벌 체육복 가져온 학생 배열
const solution = (n, lost, reserve) => {
    // 1. 정렬 (그리디의 필수 조건!)
    lost.sort((a, b) => a - b);
    reserve.sort((a, b) => a - b);
    
    // 2. 여벌 체육복을 가져왔지만 도난 당한 학생(빌려줄 수 없는 학생) 제거하기
    const actualLost = []
    const actualReserve = []
    for (let student of lost) {
        if(!reserve.includes(student)) {
            actualLost.push(student)
        }
    }
    for (let student of reserve) {
        if(!lost.includes(student)) {
            actualReserve.push(student)
        }
    }
    
    let answer = n - actualLost.length
    
    // 3. 그리디
    for (let student of actualLost) {
        const prevReserve = student - 1 // 앞번호
        const nextReserve = student + 1 // 뒷번호
        
        // 앞번호가 여벌이 있으면
        if(prevReserve > 0 && actualReserve.includes(prevReserve)) {
            answer++
            actualReserve.splice(actualReserve.indexOf(prevReserve), 1)
            continue
        }
        
        // 뒷번호가 여벌이 있으면
        if(nextReserve <= n && actualReserve.includes(nextReserve)) {
            answer++
            actualReserve.splice(actualReserve.indexOf(nextReserve), 1)
        }
    }
    
    return answer
}