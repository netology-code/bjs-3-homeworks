function getArrayParams(...arr) {

  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let number of arr)  {
      if (number > max) {
      max = number;
      } else if (number < min) {
      min = number;
      }

    sum += number;
  };

  avg = +(sum / arr.length).toFixed(2);
    +avg;

  return { min: min, max: max, avg: avg };
};

function summElementsWorker(...arr) {

  return summElements = arr.reduce((a,b) => a + b, 0);

};

function differenceMaxMinWorker(...arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);

  let difference = max - min;

  if (arr.length === 0) {
    return 0
  } else return difference;
};


function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let item of arr){
    if (item % 2 === 0) {
      sumEvenElement += item;
    } else if (item % 2 === 1) {
      sumOddElement += item;
    };
  };

  return difference = sumEvenElement - sumOddElement;
};

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let item of arr){
    if (item % 2 === 0) {
        sumEvenElement += item;
          countEvenElement += 1;
    };
  };
  if (arr.length === 0) {
    return 0
  } else return sumEvenElement / countEvenElement;
};



function makeWork (arrOfArr, func) {

  let maxWorkerResult = -Infinity;
  
  for (let item of arrOfArr) {
    let funcResult = func(...item);

    if (funcResult > maxWorkerResult) {
      maxWorkerResult = funcResult;
    }
  }
  return maxWorkerResult;
};
