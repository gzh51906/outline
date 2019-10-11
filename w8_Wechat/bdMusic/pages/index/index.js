//index.js
const regeneratorRuntime = require("regenerator-runtime");

//获取应用实例
const app = getApp()

Page({
  data: {
    recommend:[],
    keyword:'',
    tabs:app.globalData.types,
    tabWidth:0,
    sliderOffset:0,
    activeIndex:0,
    tabData:{},// tab标签切换的数据{1:[],2:[],11:[]},
    classicSong:[],
    loveSong:[]
  },
  //事件处理函数
  gotoSearch: function() {
    wx.navigateTo({
      url: '/pages/search/search?keyword='+this.data.keyword
    })
  },
  goto(e){
  let {id} = e.currentTarget.dataset;
    wx.navigateTo({
      url: '/pages/player/player?id=' + id
    })
  },
  async handlerTabChange(e){
    let {idx} = e.currentTarget.dataset
    let sliderOffset = this.data.tabWidth*idx;
    this.setData({
      sliderOffset,
      activeIndex:idx
    })

    // 获取当前tab数据
    let type = this.data.tabs[idx].type;
    if (this.data.tabData[type] === undefined){
      this.getTabData(type);
    }

  },
  onLoad: async function () {
    let { tabs, activeIndex} = this.data;

    // 获取轮播图数据
    let data = await this.getData();
    let recommend = data.song_list.slice(0, 3);
    // 获取最热门的歌曲，并把歌曲名写入搜索框
    let hotest = data.song_list.sort((a, b) => b.hot - a.hot)[0]
    this.setData({
      recommend,
      keyword: hotest.title
    })

    // 处理tab初始样式
    // 获取设备信息
    wx.getSystemInfo({
      success:(res)=>{
        this.setData({
          tabWidth: res.windowWidth/tabs.length
        })
      }
    });

    // 获取当前Tab数据
    let currentTab = tabs[activeIndex];
    this.getTabData(currentTab.type)


    // 经典老歌
    let classicSong = await this.getData({type:22})
    let loveSong = await this.getData({type:23})
    this.setData({
      classicSong:classicSong.song_list,
      loveSong: loveSong.song_list
    })
    
  },
  getData({type=2,size=10,offset=0}={}){
    return new Promise((resolve,reject)=>{
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
        fail(err){
          reject(err)
        }
      })
    })
    
  },
  async getTabData(type){
    let data = await this.getData({ type,size:5 });
    let tabData = {...this.data.tabData};
    tabData[type] = data.song_list;
    this.setData({ tabData })
  },
  getUserInfo: function(e) {
    
  }
})
