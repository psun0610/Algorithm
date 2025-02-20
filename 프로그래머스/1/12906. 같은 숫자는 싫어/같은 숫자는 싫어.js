function solution(arr)
{
    let new_array = [];
    arr.map((cur, i) => {
        if(cur !== arr[i-1]) new_array.push(cur);
    })
    return new_array;
}