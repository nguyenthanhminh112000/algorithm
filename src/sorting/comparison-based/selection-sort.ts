//algorithm

const swap = ({ arr, xP, yP }: { arr: number[]; xP: number; yP: number }) => {
  const temp = arr[xP];

  arr[xP] = arr[yP];

  arr[yP] = temp;
};

const selectionSort = ({
  arr,
  numberElementSort,
}: {
  arr: number[];
  numberElementSort: number;
}) => {
  for (let i = 0; i < numberElementSort - 1; i++) {
    let minElementI = i;

    for (let j = i + 1; j < numberElementSort; j++) {
      if (arr[minElementI] > arr[j]) minElementI = j;
    }

    swap({ arr, xP: i, yP: minElementI });
  }
};

//data
const arr = [64, 25, 12, 22, 11];
const n = 5;
//operation
console.log('arr', arr);
selectionSort({ arr, numberElementSort: n });
console.log('sorted', arr);
