module.exports = class Stack {
  constructor() {
    this._storage = [];
  }

  push(value) {
    this._storage.push(value);
  }

  pop() {
    return this._storage.pop();
  }

  size() {
    return this._storage.length;
  }

  duplicate() {
    const last = this._storage[this.size() - 1];
    this.push(last);
  }

  peek() {
    return this._storage[this.size() - 1];
  }

  swap() {
    if (this._storage.length >= 2) {
      let a = this._storage.pop();
      let b = this._storage.pop();

      this._storage.push(a);
      this._storage.push(b);
    }
  }

  rotate() {

  }

  isEmpty() {
    return this._storage.length === 0;
  }

}
