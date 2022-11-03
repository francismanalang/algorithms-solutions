// eslint-disable-next-line no-unused-vars
function shapeArea(n) {
  var area = 1;
  for (var i = 1; i < n; i++) {
    area += i * 4;
  }
  return area;
}
