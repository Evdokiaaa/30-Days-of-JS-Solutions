class Statistics {
  constructor(arr) {
    this.arr = arr;
  }

  get length() {
    return this.arr.length;
  }

  count() {
    return this.length;
  }

  sum() {
    let sum = 0;
    this.arr.forEach((num) => {
      sum += num;
    });
    return sum;
  }

  mean() {
    let sum = 0;
    this.arr.forEach((num) => {
      sum += num;
    });
    return Math.ceil(sum / this.length);
  }

  min() {
    return Math.min(...this.arr);
  }

  max() {
    return Math.max(...this.arr);
  }

  range() {
    return this.max() - this.min();
  }

  median() {
    let sorted = this.arr.sort();
    let index = sorted.length / 2;
    index = Math.floor(index);
    return sorted[index];
  }

  mode() {
    let mode = {};
    let maxCount = 0;

    for (let i = 0; i < this.arr.length; i++) {
      let currentNumber = this.arr[i];
      if (mode[currentNumber]) {
        mode[currentNumber]++;
      } else {
        mode[currentNumber] = 1;
      }

      if (mode[currentNumber] > maxCount) {
        maxCount = mode[currentNumber];
      }
    }

    let modeValue = [];
    for (let number in mode) {
      if (mode[number] === maxCount) {
        modeValue.push(Number(number));
      }
    }

    return "Mode: ", "{" + `'mode': ${modeValue}, 'count': ${maxCount}` + "}";
  }

  variance() {
    let mean = this.mean();
    let squaredDifferences = this.arr.map((num) => {
      return Math.pow(num - mean, 2);
    });
    let varianceSum = squaredDifferences.reduce((sum, num) => sum + num, 0);
    return varianceSum / this.length;
  }

  standardDeviation() {
    return Math.sqrt(this.variance());
  }

  frequencyDistribution() {
    //WORKING..
  }

  describe() {
    return `
        Count: ${this.count()}\n
        Sum: ${this.sum()}\n 
        Min: ${this.min()}\n
        Max: ${this.max()}\n
        Range: ${this.range()}\n
        Mean: ${this.mean()}\n
        Median: ${this.median()}\n
        Mode: ${this.mode()}\n
        Variance: ${this.variance()}\n
        Standard Deviation: ${this.standardDeviation()}\n
        Frequency Distribution: ${this.frequencyDistribution()}`;
  }
}
let numbers = new Statistics([
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
]);
console.log(numbers.describe());
