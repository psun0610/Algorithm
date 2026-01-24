function solution(participant, completion) {
    const raceMap = new Map()
    
    for (let partPerson of participant) {
        raceMap.set(partPerson, raceMap.get(partPerson) ? raceMap.get(partPerson) + 1 : 1)
    }
    
    for (let compPerson of completion) {
        raceMap.set(compPerson, raceMap.get(compPerson) - 1)
    }
    
    for (let [person, value] of raceMap.entries()) {
        if(value >= 1) return person
    }
}