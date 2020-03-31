// 插入排序
const insertSort = (arr) => {
  for (let i = 1; i < arr.length - 1; i++) {
    const val = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (val < arr[j]) {
        const temp = arr[j];
        arr[j] = val;
        arr[j + 1] = temp;
      } else {
        break;
      }
    }
  }
  return arr;
};

insertSort([9, 4, 1, 3, 5, 2, 5, 6, 82, 34, 15]);
