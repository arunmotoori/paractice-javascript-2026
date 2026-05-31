import sayHi,{a,b,sayBye,ClassOne,ClassTwo} from "./mno.js";

console.log(a);
console.log(b);
sayHi();
sayBye();
const cOne = new ClassOne();
console.log(cOne.company);
cOne.methodOne();
const cTwo = new ClassTwo();
cTwo.methodTwo();

