// function say(something) {
//   console.log(something);
// }

function exec (func, args) {
  func(args);
}

// exec(say, 'Hi, there');

exec((something) => {
  console.log(something)
}, 'Hi, there');

window.setTimeout((something) => {
  console.log(something)
},3000, 'Hi, there');
