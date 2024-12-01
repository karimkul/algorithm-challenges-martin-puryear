// 1. List: Add Front
class ListNode {
    constructor(value) {
        (this.val = value), (this.next = null);
    }
}
function insertAtHead(head, value) {
    const newNode = new ListNode(value);

    newNode.next = head;

    return newNode;
}
function printList(head) {
    let current = head;
    let result = "";
    while (current !== null) {
        result += current.val + " -> ";
        current = current.next;
    }
    result += "null";
    console.log(result);
}
let head = null;

head = insertAtHead(head, 10); // List: 10 -> null
head = insertAtHead(head, 20); // List: 20 -> 10 -> null
head = insertAtHead(head, 30); // List: 30 -> 20 -> 10 -> null

console.log(printList(head));

// 2. List: Contains
class ListNode2 {
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}
function contains(head, value) {
    let current = head;

    while (current !== null) {
        if (current.val === value) {
            return true;
        }
        current = current.next;
    }
    return false;
}

let head2 = null;
head = new ListNode2(10);
head.next = new ListNode2(20);
head.next.next = new ListNode2(30);

console.log(contains(head, 20));

console.log(contains(head, 40));
