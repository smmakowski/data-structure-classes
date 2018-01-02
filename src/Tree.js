module.exports = class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(addition) {
    if (addition instanceof Tree) {
      // do nothing since already instance
    } else {
      addition = new Tree(addition);
    }
    this.children.push(addition);
  }

  contains(target) {
    // let contains = false;
  }

  removeFromParent() {

  }
}
