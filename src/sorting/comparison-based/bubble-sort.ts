(() => {
  //algorithm
  const bubbleSort = ({
    arr,
    numberElementSort,
  }: {
    arr: number[];
    numberElementSort: number;
  }) => {
    for (let i = 0; i < numberElementSort - 1; i++) {
      let swap: boolean = false;
      for (let j = 0; j < numberElementSort - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;

          swap = true;
        }
      }

      if (!swap) {
        break;
      }
    }
  };

  //data

  const arr = [64, 34, 25, 12, 22, 11, 90];
  const n = arr.length;
  //operation
  console.log('Default Array Bubble Sort:', arr);
  bubbleSort({ arr, numberElementSort: n });
  console.log('Sorted Arrays Bubble Sort: ', arr);
})();
