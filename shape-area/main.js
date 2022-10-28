// eslint-disable-next-line no-unused-vars
function shapeArea(n) {
  var area = 1;
  for (var i = 1; i < n; i++) {
    area += 4 * i;
  }
  return area;
}
