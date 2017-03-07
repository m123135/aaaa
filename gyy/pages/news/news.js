// pages/news/news.js

//获取公用库的的数据
var pubulicData = require('../../utils/util.js');

Page({
  data:{
    //存放轮播图数据的变量
    bannerData:[]
  },
  onLoad:function(options){

    // AJAX请求
    // var self = this
    // wx.request({
    //     url: 'wwww.xxx.php', //仅为示例，并非真实的接口地址
    //     header: {
    //         'content-type': 'application/json'
    //     },
    //     success: function(res) {
    //       self.setData({
    //          bannerData:res
    //       })
    //     }
    // })

    //设置读取过来轮播图的数据
    this.setData({
      bannerData:pubulicData.banerData
    });
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})