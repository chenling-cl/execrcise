
Page({

  data: {
    temperature:"0",
    humidity: "0",
  },

  //周期函数
  onLoad: function () {
    setInterval(function () {
      this.init() //不断获取继电器状态
    }.bind(this), 500)
  },

  //用于获取继电器状态
  init: function () {
    var that = this
    wx.request({
      url: "https://api.heclouds.com/devices/586718834/datapoints",   //将请求行中的数字换成自己的设备ID
      header: {
        "api-key": "ctk3FcLj1rYpRyFD77NvCbmgytc="                     //换成自己的api-key
      },
      data: {
        limit: 1
      },
      method: "GET",
      success: function (e) {
        console.log(e.data.data)
        that.setData({
          temperature: e.data.data.datastreams[0].datapoints[0].value,
          humidity : e.data.data.datastreams[1].datapoints[0].value,
        })
      }
    });
  }


})