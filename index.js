function findMinAndRemove(arr) {
  // set minimum value/index to first element/index of array
  let minValue = arr[0]
  let minIndex = 0
  // loop through array until minimum value/index is found
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i]
      minIndex = i
    }
  }
  return arr.splice(minIndex, 1).pop() // remove minimum value from array
}

function selectionSort(arr) {
  let min
  let newArr = []
  // insert minimum value into sorted array until unsorted array is empty
  while (arr.length > 0) {
    min = findMinAndRemove(arr)
    newArr.push(min)
  }
  return newArr
}
