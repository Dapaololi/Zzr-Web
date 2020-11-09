<template>
  <div id="home">
    <div class="homehead">
      <div style="padding-top: 350px; color: #f3ecc2">Hi 欢迎大佬来访</div>
      <div style="color: #e0ece4">
        青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪
      </div>
    </div>
    <div
      style="
        background-color: #ffffe0;
        margin-left: 5%;
        width: 90%;
        height: 100px;
        text-align: center;
      "
    >
      <aplayer
        autoplay
        :music="{
          title: '牧马城市',
          artist: '-',
          src: '../../../static/miusic/牧马城市-毛不易.mp3',
          pic: '../../../static/a3pcm-5nmj1-001.ico',
        }"
      >
      </aplayer>
      <i class="fa fa-thumbs-up fa-spin fa-3x fa-fw" aria-hidden="true"></i>
      <span>一些有帮助的网站：</span>
    </div>
    <div style="margin-left: 5%; background-color: #ffffe0; width: 90%">
      <span style="margin-left: 15px">前端篇（资料库）</span>
      <div style="margin-top: 10px; margin-left: 15px">配色</div>
      <div style="margin-top: 10px; margin-left: 15px">
        <i class="fa fa-paint-brush fa-x fa-fw" aria-hidden="true"></i
        >配色类网站：
        <a href="https://colorhunt.co/" target="_blank"
          >[Color Hunt - Color Palettes for Designers and Artists]</a
        >
      </div>
      <div style="margin-top: 10px; margin-left: 15px">jquery插件与模板</div>
      <div style="margin-top: 10px; margin-left: 15px">
        <i class="fa fa-legal fa-x fa-fw" aria-hidden="true"></i
        >jquery各种自制插件：
        <a href="https://www.jq22.com/" target="_blank"
          >[jQuery plugin - Do more]</a
        >
      </div>
      <div style="margin-top: 10px; margin-left: 15px">
        <i class="fa fa-legal fa-x fa-fw" aria-hidden="true"></i
        >jquery之家,各种插件,css库,html5库：
        <a href="http://www.htmleaf.com/" target="_blank"
          >[jQuery plugin - Do more]</a
        >
      </div>
      <div style="margin-top: 10px; margin-left: 15px">bootstrap的模板</div>
      <div style="margin-top: 10px; margin-left: 15px">
        <i class="fa fa-star-half-o fa-x fa-fw" aria-hidden="true"></i
        >bootstrap的模板库：
        <a href="http://www.cssmoban.com/tags.asp?n=bootstrap" target="_blank"
          >[cssmoban - 模版之家]</a
        >
      </div>
      <div style="margin-top: 10px; margin-left: 15px">二维码生成</div>
      <div style="margin-top: 10px; margin-left: 15px">
        <i class="el-icon-full-screen"></i>草料二维码：
        <a href="https://cli.im/" target="_blank">[草料二维码生成器]</a>
      </div>
      <div style="margin-top: 10px; margin-left: 15px">
        <i class="el-icon-full-screen"></i>芝麻小程序生成二维码：
        <a href="https://weixin.hotapp.cn/" target="_blank"
          >[芝麻小程序生成二维码]</a
        >
      </div>
      <div style="margin-top: 10px; margin-left: 15px">图标库</div>
      <div style="margin-top: 10px; margin-left: 15px">
        <i class="fa fa-motorcycle fa-x fa-fw" aria-hidden="true"></i
        >阿里巴巴图标库：
        <a href="https://www.iconfont.cn/" target="_blank">[阿里巴巴图标库]</a>
      </div>
      <div style="margin-top: 10px; margin-left: 15px">
        <i class="fa fa-motorcycle fa-x fa-fw" aria-hidden="true"></i>Font
        Awesome一套绝佳的图标字体库和CSS框架：
        <a href="https://fontawesome.dashgame.com/" target="_blank"
          >[fontawesome-一套绝佳的图标字体库和CSS框架]</a
        >
      </div>
      <div style="margin-top: 10px; margin-left: 15px">
        <i class="fa fa-motorcycle fa-x fa-fw" aria-hidden="true"></i>
        小表情的emoji：
        <a href="https://emojipedia.org/" target="_blank">[emoji-😀]</a>
      </div>
      <div style="margin-top: 10px; margin-left: 15px">在线工具</div>
      <div style="margin-top: 10px; margin-left: 15px">
        <i class="fa fa-wrench fa-x fa-fw" aria-hidden="true"></i>logo在线制作：
        <a href="http://www.logofree.cn/" target="_blank">[专属LOGO-GOGOGO]</a>
      </div>
      <div style="margin-top: 10px; margin-left: 15px">
        <i class="fa fa-wrench fa-x fa-fw" aria-hidden="true"></i>
        在线开发工具：
        <a href="https://tool.lu/c/developer" target="_blank">[在线开发工具]</a>
      </div>
      <div style="margin-top: 10px; margin-left: 15px">
        <i class="fa fa-wrench fa-x fa-fw" aria-hidden="true"></i>
        在线存放图片的地址：
        <a href="https://sm.ms/" target="_blank">[sm-在线存放图片的地址]</a>
      </div>
      <div style="margin-top: 10px; margin-left: 15px">一些api和接口</div>
      <div style="margin-top: 10px; margin-left: 15px">
        <i class="fa fa-support fa-x fa-fw" aria-hidden="true"></i
        >云小蜜智能机器人API：
        <a
          href="https://help.aliyun.com/document_detail/60453.html?spm=a2c4g.11186623.6.542.560a5929loS4Uh"
          target="_blank"
          >[云小蜜智能机器人]</a
        >
      </div>
      <div style="margin-top: 10px; margin-left: 15px">
        <i class="fa fa-support fa-x fa-fw" aria-hidden="true"></i>
        易万维源接口：
        <a href="https://www.showapi.com/api/apiList" target="_blank"
          >[易源·API市场]</a
        >
      </div>
      <div style="margin-top: 10px; margin-left: 15px">
        <i class="fa fa-support fa-x fa-fw" aria-hidden="true"></i>
        短信验证码接口：
        <a href="https://www.mysubmail.com/sms/api?tag=jq22" target="_blank"
          >[赛邮-云通信]</a
        >
      </div>
      <div style="margin-top: 10px; margin-left: 15px">
        <i class="fa fa-support fa-x fa-fw" aria-hidden="true"></i>
        免费接口：
        <a href="http://www.bejson.com/knownjson/webInterface/" target="_blank"
          >[Json接口]</a
        >
      </div>
      <div style="margin-top: 10px; margin-left: 15px">在线测试</div>
      <div style="margin-top: 10px; margin-left: 15px">
        <i class="fa fa-space-shuttle fa-x fa-fw" aria-hidden="true"></i
        >Postman前后端连接测试：
        <a href="https://www.postman.com/" target="_blank">[Postman]</a>
      </div>
      <div style="margin-top: 10px; margin-left: 15px">参考页面构图</div>
      <div style="margin-top: 10px; margin-left: 15px">
        <i class="fa fa-street-view fa-x fa-fw" aria-hidden="true"></i
        >切客网（可用于参考前端页面开发）：
        <a href="http://www.qkhtml.com/" target="_blank">[前端切图外包服务]</a>
      </div>
      <div style="margin-top: 10px; margin-left: 15px">
        <i class="fa fa-street-view fa-x fa-fw" aria-hidden="true"></i
        >在线原型图设计：
        <a href="https://www.xiaopiu.com/square" target="_blank"
          >[在线原型图UI]</a
        >
      </div>
      <div style="margin-top: 10px; margin-left: 15px">
        <i class="fa fa-street-view fa-x fa-fw" aria-hidden="true"></i
        >布局设计器：
        <a
          href="http://lowcode.magicalcoder.com/magicalcoder/index-element.html"
          target="_blank"
          >[布局设计器]</a
        >
      </div>
      <div style="margin-top: 10px; margin-left: 15px">知识库</div>
      <div style="margin-left: 15px; margin-bottom: 30px">
        <i class="fa fa-arrow-right fa-x fa-fw" aria-hidden="true"></i>
        <el-button type="text" @click="kangVisible = true">康康这里</el-button>
        <el-dialog
          :visible.sync="kangVisible"
          width="50%"
          :close-on-click-modal="false"
        >
          <div>
            <i class="fa fa-bookmark-o fa-x fa-fw" aria-hidden="true"></i
            >程序员必备知识网(极客帮)：
            <a href="https://www.infoq.cn/" target="_blank"
              >[InfoQ - 促进软件开发及相关领域知识与创新的传播-极客邦]</a
            >
          </div>
          <div>
            <i class="fa fa-bookmark-o fa-x fa-fw" aria-hidden="true"></i
            >代码bug监控：
            <a
              href="https://www.fundebug.com/?tdsourcetag=s_pcqq_aiomsg"
              target="_blank"
              >[Fundebug：一行代码搞定BUG监控]</a
            >
          </div>
          <div>
            <i class="fa fa-bookmark-o fa-x fa-fw" aria-hidden="true"></i>Stack
            Overflow ：
            <a href="https://stackoverflow.com/" target="_blank"
              >[Stack Overflow — 解决 bug 的社区]</a
            >
          </div>
          <div>
            <i class="fa fa-bookmark-o fa-x fa-fw" aria-hidden="true"></i
            >程序员客栈(业余活动) ：
            <a href="https://www.proginn.com/" target="_blank"
              >[近48万优秀开发者 , 您的专属云端开发团队]</a
            >
          </div>
          <div>
            <i class="fa fa-bookmark-o fa-x fa-fw" aria-hidden="true"></i>掘金
            ：
            <a href="https://juejin.im/" target="_blank"
              >[掘金 — 帮助开发者成长的技术社区]</a
            >
          </div>
          <div>
            <i class="fa fa-bookmark-o fa-x fa-fw" aria-hidden="true"></i>v2ex
            ：
            <a href="https://www.v2ex.com/" target="_blank"
              >[V2EX 是一个关于分享和探索的地方]</a
            >
          </div>
          <div>
            <i class="fa fa-bookmark-o fa-x fa-fw" aria-hidden="true"></i>博客园
            ：
            <a href="https://www.cnblogs.com/" target="_blank"
              >[面向开发者的知识分享社区]</a
            >
          </div>
          <div>
            <i class="fa fa-bookmark-o fa-x fa-fw" aria-hidden="true"></i
            >Medium(😳) ：
            <a href="https://www.medium.com/" target="_blank"
              >[国外优质文章网站]</a
            >
          </div>
          <div>
            <i class="fa fa-bookmark-o fa-x fa-fw" aria-hidden="true"></i
            >算法学习 LintCode ：
            <a href="https://www.lintcode.com/" target="_blank"
              >[算法学习网站，上去每天刷两道算法题，走遍天下都不怕]</a
            >
          </div>
          <div>
            <i class="fa fa-bookmark-o fa-x fa-fw" aria-hidden="true"></i
            >算法学习 LeetCode ：
            <a href="https://leetcode-cn.com/" target="_blank"
              >[算法学习网站，上去每天刷两道算法题，走遍天下都不怕]</a
            >
          </div>
          <span slot="footer" class="dialog-footer"
            ><i class="fa fa-building fa-x fa-fw" aria-hidden="true"></i
          ></span>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import Aplayer from "vue-aplayer";
export default {
  components: {
    Aplayer,
  },
  name: "home",
  data() {
    return {
      kangVisible: false,
    };
  },
  methods: {
    kangClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
  },
};
</script>
<style scoped>
.homehead {
  background: url("../../assets/images/335.jpg") no-repeat top center;
  -moz-background-size: 100% 100%; /* 老版本的 Firefox */
  background-size: 100% 100%;
  height: 500px;
  text-align: center;
}
</style>