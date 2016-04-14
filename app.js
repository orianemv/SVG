var s = Snap("#svg");

var bigCircle = s.circle(150, 150, 100);

bigCircle.attr({
	fill: "#bada55",
	stroke: "#000",
	strokeWidth: 5
});

var smallCircle = s.circle(100,150, 70);
var discs = s.group(smallCircle, s.circle(200, 150,70));
discs.attr({
	fill: "#fff"
});