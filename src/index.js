/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let count = 0;
    let triangle = preferences;
    for ( let i = 0; i < triangle.length; i++) {
         let searchPosition = triangle[ i];
         let secondSearchPosition = triangle[searchPosition - 1];
         let thirdSearchPosition = triangle[secondSearchPosition -1];
         if ( thirdSearchPosition === i + 1){
             count ++;
         }
    }
    return Math.floor(count/3);
};
