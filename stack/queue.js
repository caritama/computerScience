class Queue {
    constructor(){
        this.queue = []
    }
    get  size() {
        return this.queue.length
    }
    enqueue (item) {
        this.queue.push(item)
        return this.queue
    }
    dequeue () {
        this.queue.shift()
    }
    front () {
        return this.queue[0]
    }
    isEmpty () {
        if(this.size === 0){
            return true
        }else{
            return false
        }
    }
    print () {
        return this.queue
    }
    back () {
        return this.queue[this.queue.length - 1]
        
    }
}
const cola = new Queue()

console.log(cola.enqueue('Uno'))
console.log(cola.enqueue('Dos'))
//console.log(cola.dequeue())
console.log(cola.front())
console.log(cola.print())
console.log(cola.back())
console.log(cola.size)

