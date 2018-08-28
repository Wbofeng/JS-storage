// 非对象数组排序
function sort(arr) {
  if (arr.length <= 1) {
    return arr
  }
  let left = [], right = [], current = arr.splice(0, 1)
  for(let i = 0; i < arr.length; i += 1) {
    if (arr[i] < current) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return sort(left).concat(current, sort(right))
}
