# 課題
`function` と `arrow function` それぞれにおける `this` の意味がどのように異なるかを調べて説明してください。

# 解答

以下同じ操作をする関数をアロー関数と通常の関数でそれぞれ書いたもの。

アロー関数の場合、`this`は元となるオブジェクトを表すため想定した通りの動きを示す。

```jsx
const o = {
  name: 'alto',
  greetBackwards: function () {
    const getReverseName = () => {
      console.log(this); // このthisはオブジェクトoを表す { name: 'alto', greetBackwards: [Function: greetBackwards] }
      let nameBackwards = '';
      for (let i = this.name.length - 1; i >= 0; i--) {
        nameBackwards += this.name[i]; // アロー関数の中でthisがoを表している(参照している)のでthis.nameがちゃんと想定したものを表せる
      }
      return nameBackwards;
    };
    return `${getReverseName()} si eman ym ,olleH`;
  },
};

console.log(o.greetBackwards()); // otla si eman ym ,olleH
```

functionで書いたものだと、thisはグローバルオブジェクトを表すためエラーになる。

```jsx
const o = {
  name: 'alto',
  greetBackwards: function () {
    const getReverseName = function () {
      console.log(this); // このthisはグローバルオブジェクトを表す
      let nameBackwards = '';
      for (let i = this.name.length - 1; i >= 0; i--) {
        // this.nameはグローバルオブジェクトthisでは定義されていないのでエラーになってしまう。
        nameBackwards += this.name[i];
      }
      return nameBackwards;
    };
    return `${getReverseName()} si eman ym ,olleH`;
  },
};

console.log(o.greetBackwards());
```
