class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    size() {
        return this.heap.length;
    }
    
    root() {
        return this.heap[0];
    }
    
    swap(idx1, idx2) {
        [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
    }
    
    add(value) {
        this.heap.push(value);
        this.bubbleUp();
    }
        
    poll() {
        if(this.heap.length === 1) {
            return this.heap.pop();
        }
        const value = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return value;
    }
    
    bubbleUp() {
        let index = this.heap.length - 1;
        let parentIdx = Math.floor((index - 1) / 2);
        while (index > 0 && this.heap[index] < this.heap[parentIdx]) {
            this.swap(index, parentIdx);
            index = parentIdx;
            parentIdx = Math.floor((index - 1) / 2);
        }
    }
    
    bubbleDown() {
        let index = 0;
        let length = this.heap.length;
        
        while (true) {
            let left = index * 2 + 1;
            let right = index * 2 + 2;
            let smallest = index;
            
            if (left < length && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }
            
            if (right < length && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }
            
            if (smallest === index) break;
            this.swap(index, smallest);
            index = smallest;
        }
    }
}
function solution(scoville, K) {
    const minHeap = new MinHeap();
    let count = 0;

    scoville.forEach(sco => minHeap.add(sco));

    while (minHeap.size() >= 2 && minHeap.root() < K) {
        const a = minHeap.poll();
        const b = minHeap.poll();
        const mixed = a + b * 2;
        minHeap.add(mixed);
        count++;
    }

    return minHeap.root() >= K ? count : -1;
}