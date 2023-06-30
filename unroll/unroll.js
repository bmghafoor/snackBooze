function unroll(squareArray) {
  let unrolledArray = [];
  const numOfArrays = squareArray.length;

  //   Edge case for single array
  if (numOfArrays === 1) {
    for (let i = 0; i < squareArray[0].length; i++) {
      console.log(squareArray[0][i]);
      unrolledArray.push(squareArray[0][i]);
    }
    return unrolledArray;
  }
  //   Edge case for double array
  if (numOfArrays === 2) {
    for (let i = 0; i < squareArray[0].length; i++) {
      unrolledArray.push(squareArray[0][i]);
    }

    squareArray[1] = squareArray[1].reverse();
    for (let i = 0; i < squareArray[1].length; i++) {
      unrolledArray.push(squareArray[1][i]);
    }

    return unrolledArray;
  }
  //   push the first array into the new array
  for (let i = 0; i < squareArray[0].length; i++) {
    unrolledArray.push(squareArray[0][i]);
  }
  //   2nd component of the new array going down once we reach the end of the first array
  for (let i = 1; i < numOfArrays; i++) {
    unrolledArray.push(squareArray[i][squareArray[i].length - 1]);
  }
  //   Add in the down and to the left
  let lastArray = squareArray[squareArray.length - 1];
  lastArray.pop();
  lastArray = lastArray.reverse();
  for (let i = 0; i < lastArray.length; i++) {
    unrolledArray.push(lastArray[i]);
  }
  //   Then back up
  for (let i = numOfArrays - 2; i > 0; i--) {
    unrolledArray.push(squareArray[i][0]);
  }

  //   Now that edges are taken care of we can remove those from original array

  squareArray.shift();
  squareArray.pop();

  //   Then we loop over the remaining arrays in such fashion that the first array stays the same, 2nd array is flipped to create a swirl pattern

  for (let i = 0; i < squareArray.length; i++) {
    squareArray[i].shift();
    squareArray[i].pop();
  }

  for (let i = 1; i < squareArray.length; i += 2) {
    squareArray[i] = squareArray[i].reverse();
  }

  let middleArray = squareArray.flat();

  for (let i = 0; i < middleArray.length; i++) {
    unrolledArray.push(middleArray[i]);
  }
  return unrolledArray;
}

module.exports = unroll;
