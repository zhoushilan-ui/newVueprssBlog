#碎知识点

### 数字反转
```js
const reverseNumber = n =>
  parseFloat(`${n}`.split('').reverse().join('')) * Math.sign(n);

reverseNumber(123); // 321
```

### 判断对象的属性是否空
```js
    var queryParams= {
        pageNum: 1,
        pageSize: 15,
        starttime: null,
        endtime: null,
        aid: null,
        cid: null,
        startgd: "", 
        endgd: "" 
      }
     for (var key in this.queryParams) {
        if (!this.queryParams[key]) {
          this.$message.error("请同时选择监测点、设备编号、液位高度、采集时间");
          return;
        }
      }
```