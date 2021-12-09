// 課題: var と let const とのそれぞれの違いを調べて説明してください。

var a = 100;

if (true) {
  const a = 50;
  let b = 100;
  console.log(a);
  console.log(b);
}

console.log(a);
console.log(b);
