'use strict';

const rectangle = {
  width: 10,
  height: 15,

  get perim() {
    return `${(this.width * 2) + (this.height * 2)} cм`;
  },

  get sqvere() {
    return `${this.width * this.height} см2`;
  },

  set newWidth(value) {
    this.width = value;
  },

  set newHeight(value) {
    this.height = value;
  },

};


rectangle.newWidth = 6;
rectangle.newHeight = 10;

console.log(rectangle);
