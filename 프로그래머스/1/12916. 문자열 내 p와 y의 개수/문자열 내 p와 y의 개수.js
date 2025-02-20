function solution(s){
    let cnt_p = 0;
    let cnt_y = 0;
    
    s.split("").map((cur) => {
        if(cur.toLowerCase() === "p") cnt_p++;
        if(cur.toLowerCase() === "y") cnt_y++;
    })
    
    if(!cnt_p && !cnt_y) return true;
    if(cnt_p === cnt_y) return true;
    else return false;
}