class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class LinkedList {
    constructor(value) {
     let createdNode = new Node(value)
     this.head = createdNode
     this.tail = this.head
     this.length = 1   
    }
    addElement(value) {
        let createdNode = new Node(value)
        if(!this.head) {
            this.head = createdNode
            this.tail = this.head
        } else {
            this.tail.next = createdNode
            this.tail = createdNode
        }
        this.length++
        return this
    }
    removeElement(value) {
        if(this.length == 1) {
            this.head = null
            this.tail = null
            this.length --
        } else if(this.head.value == value){
            this.head = this.head.next
            this.length --
        } else {
           let prevNode =  this.getToTheNode(this.head,value)
           console.log('found',prevNode)
        }
    }
    getToTheNode(head,value) {
        if(head.next.value == value) {
            head.next = null
            this.tail = head
            this.length --
            return head
        } else return this.getToTheNode(head.next,value)
    }
    //2->4->5->6
    unshift(value) {
        let createdNode = new Node(value)
        if(!this.head) {
            this.head = createdNode = this.tail
        } else {
            createdNode.next = this.head
            this.head = createdNode
        }
        this.length++
        return this
    }
    shift() {
        if(this.head == this.tail) {
            this.head = null
            this.tail = null
        } else {
            this.head = this.head.next
            
        }
        this.length --
    }
    getItems(index) {
        if(this.length < index || index < 1) {
            console.log("No element exists")
            return undefined
        } else {
            let temp = this.head
            for (let i=0;i<index;i++) {
                temp = temp.next
            }
            return temp
        }
    }
    setItems(index,value) {
        
    }

}

const myLinkedList = new LinkedList(4)
myLinkedList.addElement(7)
myLinkedList.addElement(16)
myLinkedList.addElement(22)
myLinkedList.addElement(8)
myLinkedList.removeElement(8)
myLinkedList.unshift(15)
// myLinkedList.shift()
console.log('index',myLinkedList.getItems(-1))
console.log(JSON.stringify(myLinkedList) )