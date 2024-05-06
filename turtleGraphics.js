function drawAttractiveDesign4() {
  var colors = ["red", "orange", "yellow", "green", "blue", "purple"];
  var pen = new Turtle(document.getElementById("turtle-canvas"));
  pen.speed(10);
  pen.bgColor("black");
  pen.penSize(2);

  var size = 20;

  for (var i = 0; i < 300; i++) {
    pen.color(colors[i % 6]);
    pen.forward(size);
    pen.left(59);
    pen.forward(size);
    pen.left(59);
    pen.forward(size);
    pen.left(59);
    pen.forward(size);
    pen.left(121);
    size += 2;
  }

  pen.hide();
}
