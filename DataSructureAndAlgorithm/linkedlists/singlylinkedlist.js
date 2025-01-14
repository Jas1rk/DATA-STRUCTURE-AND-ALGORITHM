class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    // checking the linked list
    return this.size === 0;
  }

  prepend(value) {
    // this method to add a new elemet to the fist  of linked list
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    // this method to add a new element at the end of linked list
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }

    if (index === 0) {
      return this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  removeIndex(index) {
    if (index < 0 || index > this.size) {
      return;
    }
    let curr = this.head;
    if (index === 0) {
      this.head = curr.next;
    } else {
      let prev = null;
      for (let i = 0; i < index; i++) {
        prev = curr;
        curr = curr.next;
      }
      prev.next = curr.next;
      this.size--;
    }
  }

  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        const removenode = prev.next;
        prev.next = removenode.next;
        this.size--;
        return value;
      }

      return null;
    }
  }

  merge(list1, list2) {
    /// merging two linked list
    if (list1 === null) return list2;
    if (list2 === null) return list1;

    let curr = list1;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = list2;
    return list1;
  }

  findMiddle() {
    ///finding the middle element of linked list
    if (this.isEmpty()) {
      return null;
    }
    let right = this.head;
    let left = this.head;
    while (left !== null && left.next !== null) {
      right = right.next;
      left = left.next.next;
    }
    return right.value;
  }

  sort() {
    // sorting values accenting order
    let swapped = true;
    while (swapped) {
      swapped = false;
      let curr = this.head;
      while (curr && curr.next) {
        if (curr.value > curr.next.value) {
          let temp = curr.value;
          curr.value = curr.next.value;
          curr.next.value = temp;
          swapped = true;
        }
        curr = curr.next;
      }
    }
  }

  search(value) {
    /// this method is to search value from linked list and return the position of value
    if (this.isEmpty()) {
      return null;
    }
    let i = 0;
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        return i;
      }
      curr = curr.next;
      i++;
    }
    return "no value found";
  }

  reverse() {
    /// this method is reversing the linked list
    let curr = this.head;
    let prev = null;

    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  removeDublicate() {
    //// for removing the dublicate elements

    let curr = this.head;
    while (curr) {
      let running = curr;
      while (running.next) {
        if (running.next.value === curr.value) {
          running.next = running.next.next;
          this.size--;
        } else {
          running = running.next;
        }
      }
      curr = curr.next;
    }

    // let seen = new Set()
    // let curr = this.head
    // let prev = null
    // while(curr){
    //     if(seen.has(curr.value)){
    //         prev.next = curr.next
    //         this.size--
    //     }else{
    //         seen.add(curr.value)
    //         prev = curr
    //     }
    //     curr = curr.next
    // }
  }

  removeFirst() {
    // this method is to remove the first node of linked list
    if (this.isEmpty()) {
      return "the list is empty";
    }
    this.head = this.head.next;
  }

  rotate(k) {
    if (k == 0 || this.head == null) {
      return;
    }
    let count = 1;
    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
      count++;
    }
    curr.next = this.head;
    let breakPoint = count - (k % count);
    if (breakPoint === count) {
      curr.next = null;
      return;
    }
    let newTail = this.head;
    for (let i = 0; i < breakPoint; i++) {
      newTail = newTail.next;
    }
    this.head = newTail.next;
    newTail.next = null;
  }

  removeLast() {
    if (this.isEmpty()) {
      return "list is empty";
    }
    let curr = this.head;
    while (curr.next && curr.next.next) {
      curr = curr.next;
    }
    curr.next = null;
  }

  searchTwo(val1, val2) {
    let curr = this.head;
    let pos1 = -1;
    let pos2 = -1;
    let count = 0;
    while (curr) {
      if (curr.value === val1 && pos1 - 1) {
        pos1 = count;
      } else if (curr.value === val2 && pos2 - 1) {
        pos2 = count;
      }
      if (pos1 !== -1 && pos2 !== -1) {
        break;
      }
      curr = curr.next;
      count++;
    }
    return { pos1, pos2 };
  }

  sum() {
    let curr = this.head;
    let total = 0;
    while (curr) {
      total += curr.value;
      curr = curr.next;
    }
    return total;
  }

  print() {
    /// to print the values
    if (this.isEmpty()) {
      console.log("The list is empty");
    } else {
      let curr = this.head;
      let list = "";
      while (curr) {
        list += `${curr.value}`;
        if (curr.next) list += ",";
        curr = curr.next;
      }
      console.log(list);
    }
  }
}

const result1 = new LinkedList();
console.log(result1.size);
console.log("The first linked list");
result1.append(10);
result1.append(30);
result1.append(50);
result1.append(20);

result1.print();

const result2 = new LinkedList();
console.log("Second linked list");
result2.append(90);
result2.append(78);
result2.append(98);
result2.append(23);
result2.append(67);

result2.print();

console.log("after merging");
const mergedList = new LinkedList();
mergedList.head = result1.merge(result1.head, result2.head);
mergedList.size = result1.size + result2.size;
mergedList.print();
console.log("adding new element to the first");
mergedList.prepend(5);
mergedList.prepend(2);
mergedList.print();
console.log("finding middle  : ", mergedList.findMiddle());
console.log("after sorting");
mergedList.sort();
mergedList.print();
console.log("the searched value is :", mergedList.search(30));
mergedList.reverse();
mergedList.print();
console.log("removed the dublicates");
mergedList.removeDublicate();
mergedList.print();
console.log("removing the first node");
mergedList.removeFirst();
mergedList.print();
console.log("removing the last node");
mergedList.removeLast();
mergedList.print();
console.log("rotating");
mergedList.rotate(4);
mergedList.print();
mergedList.insert(4, 1);
mergedList.print();
console.log("removing index");
mergedList.removeIndex(2);
mergedList.print();
mergedList.removeValue(67);
mergedList.print();
console.log(mergedList.searchTwo(23, 50));
console.log("Total of linkedlist", mergedList.sum());

//     // mergeTwo(list1,list2){
//     //     const  dummy = new Node(0)
//     //     let current = dummy

//     //     let l1 = list1.head
//     //     let l2 = list2.head

//     //     while(l1!==null&&l2!==null){
//     //         if(l1.value<=l2.value){
//     //             current.next = l1
//     //             l1 = l1.next
//     //         }else{
//     //             current.next = l2
//     //             l2 = l2.next
//     //         }
//     //         current = current.next
//     //     }
//     //     if(l1!==null){
//     //         current.next = l1
//     //     }
//     //     if(l2!==null){
//     //         current.next = l2
//     //     }

//     //     const mergedList = new LinkedList()
//     //     mergedList.head = dummy.next
//     //     let size = 0
//     //     let temp = mergedList.head
//     //     while(temp!==null){
//     //         size++
//     //         temp = temp.next

//     //     }
//     //     mergedList.size = size

//     //     return mergedList

//     // }
