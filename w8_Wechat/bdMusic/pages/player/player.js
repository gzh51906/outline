// pages/player/player.js
const regeneratorRuntime = require("regenerator-runtime");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fileInfo:{},
    songInfo:{

    },
    paused:true,
    player:null
  },

  handlePlay(){
    let { fileInfo,paused,player} = this.data;
    if(!player){
      player = wx.createInnerAudioContext();
      player.src = fileInfo.file_link;
      this.setData({
        player
      });
      
    }

    // player.onPlay(() => {
    //   console.log('onPlay', player.currentTime)
    // })

    // player.onPause(() => {
    //   console.log('onPause')
    //   //player.offTimeUpdate()
    // })

    // // 监听播放事件
    // player.onTimeUpdate(() => {
    //   console.log('onTimeUpdate')
    //   console.log(player.currentTime, player.duration)
    // });

    if (paused){
      player.play();
    }else{
      player.pause()
    }

    this.setData({
      paused: !paused
    })

    


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function ({id}) {
    console.log(id)
    // id = '670254953';

    let data = await this.getData(id);

    this.setData({
      fileInfo:data.bitrate,
      songInfo:data.songinfo
    })
  },

  getData(songid) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: 'https://tingapi.ting.baidu.com/v1/restserver/ting',
        data: {
          method: 'baidu.ting.song.play',
          songid,
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