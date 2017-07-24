# egg + vue

![](http://og40gjbnu.bkt.clouddn.com/%E9%A1%B9%E7%9B%AE%E6%A1%86%E6%9E%B6%E5%9B%BE1.png)

# E-R图

![](http://7xnggx.com1.z0.glb.clouddn.com/e-r%E5%9B%BE1.png)

# changelog

2017-07-24 01:04am
新增积分字典表以及前后台代码。

2017-07-21 03:42am
今天修改了表结构，增加了三张表——部门字典表，积分表，会议记录表，对前台api对response如果500错误拦截了做统一的showmsg处理，后台的统一报错处理还可以继续往下研究；servive层加了事务处理，对于插入一个新成员后在score表里自动插入默认20分的记录（和触发器的优劣对比？）。

2017-07-18 00:22am

[mac为docker搭建一个registry](http://www.dailibu.com/gis/2016056987/WoMenZaiGuoNeiXiaZaidockerDeJing)

2017-07-17 00:28am

1.关于登录状态持久化解决，登录之后存一个token在本地cookie,路由跳转前判断一下本地cookie有没有token，没有就跳转到登录页面。
2.token有效期应当是在会话关闭后就销毁，同时后台session设置一下maxage,超时了就要重新登录。

# TODOLIST
- [x] 会话刷新保持登录状态，走cookie
- [x] 动态挂在左侧功能树
- [ ] 成员分数修改
- [ ] 会议记录页面
- [x] 积分字典表页面
- [x] 动态加载所有成员个人demo页面
- [ ] docker使用，占坑
- [ ] vue-admin数据统计方面可以用下。
