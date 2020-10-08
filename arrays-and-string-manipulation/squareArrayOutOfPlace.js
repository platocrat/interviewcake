function squareArrayOutOfPlace(intArray) {
  // We allocate a new array that we'll fill with the new squared values.
  const squaredArray = []

  intArray.forEach((int, index) => {
    squaredArray[ index ] = Math.pow(int, 2)
  })

  return squaredArray
}