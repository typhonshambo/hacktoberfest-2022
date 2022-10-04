// 12-->13-->15-->2
//  \  /
//   13


const LinkedList = {
    head: {
        value: 10,
        next: {
            value: 20,
            next: {
                value: 30,
                next: null 
            }
        }
    }
}

console.table(LinkedList)

class linkedList{
    constructor(data){
        this.head = {
            value: data,
            next: null
        }
        this.tail = this.head 
        this.length = 1; 
    }
    append(data){
        const newNode = {
            value: data,
            next: null
        }   
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }
    prepand(data){
        const newNode = {
            value: data,
            next: null
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }
    traversing(req){
        let counter = 0;
        let currentNode = this.head

        while(counter != req){
            counter++;
            currentNode = currentNode.next
        }
        return currentNode;
    }
    insert(index,data){
        const newNode = {
            value: data,
            next: null
        }
        const leaderNode = this.traversing(index-1)
        const nextNode = leaderNode.next

        leaderNode.next = newNode;
        newNode.next = nextNode;
    }
}

let newLinkedList = new linkedList(12);
newLinkedList.append(13);
newLinkedList.append(15);
newLinkedList.prepand(2);
newLinkedList.insert(2,3);
console.table(newLinkedList);