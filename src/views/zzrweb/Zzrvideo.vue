<template>
  <div id="Zzrvideo" class="container" style="background-color: #ffffff">
    <div style="width: 80%; margin-left: 10%">
      <div class="leftvideo"></div>
      <div class="rightvideo"></div>
      <div>
        <d-player ref="player" :options="options"></d-player>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "Zzrvideo",
  props: ["choosevideo"],
  data() {
    return {
      options: {
        theme: "#b7daff", // 风格颜色，例如播放条，音量条的颜色
        loop: false, // 是否自动循环
        lang: "zh-cn", // 语言，'en', 'zh-cn', 'zh-tw'
        screenshot: true, // 是否允许截图（按钮），点击可以自动将截图下载到本地
        hotkey: true, // 是否支持热键，调节音量，播放，暂停等
        preload: "auto", // 自动预加载
        volume: 0.7, // 初始化音量
        // logo: '../../static/images/1.jpg',  // 在视频左脚上打一个logo
        video: {
          url: this.choosevideo, // 播放视频的路径
          quality: [
            // 设置多个质量的视频
            {
              name: "HD",
              url: this.choosevideo,
              type: "auto", // 'auto', 'hls', 'flv', 'dash', 'webtorrent', 'normal' 或 其他自定义类型
            },
            {
              name: "SD",
              url: this.choosevideo,
              type: "auto",
            },
          ],
          defaultQuality: 0, // 默认是HD
          // pic: "../../static/images/2.jpg", // 视频封面图片
          // thumbnails: "../../static/images/3.jpg", // 进度条上的缩略图,需要通过dplayer-thumbnails来生成
        },
        subtitle: {
          url: "http://www.baidu.com",
          fontSize: "20px",
          bottom: "40px",
        },
        danmaku: {
          // 弹幕
          id: "9E2E3368B56CDBB4",
          api: "https://api.prprpr.me/dplayer/",
          token: "tokendemo",
          maximum: 1000,
          addition: ["https://api.prprpr.me/dplayer/v3/bilibili?aid=4157142"],
          user: "DIYgod",
          bottom: "15%",
          unlimited: true,
        },
        contextmenu: [
          // 右键菜单
          {
            text: "custom1",
            link: "https://www.bilibili.com",
          },
          {
            text: "custom2",
            click: (player) => {
              console.log(player);
            },
          },
        ],
        highlight: [
          // 进度条时间点高亮
          {
            text: "10M",
            time: 600,
          },
          {
            text: "20M",
            time: 1200,
          },
        ],
      },
    };
  },
};
</script>
<style scoped>
.home {
  width: 1000px;
  margin: 0 auto;
  text-align: center;
}
.leftvideo {
  background: url("../../assets/images/batman.jpg") no-repeat top center;
  -moz-background-size: 100% 100%; /* 老版本的 Firefox */
  background-size: 100% 100%;
  height: 420px;
  text-align: center;
  position: absolute;
  left: 5%;
  margin-top: 10px;
  width: 15%;
}
.rightvideo {
  background: url("../../assets/images/knight.jpg") no-repeat top center;
  -moz-background-size: 100% 100%; /* 老版本的 Firefox */
  background-size: 100% 100%;
  height: 420px;
  text-align: center;
  position: absolute;
  right: 5%;
  margin-top: 10px;
  width: 15%;
}
</style>