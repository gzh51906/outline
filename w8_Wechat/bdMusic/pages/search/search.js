// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    keyword:'',
    inputShowed: true,
    datalist: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    let {keyword} = options;
    keyword = '逆流成河';
    this.setData({
      keyword
    })

    this.getData(keyword);
  },

  clearInput(){
    this.setData({
      keyword:''
    })
  },

  hideInput(){
    this.setData({
      inputShowed:false,
      keyword:''
    })
  },

  showInput(){
    this.setData({
      inputShowed: true
    })
  },

  inputTyping: function (e) {
    this.setData({
      keyword: e.detail.value
    });

    this.getData();
  },
  getData(keyword) {
    wx.request({
      url: 'https://tingapi.ting.baidu.com/v1/restserver/ting',
      data: {
        method: 'baidu.ting.search.catalogSug',
        query: keyword || this.data.keyword
      },
      success: res => {
        console.log(res)
        let data = res.data;
        let datalist = data.song;

        this.setData({
          datalist
        });
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})