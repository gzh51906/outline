//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    recommend:[],
    keyword:''
  },
  //事件处理函数
  gotoSearch: function() {
    wx.navigateTo({
      url: '/pages/search/search?keyword='+this.data.keyword
    })
  },
  onLoad: function () {
    wx.request({
      url:'http://tingapi.ting.baidu.com/v1/restserver/ting',
      data:{
        method:'baidu.ting.billboard.billList' ,
         type:2,
         size:10,
         offset:0
      },
      success:({data})=>{
        console.log('res:',data);
        let recommend = data.song_list.slice(0,3);

        // 获取最热门的歌曲，并把歌曲名写入搜索框
        let hotest = data.song_list.sort((a,b)=>b.hot-a.hot)[0]
        this.setData({
          recommend,
          keyword: hotest.title
        })
      }
    })
  },
  getUserInfo: function(e) {
    
  }
})
