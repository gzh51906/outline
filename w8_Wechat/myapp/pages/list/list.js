// pages/list/list.js
let App = getApp();
console.log('App:',App)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    qty:1,
    users:['laoxie','jingjing','xiaoxie','dingding'],
    checkedList:[]
  },
  changeQty(){
    // 修改data数据（类似于React）
    this.setData({
      qty:this.data.qty+1
    })
  },
  checkUser(e){
    console.log('users:',e);
    this.setData({
      checkedList:e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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

    return {
      title:'震惊！xxx',
      path:'/pages/list/list',
      imageUrl:'https://imgsa.baidu.com/news/q%3D100/sign=41217cce5e3d269728d30c5d65fab24f/11385343fbf2b21172dec44ac58065380dd78ec6.jpg'
    }
  }
})