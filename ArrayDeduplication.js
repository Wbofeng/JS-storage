// 数组去重

// 不包括对象
function Deduplication(arr) {
  return [...new Set(arr)]
}
// 包括对象
function Deduplication(arr) {
  let temp = [...new Set(arr)]
  
}

const arr = [1, 4, 1, '3', '3', { title: '1'}, { title: '1'}, [2, 2], [2, 2]]
console.log(Deduplication(arr))