# Intro
Vue + Bootstrap4 components

For detail, [view doc](https://x-front-team.github.io/x-vue/)

# Install
```
npm i x-vue
```

# Usage
```
import vue from 'vue'
import XVue from 'x-vue'
vue.use(XVue)

// don't forget to require the css
require('x-vue/dist/x-vue.min.css')
```

# Development
clone the project
```
npm install
npm start
```

# 文档生成
在example根目录下加入某个组件为名字的`.doc`文件,如`button.doc`,然后创建一个button文件夹,
在该文件夹中随意创建多个demo,以`.vue`为后缀,然后在`router.js`中引用这个`.doc`文件
