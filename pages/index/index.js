//index.js
const hprose = require('../../utils/hprose.js');
const co = hprose.co;
const wx = hprose.wx;
const promisify=hprose.promisify;

const regeneratorRuntime = require("../../utils/regenerator-runtime.js");

//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: co.wrap(function* () {
    // var that = this
    // //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo){
    //   //更新数据
    //   that.setData({
    //     userInfo:userInfo
    //   })
    // })
    console.log('onLoad')
    var client = hprose.Client.create("http://hprose.com/example/", ["hello"]);
    var result = yield client.hello("world");
    console.log(result);

    yield this.login();
    // //调用应用实例的方法获取全局数据
    // this.setData({
    //   userInfo: yield app.getUserInfo
    // });
  }),
  hproseTap: co.wrap(function* () {
    console.log('hproseTap');
    // var tempFilePaths = (yield wx.chooseImage()).tempFilePaths;
    // var data = (yield wx.uploadFile({
    //   url: 'http://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
    //   filePath: tempFilePaths[0],
    //   name: 'file',
    //   formData: {
    //     'user': 'test'
    //   }
    // })).data;
  }),
  // 微信登录后获得用户信息
  login: co.wrap(function* () {
    this.setData({ motto: "正在登陆" });
    const loginResult = yield wx.login();
    this.setData({userInfo:(yield wx.getUserInfo()).userInfo})
  })
})
