// pages/demo/demo.js
const future = require('../../utils/future.js');
const wx = require('../../utils/wx.js');
const regeneratorRuntime = require("../../utils/regenerator-runtime.js");
const co = future.co;
const promisify = future.promisify;

//获取应用实例
var app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
  },
  onLoad: co.wrap(function* () {
    yield this.login();
  }),
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  // 微信登录后获得用户信息
  login: co.wrap(function* () {
    this.setData({ motto: "正在登陆" });
    const loginResult = yield wx.login();
    this.setData({userInfo:(yield wx.getUserInfo()).userInfo})
  })
})