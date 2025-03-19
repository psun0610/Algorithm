
class Queue {
    constructor() {
        this.queue = {};
        this.front = 0;
        this.rear = 0;
    }
    
    enqueue(value) {
        this.queue[this.rear++] = value;
    }
    
    dequeue() {
        let value = this.queue[this.front];
        this.front++;
        return value;
    }
    
    peek() {
        return this.queue[this.front];
    }
    
    size() {
        return this.rear - this.front;
    }
}


function solution(priorities, location) {
    let answer = 0;
    
    // 우선 순위 힙 (max heap)
    let maxHeap = new Queue();
    [...priorities].sort((a, b) => b - a).forEach(p => maxHeap.enqueue(p));
    
    // 큐 {priority, 인덱스}
    let queue = new Queue();
    [...priorities].forEach((p, i) => queue.enqueue({p, i}))
    
    while(queue.size() > 0) {
        let cur = queue.dequeue();
        
        // 큐에서 꺼낸 게 최대값이 아니면
        if(cur.p < maxHeap.peek()) {
            queue.enqueue(cur); // 다시 넣기
        } else {
            // 최대값이면
            maxHeap.dequeue();
            answer++;
            
            // 해당 프로세스면 break
            if(cur.i === location)  return answer;
        }
    }
    return answer;
}