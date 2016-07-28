# USAGE
```html
<input type="text" v-date-time-picker format="yyyy-MM-dd hh:mm:ss" :highlight-today="true">
```

# params
name | type | default | explain
--- | --- | --- | ---
format | String | 'yyyy-MM-dd' | 格式化时间,同时根据是否有`hh:mm:ss`来判断是否显示时间选择器
highlightToday | Boolean | true | 是否高亮今天
closeOnSelected | Boolean | true | 选择确定之后是否关闭选择器(未实现)
maxDate | anything | '' | 可以被转成毫秒数的值,控制最大选择日期
minDate | anything | '' | 可以被转成毫秒数的值,控制最小选择日期

# range
```html
<input type="text"
       v-date-time-picker:range.start="name"
       format="yyyy-MM-dd"
       :max-date="maxDate"
       @click="toggle">

<input type="text"
       v-date-time-picker:range.end="name"
       format="yyyy-MM-dd"
       :max-date="maxDate"
       @click="toggle">
```
通过:range.start[end]来控制区间,同一个name的start和end处于一个区间
