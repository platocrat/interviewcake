function getIthItemInLinkedList(head, i) {
  if (i < 0) {
    throw new Error('I cannot be negative: ' + i)
  }

  var currentPosition = 0
  var currentNode = head

  while (currentNode) {
    if (currentPosition === i) {
      // found ith item!
      return currentNode
    }

    // move on to next node
    currentNode = currentNode.next
    currentPosition++
  }

  throw new Error('List has fewer than i + 1 (' + (i + 1) + ') nodes')
}