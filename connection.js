
class Connection {
  constructor(point1, body2) {
    var options = {
      pointA: point1,
      bodyB: body2,
      length: 300,
      stiffness: 0.01,
    };
    //console.log(options);
    this.rope = Constraint.create(options);
    World.add(world, this.rope);
  }

  display() {
    var pointA = this.rope.pointA;
    var pointB = this.rope.bodyB.position;

    strokeWeight(2);

    var Anchor1X = pointA.x;
    var Anchor1Y = pointA.y;

    var Anchor2X = pointB.x;
    var Anchor2Y = pointB.y;

    stroke("white");
    line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y);
  }
}
