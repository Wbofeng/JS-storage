// 对于对象数组的排序
// 参数分别为 目标数组，排序所依据的属性，排序方式(Ascending or Descending) 默认为 Ascending

function sortArrayOfObjects(arr, key, sort = 'Ascending') {
  if (arr.length <= 1) {
    return arr
  }
  if (typeof key === 'String') {
    return console.error('The type of key should be String');
  }
  if ((sort !== 'Ascending' || sort !== 'Descending') && !sort) {
    return console.error('Please choose the correct sorting method')
  }
  let left = [], right = [], current = arr.splice(0, 1)
  if (sort === 'Ascending') {
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i][key] < current[0][key]) {
        left.push(arr[i])
      } else {
        right.push(arr[i])
      }
    }
    return sortArrayOfObjects(left, key, sort).concat(current, sortArrayOfObjects(right, key, sort))
  } else {
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i][key] > current[0][key]) {
        left.push(arr[i])
      } else {
        right.push(arr[i])
      }
    }
    return sortArrayOfObjects(left, key, sort).concat(current, sortArrayOfObjects(right, key, sort))
  }
}
