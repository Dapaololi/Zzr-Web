<template>
  <div id="app">
    <el-menu
      mode="horizontal"
      @select="routerSelect"
      background-color="#FFF0F5"
      text-color="#20B2AA"
      active-text-color="#FF8C00"
      :default-active="activeIndex"
      router
    >
      <NavMenu :navMenus="menuData"></NavMenu>
      <el-menu-item
        v-show="noregister"
        style="float: right; margin-right: 50px"
        index="login"
        >登录</el-menu-item
      >
      <div
        v-show="!noregister"
        style="float: right; margin-right: 60px"
        index="-"
      >
        <el-dropdown trigger="hover">
          <span class="el-dropdown-link">
            <el-avatar
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            ></el-avatar
            ><i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item class="clearfix" @click.native="userCenter">
              个人中心
            </el-dropdown-item>
            <el-dropdown-item class="clearfix">
              私信
              <el-badge class="mark" :value="12" />
            </el-dropdown-item>
            <el-dropdown-item class="clearfix">
              回复
              <el-badge class="mark" :value="3" />
            </el-dropdown-item>
            <el-dropdown-item class="clearfix" @click.native="exitLogin">
              退出登录
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <el-submenu style="float: right" index="-">
        <template slot="title">创作一下</template>
        <el-menu-item index="richeditor">富文本编辑器</el-menu-item>
        <el-menu-item index="markeditor">MarkDown编辑器</el-menu-item>
      </el-submenu>
      <!-- <el-menu-item style="float: right" index="markeditor"
        >创作一下</el-menu-item
      > -->
      <a
        id="github"
        href="https://github.com/Dapaololi/Dapaololi_vue_web"
        target="_blank"
        title="Visit the open-source code on GitHub!"
      >
        <svg viewBox="0 0 250 250" aria-hidden="true">
          <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
          <path
            d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
            fill="currentColor"
            class="octo-arm"
          ></path>
          <path
            d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
            fill="currentColor"
            class="octo-body"
          ></path>
        </svg>
      </a>
    </el-menu>
    <router-view />
  </div>
</template>

<script>
import NavMenu from "./components/NavMenu.vue";
import layData from "./components/Navdata.js";
import autoLoad from "../live2d-widget/autoload.js";

export default {
  name: "App",
  components: {
    NavMenu: NavMenu,
    autoLoad: autoLoad,
  },
  data() {
    return {
      activeIndex: this.$route.path,
      menuData: layData.menuData,
      noregister: true,
    };
  },
  created() {},
  mounted() {},
  watch: {
    $route(to, from) {
      if (to != "/login") {
        if (
          localStorage.getItem("Authorization") != null ||
          localStorage.getItem("Authorization") != undefined
        ) {
          this.noregister = false;
        } else {
          this.noregister = true;
        }
      }
      // 监听路由的变化  如果路由发生改变则当前tab栏默认值也相应改变
      console.log(to);
      this.activeIndex = to.path;
    },
  },
  computed: {},
  methods: {
    routerSelect(key, keyPath) {
      // console.log(key, keyPath);
      this.activeIndex = key;
      console.log(this.activeIndex);
    },
    userCenter() {
      this.$router.push("/usercenter");
    },
    exitLogin() {
      this.$confirm("确定要退出登录吗🙉🙈🙊?", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          localStorage.removeItem("Authorization");
          this.noregister = false;
          this.$router.push("/login");
          this.$message({
            type: "success",
            message: "退出成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消",
          });
        });
    },
  },
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
#github svg {
  transition: all 1s;
  fill: #222;
  color: #fff;
  position: absolute;
  top: 0;
  right: 0;
  border: 0;
  width: 65px;
  height: 65px;
}

#github:hover svg {
  width: 160px;
  height: 160px;
}
#waifu {
  right: 0;
}
</style>
