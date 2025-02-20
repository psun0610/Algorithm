function solution(s) {
    const game = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine"
    ]
    
    
    game.map((cur, i) => {
        s = s.replaceAll(cur, i)
    })
    return Number(s);
}