module.exports = class Queue {
  constructor() {
    this._storage = [];
  }

  enqueue(value) {
    this._storage.push(value);
  }

  dequeue() {
    return this._storage.shift();
  }

  size() {
    return this._storage.length;
  }

  peek() {
    return this._storage[0];
  }

  isEmpty() {
    return this._storage.length === 0;
  }
}
