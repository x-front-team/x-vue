# Props
name | type | default | explain
--- | --- | --- | ---
label | String | '' | 默认按钮显示的文字
disabled | Boolean | false | 是否禁用
closeOnLoseFocus | Boolean | true | 是否在失去焦点时关闭下拉框
btnType | String | '' | bootstrap button style
position | String | right | 'left' or 'right' 对齐方式
toggle | Boolean | true | 是否点击按钮进行切换,如果时否,点击只打开
showDropDown | Boolean | false | 双向属性,强制通过外部控制是否显示下拉框


# slot
### default
dropdown里面显示的内容

### btn
dropdown触发的按钮,默认是一个button
