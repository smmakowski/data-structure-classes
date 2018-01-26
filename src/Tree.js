module.exports = class Tree {
  constructor(value) {
    this.parent = null;
    this.value = value;
    this.children = [];
  }

  addChild(addition) {
    if (addition instanceof Tree) {
    } else {
      addition = new Tree(addition);
    }
    addition.parent = this;
    this.children.push(addition);
  }

  contains(target) {
    let targetIsFound = false;

    function _checkNode(node, target) {
      if (node.value === target) {
        targetIsFound = true;
      }
      if (node.children.length) {
        node.children.forEach((child) => {
          _checkNode(child, target);
        });
      }
    }
    _checkNode(this, target);
    return targetIsFound;
  }

  removeFromParent() {

  }
}
