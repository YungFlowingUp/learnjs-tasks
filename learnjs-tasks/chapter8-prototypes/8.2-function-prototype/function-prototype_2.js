function Obj(name) {
    this.name = name;
}
  
let obj = new Obj('some');
let obj2 = new obj.constructor('some2');
  
console.log(obj2.name);

function IncObj(name) {
    this.name = name;
}
IncObj.prototype = {};

let incObj = new IncObj('some');
let incObj2 = new incObj.constructor('some2');

console.log(incObj2.name);