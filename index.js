var a = 10
var b = 15
function add(a,b){
  a += b

  add(a,b) === add(a+b);
}

console.log(add)
