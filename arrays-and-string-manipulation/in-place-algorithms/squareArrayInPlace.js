function squareArrayInPlace(intArray) {
  intArray.forEach((int, index) => {
    intArray[ index ] *= int
  })

  /**
   * NO need to return anything. We modified the array in-place.
   * 
   * Working in place is a good way to save time AND space.
   */
}