
interface NodeInterface<T> {
    value: T;
    prox: NodeInterface<T> | null;
}

class Node<T> implements NodeInterface<T> {
    value: T;
    prox: Node<T> | null = null;
    constructor(value: T) {
      this.value = value;
    }
}

interface LinkedListInterface<T> {
    push: (item: T) => void;
    pop: () => void;
    insert: (item: T, index: number) => void;
    remove: (index: number) => void;
    isEmpty: () => boolean;
    size: () => number;
    showList: () => void;
}

class LinkedList<T> implements LinkedListInterface<T> {
    start: any = null;
  
    private getLast(): Node<T> | null {
      if (this.start !== null) {
        let nodeAux = this.start;
        let end = false;
        while(!end) {
          if (nodeAux.prox !== null) {
            nodeAux = nodeAux.prox;
          } else {
            end = true;
          }
        }
  
        return nodeAux;
      }
      else return this.start;
    };
  
    push(item: T) {
      const node = new Node(item);
      const lastNode = this.getLast();
  
      if(lastNode === null) this.start = node;
      else lastNode.prox = node;
    };
  
    isEmpty() { return this.start === null; }
    
    pop() {
      if (this.isEmpty()) throw new Error('Impossible remove: empty list!');
  
      let node = this.start;
      let aux: Node<T> | null = {} as Node<T>;
      let end = false;
      while(!end) {
        if (node?.prox !== null) {
          aux = node;
          node = node?.prox;
        } else {
          node = null;
          aux!.prox = null;
          end = true;
        }
      }
    };
  
  
    size() {
      if (this.isEmpty()) return 0;
      else {
        let nodeAux = this.start;
        let end = false;
        let cont = 0;
        while(!end) {
          if (nodeAux !== null) {
            cont += 1;
            nodeAux = nodeAux.prox;
          } else {
            end = true;
          }
        }
  
        return cont;
      }
    };
  
    showList() {
      if (this.isEmpty()) {
        console.log('The list is empty!');
      } else {
        let nodeAux = this.start;
        let end = false;
        while(!end) {
          if (nodeAux.prox !== null) {
            console.log(`${nodeAux.value} -> `);
            nodeAux = nodeAux.prox;
          } else {
            console.log(`${nodeAux.value} -> null\n`);
            end = true;
          }
        }
      }
    };
  
    insert(item: T, index: number) {
      if (this.isEmpty()) throw new Error('Impossible insert: empty list!');
  
      let node = this.start;
      let aux: Node<T> | null = null;
      let end = false;
      let cont = 0;
      while(!end) {
        if (node !== null) {
          if (index === cont) {
            end = true;
            break;
          }
          else {
            aux = node;
            node = node.prox;
            cont += 1;
          }
        } else {       
          if (cont === index) {
            this.push(item);
            end = true;
            break;
          }
          else throw new Error('Impossible insert: list not have this index!');
        }
      }
  
      const newNode = new Node(item);
      aux!.prox = newNode;
      newNode.prox = node;
    }
  
    remove(index: number) {
      if (this.isEmpty()) throw new Error('Impossible remvoe: empty list!');
  
      let node = this.start;
      let aux: Node<T> | null = null;
      let end = false;
      let cont = 0;
      while(!end) {
        if (node !== null) {
          if (index === cont) { end = true; break; }
          else {
            aux = node;
            node = node.prox;
            cont += 1;
          }
        } else {
          throw new Error('Impossible insert: list not have this index!');
        }
      }    
  
      if (aux !== null) {
        aux.prox = node.prox;
      }
      if (node === this.start) {
        this.start = node.prox;
        node = null;
      }
    }
  }
  
  export { LinkedList };