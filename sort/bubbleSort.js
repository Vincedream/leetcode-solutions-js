// 冒泡排序

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let isSort = true; 
    for (let j = 0; j < arr.length - i - 1; j++) {
      const temp = arr[j + 1];
      if (arr[j] > temp) {
        arr[j + 1] = arr[j];
        arr[j] = temp;
        isSort = false;
      }
    }
    // 这里主要标记一下，arr 已经是排序了，那么就直接返回，这是冒泡排序的一个优化点。
    if (isSort) {
      return arr;
    }
  }
  return arr;
};

// bubbleSort([12,4,45,23,63,456,234,6,13,346,123,35,23,53]);
// bubbleSort([1,2,3,4,5,6,7]);