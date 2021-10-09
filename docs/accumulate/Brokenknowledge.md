#碎知识点

### 数字反转
```js
const reverseNumber = n =>
  parseFloat(`${n}`.split('').reverse().join('')) * Math.sign(n);

reverseNumber(123); // 321
```