# 課題
`var` と `let` `const` とのそれぞれの違いを調べて説明してください。

# 回答
## 1.変数の再宣言、再代入

|  | 再宣言 | 再代入 |
| --- | --- | --- |
| var | ○ | ○ |
| let | × | ○ |
| const | × | × |

varは再宣言が可能。

```jsx
> var foo = 'hoge';
undefined
> var foo = 'huga';
undefined
> foo
'huga'
```

letとconstは再宣言不可。

```jsx
> let bar = 'hoge';
undefined
> let bar = 'huga';
Uncaught SyntaxError: Identifier 'bar' has already been declared
> const baz = 'hoge';
undefined
> const baz = 'huga';
Uncaught SyntaxError: Identifier 'baz' has already been declared
> bar
'hoge'
> baz
'hoge'
```

varとletは再代入が可能。

```jsx
> var foo = 'hoge';
undefined
> foo = 'huga';
'huga'
> let bar = 'hoge';
undefined
> bar = 'huga';
'huga'
```

constは再代入不可。

```jsx
> const baz = 'hoge';
undefined
> baz ='huga';
Uncaught TypeError: Assignment to constant variable.
```

なので基本的に`var`→`let`→`const`の順で変数の安全性が上がる。

## ホイスティング

`var`だと後から宣言してもエラーがでない。これを変数の巻き上げという。

```jsx
a = 100;
console.log(100);

var a; // エラーがでない
let a; // SyntaxError: Identifier 'a' has already been declared
```

## スコープ

`var`ではブロックスコープが適用されず、ブロック内で宣言した変数をブロック外で参照できてしまう。

```jsx
var a = 100;

if (true) {
  var a = 50;
  var b = 100;
  console.log(a); // 50
}

console.log(a); // 50 *最初に宣言した100ではない
console.log(b); // 100
```

`let`と`const`はブロックスコープが適用される。

```jsx
var a = 100;

if (true) {
  const a = 50;
  let b = 100;
  console.log(a); // 50
  console.log(b); //100
}

console.log(a); // 100
console.log(b); // ReferenceError: b is not defined
```
