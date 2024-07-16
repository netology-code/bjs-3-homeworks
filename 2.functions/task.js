function getArrayParams(...arr) {

  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let i of arr)  {
      if (i > max) {
      max = i;
      } else if (i < min) {
      min = i;
      }

    sum += i;
    avg = +(sum / arr.length).toFixed(2);
    Number(avg);
  }

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {

  let summElements = arr.reduce((a,b) => a + b, 0);

  return summElements;
}

function differenceMaxMinWorker(...arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);

  let difference = max - min;

  if (arr.length === 0) {
    return 0
  } else return difference;
}


function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i of arr){
    if (i % 2 === 0) {
      sumEvenElement += i;
    } else if (i % 2 === 1) {
      sumOddElement += i;
    };
  };

  let difference = sumEvenElement - sumOddElement;
  return difference;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i of arr){
    if (i % 2 === 0) {
        sumEvenElement += i;
          countEvenElement += 1;
    };
  };
  if (arr.length === 0) {
    return 0
  } else return sumEvenElement / countEvenElement;
}



function makeWork (arrOfArr, func) {

  let maxWorkerResult = -Infinity;
  let funcResult;

  for (let i of arrOfArr) {
    funcResult = func(...i);

    if (funcResult > maxWorkerResult) {
      maxWorkerResult = funcResult;
    }
  }
  return maxWorkerResult;
}
