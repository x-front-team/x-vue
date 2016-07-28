# v-0.1.0
1. 发布到github开源
2. 完善webpack配置,不再重复配置
3. 增加deploy_doc脚本,自动部署文档到github/gh-pages
4. 去掉无用的组件和文档页面

# v-0.0.61
1. 增加drop-down的onLoseFocus方法props

# v-0.0.60
1. 去掉时间控件中的repeat方法(导致ie不兼容)
2. 修改生成日期列表的最大最小时间对比方法,旧方法设置时间会出现临界值问题

# v-0.0.59
1. 完善文档机制,提供一个页面同名.md文件,自动编译显示在页面底部
2. 修改drop向右靠齐的机制,转为document.body.clientWidth - element.rect.right

# v-0.0.56 (2016-7-12)
1. 本地打包发布在package-min的时候会出现模版字符串style里面的变量消失,结果是依赖包太老的问题

# v-0.0.10 (2016-5-11)
1. fix dropdown btn slot not toggle dropdown
2. change btn slot to `span` not `a`
