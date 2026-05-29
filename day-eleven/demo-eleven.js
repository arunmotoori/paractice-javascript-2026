// const nums = [1, 2, 3];

// const newNums = [...nums];

// console.log(newNums);


// const browsers = ['chromium', 'firefox'];
// const allBrowsers = [...browsers,'webkit'];
// console.log(allBrowsers);

// const a = [1,5,3];
// const b = [2,8,4];
// const c = [...a,...b];
// console.log(c);

function add(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];

const result = add(...nums);
console.log(result);