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
