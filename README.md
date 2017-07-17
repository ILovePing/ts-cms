# egg + vue

![](http://og40gjbnu.bkt.clouddn.com/%E9%A1%B9%E7%9B%AE%E6%A1%86%E6%9E%B6%E5%9B%BE1.png)
# changelog
2017-07-18 00:22am

[mac为docker搭建一个registry](http://www.dailibu.com/gis/2016056987/WoMenZaiGuoNeiXiaZaidockerDeJing)

2017-07-17 00:28am

[参考文章花大源码](https://github.com/PanJiaChen/vue-element-admin/blob/master/src/store/modules/user.js)
[参考花大文章vue撸后台平台](https://segmentfault.com/a/1190000009506097#articleHeader8)
关于登录状态持久化解决，登录之后存一个token在本地cookie，
路由跳转前判断一下本地cookie有没有token，没有就跳转到登录页面。
token有效期应当是在会话关闭后就销毁，同时后台redis-session设置一下maxage,超时了就要重新登录。
js-cookie 封装到cookie方法，去掉自己写的cookie.js

# TODOLIST
- [x] 会话刷新保持登录状态，走cookie
- [ ] 动态挂在左侧功能树
- [ ] 成员分数修改页面
- [ ] 会议记录页面
- [ ] 动态加载所有成员个人demo页面（其实在tood#2中可以一起实现）
- [ ] docker使用，占坑
- [ ] vue-admin好像蛮不错的，对于数据统计方面可以用下。
