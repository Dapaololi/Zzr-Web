<template>
  <div class="container" style="background-color: #ffffff">
    <div class="loginhead"></div>
    <div style="margin-top: 60px; text-align: center">
      <el-divider>
        <span
          style="color:#2c3e50;font-size:25px;font-family:font-family: Arial,Microsoft YaHei,sans-serif;font-weight:550;"
          >我也不知道做什么的登录</span
        >
      </el-divider>
    </div>
    <div class="loginbackground">
      <div class="loginma">
        <div
          id="qrCode"
          ref="qrCodeDiv"
          style="margin-top: 70px; margin-left: 40%"
        ></div>
        <div class="metroleft"></div>
        <div style="width: 150px; float: left; text-align: center">
          <div style="margin: 10px; text-align: center">扫描二维码登录</div>
          <i class="el-icon-full-screen"></i>
        </div>
        <div class="metroright"></div>
      </div>
      <div
        style="
          background-color: #c0c4cc;
          float: left;
          height: 350px;
          width: 0.2%;
        "
      ></div>
      <div class="loginpage">
        <div style="margin-top: 70px">
          <span style="float: left; margin-left: 10%">密码登录</span>
          <span style="float: left; margin-left: 15px">短信登录</span>
        </div>
        <el-input
          v-model="zzruser"
          placeholder="你的账号"
          style="margin-top: 20px; width: 82%; float: left; margin-left: 10%"
        >
          <el-button slot="prepend" icon="el-icon-user"></el-button>
        </el-input>
        <el-input
          v-model="zzrpass"
          type="password"
          placeholder="密码"
          show-password
          style="margin-top: 20px; width: 82%; float: left; margin-left: 10%"
        >
          <el-button slot="prepend" icon="el-icon-key"></el-button>
        </el-input>
        <el-button
          type="primary"
          icon="el-icon-user-solid"
          @click="login"
          plain
          style="float: left; margin-left: 10%; margin-top: 20px"
          >登 录</el-button
        >
        <el-button
          type="info"
          icon="el-icon-thumb"
          @click="register"
          plain
          style="float: left; margin-top: 20px"
          >注 册</el-button
        >
      </div>
    </div>
    <div style="font-size: 10px; text-align: center">
      登录即代表你同意用户协议和隐私政策
    </div>
    <div class="loginend">
      <div class="wishleft">
        <div style="float: right; width: 75%">
          <div
            style="
              text-align: left;
              margin-top: 25px;
              font-size: 20px;
              font-weight: 550;
            "
          >
            合作机构:
          </div>
          <div
            style="
              text-align: left;
              margin-top: 5px;
              font-size: 10px;
              font-weight: 550;
            "
          >
            暂时没有
          </div>
        </div>
      </div>
      <div
        style="
          background-color: #c0c4cc;
          float: left;
          height: 150px;
          width: 0.2%;
          margin-top: 25px;
        "
      ></div>
      <div class="wishright">
        <div
          style="
            font-size: 70px;
            float: left;
            margin-top: 30px;
            margin-left: 10%;
          "
        >
          <i class="el-icon-platform-eleme"></i>
        </div>
        <div
          style="
            font-size: 70px;
            float: left;
            margin-top: 30px;
            margin-left: 10%;
          "
        >
          <i class="el-icon-download"></i>
        </div>
        <div
          style="
            font-size: 70px;
            float: left;
            margin-top: 30px;
            margin-left: 10%;
          "
        >
          <i class="el-icon-chat-dot-round"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getListAPI, postListAPI } from "@/api/api";
import QRCode from "qrcodejs2";
export default {
  data() {
    return {
      zzruser: "",
      zzrpass: "",
    };
  },
  components: {},
  mounted() {
    new QRCode(this.$refs.qrCodeDiv, {
      width: 150,
      height: 150,
      text: "等待开发中o(*￣︶￣*)o",
      colorDark: "#F2F6FC",
      colorLight: "#303133",
      correctLevel: QRCode.CorrectLevel.L,
    });
  },
  created() {},
  methods: {
    login() {
      var params = {
        zzruser: this.zzruser,
        zzrpass: this.zzrpass,
      };
      localStorage.removeItem("Authorization");
      postListAPI("zirui/login", params)
        .then((res) => {
          console.log(res);
          if (
            res.token != undefined ||
            res.token != null ||
            res != "errorLogin"
          ) {
            // var userToken = "Bearer " + res.token;
            var userToken = res.token;
            // 将用户token保存到vuex中
            this.$store.commit("changeLogin", { Authorization: userToken });
            this.$router.push("/");
            this.$message({
              message: "登录成功",
              type: "success",
            });
          } else {
            this.$message("登录失败，请查证账号密码");
          }
        })
        .catch((err) => alert(err));
    },
    register() {
      this.$router.push("/zzrregist");
    },
  },
};
</script>
<style scoped>
.container {
  /* margin-top: 200px; */
  width: 100%;
  height: 100%;
}
.loginbackground {
  width: 100%;
  height: 400px;
}
.loginhead {
  background: url("../../assets/images/pixiv59564981.jpg") no-repeat top center;
  -moz-background-size: 40% 100%; /* 老版本的 Firefox */
  background-size: 100% 100%;
  height: 200px;
}
.loginend {
  background-color: #ebeef5;
  height: 200px;
}
.loginma {
  float: left;
  width: 49%;
  height: 350px;
  margin: auto;
  /* border: 1px solid #eaeaea;
	box-shadow: 0 0 25px #9b8585; */
}
.loginpage {
  border-radius: 5px;
  /* margin: auto; */
  width: 49%;
  /* padding: 35px 55px 15px; */
  height: 350px;
  background: #fff;
  /* border: 1px solid #eaeaea;
	box-shadow: 0 0 25px #9b8585; */
  float: right;
}
.metroleft {
  background: url("../../assets/images/ditie.jpg") no-repeat top center;
  -moz-background-size: 100% 100%; /* 老版本的 Firefox */
  background-size: 100% 100%;
  -moz-transform: rotate(180deg);
  transform: rotateY(180deg);
  float: left;
  margin-left: 12%;
  width: 28%;
  height: 100px;
}
.metroright {
  background: url("../../assets/images/ditie.jpg") no-repeat top center;
  -moz-background-size: 100% 100%; /* 老版本的 Firefox */
  background-size: 100% 100%;
  float: right;
  margin-right: 7%;
  width: 28%;
  height: 100px;
}
.wishleft {
  float: left;
  width: 49%;
  height: 100px;
}
.wishright {
  float: right;
  width: 49%;
}
</style>