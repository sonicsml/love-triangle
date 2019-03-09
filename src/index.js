/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var result = 0;
  for (var n = 0; n < preferences.length; n++) {
    var firstSpichonee = preferences[n] - 1; 
    var secondSpichonee = preferences[firstSpichonee] - 1;
    var thirdSpichonee = preferences[secondSpichonee] - 1;
    if (thirdSpichonee == n) {
      result++;
    }
  }
  return Math.floor(result / 3);
};
