/**
    N: 전체 스테이지 개수
    stages: 사용자가 멈춰있는 스테이지 번호가 담긴 배열
    실패율: 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
    실패율이 높은 스테이지부터 내림차순으로 스테이지 번호 배열 return
*/
function solution(N, stages) {
    // [0]은 도달한 수
    // [1]은 클리어하지 못한 플레이어 수
    let allStages = new Array(N).fill(0).map(() => new Array(2).fill(0));
    
    for(let i=0; i<stages.length; i++) {
        for(let j=0; j<Math.min(stages[i], N); j++) {
            allStages[j][0]++;
            if(j == stages[i]-1) {
                allStages[j][1]++;
            }
        }
    }
    
    let failureRates = allStages.map((stage, index) => {
        if (stage[0] === 0) {
            return { stage: index + 1, rate: 0 };
        }
        return { stage: index + 1, rate: stage[1] / stage[0] };
    });
    
    failureRates.sort((a, b) => b.rate - a.rate);
    return failureRates.map((item) => item.stage);
}