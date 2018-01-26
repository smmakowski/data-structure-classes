const Stack = require('../src/Stack.js');
const Queue = require('../src/Queue.js');
const LinkedList = require('../src/LinkedList.js');
const Tree = require('../src/Tree');
const Graph = require('../src/Graph.js');
const BinarySearchTree = require('../src/BinarySearchTree.js');
const chai = require('chai');
const expect = chai.expect;

describe('data structures classes', () => {
  describe('Stack Class Instance', () => {
    let stack = new Stack();
    it('should have "private" properties: _storage', () => {
      expect(stack).to.have.keys('_storage');
      expect(stack._storage).to.be.an('array');
    });
    it('should be possible to add and remove items to/from the stack and get size using methods: push(), pop(), and size()', () => {
      const emptyPop = stack.pop();
      expect(emptyPop).to.equal(undefined);

      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.size()).to.equal(3);

      const poppedValue = stack.pop();
      expect(poppedValue).to.equal(3);
      expect(stack.size()).to.equal(2);
    });

    it('should be possible to duplicate the top value on the stack using .duplicate()', () => {
      stack.push(3);
      stack.duplicate();
      expect(stack.size()).to.equal(4);
      expect(stack._storage[3]).to.equal(3);
      expect(stack._storage[2]).to.equal(3);
    });
    it('should be possible to view the value at the top of the stack w/ .peek()', () => {
      stack.push('I\'m the top!');
      expect(stack.peek()).to.equal('I\'m the top!');
    });
    it('should be possible to swap the top to items in the stack using .swap()', () => {
      stack.push('I wish I was the top...');
      stack.swap();
      expect(stack.peek()).to.equal('I\'m the top!');
      expect(stack._storage[stack.size() - 2]).to.equal('I wish I was the top...');
    });
    xit('should be possible to search and get the 1-based index of item if in stack, or -1 if not', () => {

    });
    xit('should be possible to rotate the stack ', () => {

    });
    it('should be possible to find out if stack is empty using .isEmpty()', () => {
      expect(stack.isEmpty()).to.equal(false);
      while (stack.size() > 0) {
        let popped = stack.pop();
      }
      expect(stack.isEmpty()).to.equal(true);
    });
  });
  describe('Queue Class', () => {
    let queue = new Queue();
    it('should have a "private" _storage property', () => {
      expect(queue).to.have.keys('_storage');
    });
    it('should be possible to get queue size, and add/remove items from the queue', () => {
      queue.enqueue('Hello');
      queue.enqueue('There');
      queue.enqueue('Whats');
      queue.enqueue('Up');
      expect(queue.size()).to.equal(4);
      const dequeued = queue.dequeue();
      expect(dequeued).to.equal('Hello');
      expect(queue.size()).to.equal(3);
    });
  });
  xdescribe('LinkedList Class', () => {

  });
  describe('Tree Class', () => {
    let root = new Tree();
    it('should be possible to add children to a tree instance using a value or another tree instance', () => {

    });
    it('should be possible to search for a value, and have boolean returned', () => {
      
    });
  });
  xdescribe('Graph Class', () => {

  });
  xdescribe('BinarySearchTree Class', () => {

  });


});
