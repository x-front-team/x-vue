# Props
name | type | default | explain
--- | --- | --- | ---
btnType | Boolean | primary | bootstrap button types
label | String | '' | text show on the default button
disabled | Boolean | false | if dropdown is disabled, onTrigger and onEscape will not triggered
onTrigger | Function | `() => {}` | button clicked handler
onEscape | Function | `() => {}`| when click outside and is showing

# vue-popper
这是一个mixin,用来处理popover类型的组件的弹出定位问题,基于popper.js来进行开发,使用方法:
```javascript
import { popper } from 'x-vue'
```

## vue-popper mixin props
name | type | default | explain
--- | --- | --- | ---
placement | String | 'bottom-start' | [top, right, bottom, left]-[start, end, '']
boundariesPadding | Number | 5 | dropdown相对定位的间距
reference | Node | null | 指定定位节点,指定之后dropdown会出现在改节点位置
popper | Node | null | 指定的dropdown的内容节点
show | Boolean | false | 是否显示dropdown
appendToBody | Boolean | true | 是否把dropdown的内容节点挂载到body下
options | Object | {} | dropdown功能通过popper.js实现,可以通过这个prop自定义参数
