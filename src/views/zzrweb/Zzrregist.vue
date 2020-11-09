<template>
  <div>
    <div class="registback">
      <div style="padding-top: 50px; position: absolute; right: 5%">
        <div class="registmark"></div>
        <div style="margin-top: 15px">
          <span>❤️💖💗💕欢迎加入这里💛💚💙💜　　</span>
        </div>
        <div style="margin-top: 15px">
          <el-input
            v-model="zzruser"
            placeholder="请输入您的登录账号"
            minlength="5"
            maxlength="20"
            oninput="value=value.replace(/[^\w_]/g,'')"
            :clearable="true"
            @change="zzruserchange"
          >
          </el-input>
        </div>
        <div style="margin-top: 15px">
          <el-input
            v-model="zzrname"
            placeholder="请输入您的用户名"
            :clearable="true"
          >
          </el-input>
        </div>
        <div style="margin-top: 15px">
          <el-input
            v-model="zzrpass"
            type="password"
            show-password
            :clearable="true"
            @change="zzrpasschange"
            placeholder="请输入您的密码"
          >
          </el-input>
        </div>
        <div style="margin-top: 15px">
          <el-input
            v-model="zzrtwopass"
            type="password"
            show-password
            :clearable="true"
            @change="zzrtwopasschange"
            placeholder="请输入重复输入您的密码"
          >
          </el-input>
        </div>
        <div style="margin-top: 15px">
          <el-button
            type="info"
            icon="fa fa-building fa-x fa-fw"
            @click="backhome"
            plain
            style="margin-left: 1%"
            >返回首页</el-button
          >
          <el-button
            type="primary"
            icon="fa fa-heart-o fa-x fa-fw"
            @click="registuser"
            plain
            >注册信息</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getListAPI, postListAPI } from "@/api/api";
export default {
  data() {
    return {
      zzruser: "",
      zzrname: "",
      zzrpass: "",
      zzrtwopass: "",
      registflag: true,
    };
  },
  methods: {
    // 离开焦点的验证
    zzruserchange() {
      if (this.zzruser == "") {
        return;
      }
      if (this.zzruser.length < 5) {
        this.$notify({
          title: "🍃🌿🍀",
          message: "请输入大于4位的账号",
          type: "warning",
        });
        this.zzruser = "";
        return;
      }
      var params = {
        zzruser: this.zzruser,
      };
      getListAPI("zirui/isownUser", params)
        .then((res) => {
          if (res == "ownzzr") {
            this.$notify({
              message: "该账号已存在，请重新输入账号",
              type: "warning",
            });
            this.zzruser = "";
          } else if (res == "error") {
            this.$message("服务器异常，请稍后");
          }
        })
        .catch((err) => alert(err));
    },
    zzrpasschange() {
      if (this.zzrpass == "") {
        return;
      }
      if (this.zzrpass.length < 6) {
        this.$notify({
          title: "🙈🙈🙈",
          message: "请输入大于5位的密码",
          type: "warning",
        });
        this.zzrpass = "";
      }
    },
    zzrtwopasschange() {
      if (this.zzrtwopass == "") {
        return;
      }
      if (this.zzrtwopass !== this.zzrpass) {
        this.registflag = false;
        this.$notify.error({
          message: "二次输入密码不一致，请验证",
        });
      } else {
        this.registflag = true;
      }
    },
    // 返回首页
    backhome() {
      if (this.zzruser !== "" || this.zzrname !== "" || this.zzrpass !== "") {
        this.$confirm("确定要回到首页吗🙉🙈🙊?", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(() => {
            this.$router.push("/");
          })
          .catch(() => {});
      } else {
        this.$router.push("/");
      }
    },
    // 注册登录信息
    registuser() {
      if (
        this.zzruser == "" ||
        this.zzrname == "" ||
        this.zzrpass == "" ||
        this.zzrtwopass == ""
      ) {
        this.$message({
          message: "仍有未填写的哦，请补全！",
          type: "warning",
        });
        return;
      }
      if (!this.registflag) {
        this.$message({
          message: "两次密码输入不一致，请重新输入密码！",
          type: "error",
        });
        return;
      }
      var params = {
        zzrname: this.zzrname,
        zzruser: this.zzruser,
        zzrpass: this.zzrpass,
      };
      postListAPI("zirui/insertUser", params)
        .then((res) => {
          if (res == "success") {
            this.$router.push("/login");
            this.$message({
              message: "创建用户成功",
              type: "success",
            });
          } else {
            this.$message("创建出现异常，请稍后");
          }
        })
        .catch((e) => {
          this.$message("服务器异常，请稍后");
        });
    },
  },
};
</script>

<style scoped>
.registback {
  background: url("../../assets/images/chuyin.jpg") no-repeat top center;
  -moz-background-size: 100% 100%; /* 老版本的 Firefox */
  background-size: 100% 100%;
  height: 700px;
}
.registmark {
  background: url("../../assets/images/kfc.jpg") no-repeat top center;
  -moz-background-size: 100% 100%; /* 老版本的 Firefox */
  background-size: 100% 100%;
  width: 150px;
  height: 150px;
  position: relative;
  left: 16%;
  z-index: 999;
}
</style>