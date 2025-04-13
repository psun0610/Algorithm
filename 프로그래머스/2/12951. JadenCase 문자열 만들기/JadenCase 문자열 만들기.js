function solution(s) {
    s = s.split(" ").map(word => {
        let curWord = "";
        for(let i=0; i<word.length; i++) {
            if(i === 0) curWord += word[i].toUpperCase();
            else curWord += word[i].toLowerCase();
        }
        return curWord;
    })
    return s.join(" ");
}