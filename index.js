//Shape Constructor
function Shape(sides, x, y) {
  this.sides = sides;
  this.x = x;
  this.y = y;
}

// Rectangle constructor
function Rectangle(sides, width, height) {
  this.sides = sides;
  this.width = width;
  this.height = height;
}
Rectangle.prototype.area = function() {
  return this.width * this.height;
}
Rectangle.prototype.perimeter = function () {
  return (this.width + this.height) * 2;
}
 
// Square constructor
function Square(sides, length) {
  Rectangle.call(this, sides, length, length);
}
 
var rect = new Rectangle(4, 3, 5);
var square = new Square(4, 2);
 
rect.area();
square.area();
 
Rectangle.prototype.internalAngles = 90;
rect.internalAngles;
square.internalAngles;