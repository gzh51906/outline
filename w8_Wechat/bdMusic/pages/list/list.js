// pages/list/list.js
const regeneratorRuntime = require("regenerator-runtime");
let app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    page:1,
    size:10,
    datalist:[],
    type:null,
    loading:false,
    hasMore:true
  },

  getData({ type, size = 10, offset = 0 } = {}) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: 'https://tingapi.ting.baidu.com/v1/restserver/ting',
        data: {
          method: 'baidu.ting.billboard.billList',
          type,
          size,
          offset
        },
        success: ({ data }) => {
          console.log('res:', data);
          resolve(data);
        },
        fail(err) {
          reject(err)
        }
      })
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function ({type}) {
    console.log('type:',type,typeof type)

    let data = await this.getData({type})
    let datalist = [...this.data.datalist];
    datalist.push(...data.song_list);

    this.setData({
      datalist,
      type
    })

    // 设置页面标题
    let current = app.globalData.types.filter(item=>item.type==type)[0]
    wx.setNavigationBarTitle({
      title: current.title
    })
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
  onReachBottom: async function () {
    let {page,size,type,hasMore} = this.data;
    if(!hasMore){
      return;
    }
    page++;

    // 计算offset
    let offset = (page-1)*size

    this.setData({
      loading:true
    })

    let data = await this.getData({offset,type})
    let datalist = [...this.data.datalist];
    datalist.push(...data.song_list);
    this.setData({
      page,
      datalist,
      loading:false,
      hasMore:data.song_list.length===size
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})