# 自定义组件

## 三角形闪烁
```js
  <div class="shape">
      <svg height="60" width="128">
        <defs>
          <filter id="innershadow" x0="-50%" y0="-50%" width="200%" height="200%">
            <feComponentTransfer in="SourceAlpha">
              <feFuncA type="table" tableValues="1 0" />
            </feComponentTransfer>
            <feGaussianBlur stdDeviation="4" />
            <feOffset dx="0" dy="0" result="offsetblur" />
            <feFlood floodColor="#000" floodOpacity="0.58" return="color" />
            <feComposite in2="offsetblur" operator="in" />
            <feComposite in2="SourceAlpha" operator="in" />
            <feMerge>
              <feMergeNode in="SourceGraphic" />
              <feMergeNode />
            </feMerge>
          </filter>
        </defs>
        <path
          :class="[isred ? 'strokes' : '']"
          d="M126 13 L65 54 L4 13 L126 13 Z"
          fill="#141b47"
          filter="url(#innershadow)"
        />
      </svg>
    </div>

   <style lang="scss" scoped>
    .shape {
    svg {
      position: absolute;
      left: 35%;
      margin-top: -4%;
    }
    position: relative;
    path {
      opacity: 0;
    }
    path.strokes {
      stroke: #141b47;
      opacity: 1;
      -webkit-animation: twinklings 3s infinite ease-in-out;
    }

    @-webkit-keyframes twinklings {
      0% {
        stroke: yellow;
      }
      100% {
        stroke: red;
      }
    }
    @keyframes twinklings {
      0% {
        stroke: yellow;
      }
      100% {
        stroke: red;
      }
    }
  }
  </style>
```
效果：<br>
![](../../.vuepress/public/images/accumulate/accumulate1.gif)