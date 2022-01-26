# 全屏下面组件不显示

##  slelct组件，不显示下拉框
 在标签中添加属性`:popper-append-to-body="false"`.默认将弹出框插入至 body 元素。当设置了某个元素全屏时，会遮挡住原来的select下拉数据。
```js

<template>
  <el-select v-model="value" placeholder="请选择" :popper-append-to-body="false">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    }
  }
</script>
```
## elementui局部全屏无法显示tooltip，popover等基于vue-popper类开发的组件
首页在 `el-tooltip`标签上面添加一个属性`:append-to-body="false'`,属性是值设置为false,标签添加`ref`,然后通过$refs把标签添加在想要显示在的文职上面就行。
```js
<el-tooltip class="item" :append-to-body="false'  ref="mypop" effect="dark" content="Top Left 提示文字" placement="top-start" />

this.$ref.mypop.forEach((item=>{
  this.$refs.here.appendChild(item,popperVM.$el)
}))

```

<!-- -->