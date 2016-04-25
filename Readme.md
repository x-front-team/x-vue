# Intro
一系列常用Vue组件集合

* button
* list
* panel
* tabs
* upload
* pagination
* tool-bar
* drop-down
* drop-down-menu
* date-picker
* time-picker
* date-time-picker

以及一个基础样式库,样式库具有可扩展性,可以在不修改组件的基础上进行样式定制

# 开发进度

进度 | 组件名 | 领取人
--- | --- | ---
[x] | button | 楼哲明
[x] | card(panel) | 楼哲明
[x] | dropdown | 楼哲明
[ ] | pagination | 飞哥
[ ] | list | 
[x] | tabs | 楼哲明
[ ] | upload |
[ ] | toolbar |
[ ] | date-picker |
[ ] | time-picker |
[ ] | date-time-picker |

# Development
```
npm install
npm run dev
```

# 文档生成
在example根目录下加入某个组件为名字的`.doc`文件,如`button.doc`,然后创建一个button文件夹,
在该文件夹中随意创建多个demo,以`.vue`为后缀,然后在`router.js`中引用这个`.doc`文件

### 已知issue
1. 启动webpack-dev-server时会build两次
2. 在example/button(demo文件夹名字)中创建和删除文件需要重启webpack-dev-server才能载入(addDependency)

**注意,开发请注意代码规范,规范如下:**

1. 文件名使用'-'作为分隔,不允许驼峰或者下划线
2. 变量名使用驼峰命名
3. css class使用'-'命名,不允许驼峰

提交代码前必须跑通过eslint检查以及单元测试
