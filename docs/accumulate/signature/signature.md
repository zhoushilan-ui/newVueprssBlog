---
title: 电子签名
date: 2021-10-06 11:43:26
permalink: /pages/04bef1/
categories:
  - accumulate
  - signature
tags:
  - 
---
# 电子签名
## html
####  在使用电子签名时，先下载[jSignature.min.js](https://codechina.csdn.net/mirrors/brinley/jSignature/-/blob/master/libs/jSignature.min.js)。
```js
  <body>
    <script src="https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>
    <script src="./js/jSignature.min.js"></script>
    <div>
      <li style="margin-top: 20px">
        <label style="display: inline-block; margin-bottom: 5px">巡检人手写签名：</label>
        <div id="canvas"></div>
        <button id="canvasBtn" type="button" onclick="savePic()">完成</button>
        <button type="button" onclick="resetCanvas()">清除</button>
        <button type="button" id="save" onclick="save()">保存</button>
      </li>
    </div>
    <script>
      $(function () {
        //画布初始化 transparent去除初始化的下划线
        //lineWidth 设置画笔粗细为2
        $("#canvas").jSignature({
          width: "100%",
          height: 300,
          "decor-color": "transparent",
          lineWidth: "2",
        });
      });
      //输出签名图片
      function savePic() {
        var $sigdiv = $("#canvas");
        var length = $sigdiv.jSignature("getData", "native").length;
        //判断是否有签名
        if (length == 0) {
          alert("请先签名再提交");
          return;
        }
        //采用图片形式
        var datapair = $sigdiv.jSignature("getData");
        //若采用svg使用
        $("#canvas").html("<img src='" + datapair + "'>");
        $("#canvasBtn").text("重写");
        $("#canvasBtn").attr("onclick", "getCanvas()");
      }
      function getCanvas() {
        $("#canvas").html("");
        $("#canvas").jSignature({
          width: "100%",
          height: 300,
          "decor-color": "transparent",
          lineWidth: "2",
        });
        $("#canvasBtn").text("完成");
        $("#canvasBtn").attr("onclick", "savePic()");
      }
      function resetCanvas() {
        var $sigdiv = $("#canvas");
        $sigdiv.jSignature("reset");
      }

      //提交
      function save() {
        //获取签名生成的图片 默认是png的
        var datapair = $("#canvas").jSignature("getData", "image");
        var i = new Image();
        i.src = "data:" + datapair[0] + "," + datapair[1];
        i.image = datapair[1];
        console.log(i.image);
      }
    </script>
  </body>
```
#### [案例](https://codepen.io/zhoushilan-ui/pen/mdwNbQO?editors=1111)