const marks = [
  [85, 90, 78],
  [88, 76, 95],
  [92, 81, 89]
];

// console.log(marks[0][0]); // 85
// console.log(marks[0][1]); // 90
// console.log(marks[0][2]); // 78

// console.log(marks[1][0]); // 88
// console.log(marks[1][1]); // 76
// console.log(marks[1][2]); // 95

// console.log(marks[2][0]); // 92
// console.log(marks[2][1]); // 81
// console.log(marks[2][2]); // 89

// for (let i = 0; i < marks.length; i++) {
  
//   for (let j = 0; j < marks[i].length; j++) {
    
//     console.log(marks[i][j]);
    
//   }
// }

// for (let i = 0; i < marks.length; i++) {

//   for (let j = 0; j < marks[i].length; j++) {
//     process.stdout.write(marks[i][j] + "\t");
//   }

//   console.log(); // Move to next line
// }

for (let r of marks) {

  for (let e of r) {
    process.stdout.write(e + "\t");
  }

  console.log(); // Next line after each row
}

