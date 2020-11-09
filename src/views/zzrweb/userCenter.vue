<template>
  <div
    style="
      background-color: #fff5ee;
      margin-left: 5%;
      width: 90%;
      box-shadow: 2px 2px 5px #000;
    "
  >
    <div style="padding-top: 16px; padding-left: 35%">
      <span>头像：　　</span>
      <span>
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        ></el-avatar>
      </span>
    </div>
    <div style="padding-top: 16px; padding-left: 35%">
      <span>昵称：　　</span>
      <span>
        <el-input
          placeholder="请输入昵称"
          maxlength="20"
          v-model="username"
          :clearable="true"
          style="width: 30%"
        >
        </el-input>
      </span>
    </div>
    <div style="padding-top: 16px; padding-left: 35%">
      <span>我的签名：</span>
      <span>
        <el-input
          type="textarea"
          maxlength="55"
          autosize
          placeholder="请输入签名"
          v-model="signname"
          :clearable="true"
          style="width: 30%"
        >
        </el-input>
      </span>
    </div>
    <div style="padding-top: 16px; padding-left: 35%">
      <span>邮箱：　　</span>
      <span>
        <el-input
          placeholder="请输入邮箱"
          v-model="mailname"
          :clearable="true"
          style="width: 30%"
          @change="mailchange"
        >
        </el-input>
      </span>
    </div>
    <div style="padding-top: 16px; padding-left: 35%">
      <span>电话：　　</span>
      <span>
        <el-input
          placeholder="请输入电话"
          v-model="phonename"
          oninput="value=value.replace(/[^\d]/g,'')"
          @change="phonechange"
          :clearable="true"
          style="width: 30%"
        >
        </el-input>
      </span>
    </div>
    <div style="padding-top: 16px; padding-left: 35%">
      <span>性别：　　</span>
      <span>
        <el-radio-group v-model="sexchoose">
          <el-radio-button
            label="男♂"
            style="margin-right: 11px"
          ></el-radio-button>
          <el-radio-button
            label="女♀"
            style="margin-right: 11px"
          ></el-radio-button>
          <el-radio-button label="保密"></el-radio-button>
        </el-radio-group>
      </span>
    </div>
    <div style="padding-top: 16px; padding-left: 35%; padding-bottom: 16px">
      <el-button
        type="primary"
        icon="fa fa-fighter-jet fa-x fa-fw"
        @click="backhome"
        plain
        style="margin-left: 5%"
        >返回首页</el-button
      >
      <el-button
        type="info"
        icon="fa fa-edit fa-x fa-fw"
        @click="saveuser"
        plain
        >修改信息</el-button
      >
    </div>
  </div>
</template>

<script>
import { getListAPI, postListAPI } from "@/api/api";
export default {
  data() {
    return {
      username: "",
      signname: "",
      sexchoose: "",
      mailname: "",
      phonename: "",
    };
  },
  mounted() {
    getListAPI("zirui/selectUser", "")
      .then((res) => {
        if (res == "null") {
          this.$message.error("token已过期，请重新登陆");
          return;
        }
        this.username = res.zzrname;
        this.signname = res.zzrsign;
        this.sexchoose = res.zzrsex;
        this.mailname = res.zzrmail;
        this.phonename = res.zzrtel;
      })
      .catch((err) => alert(err));
  },
  methods: {
    // 验证
    mailchange() {
      var reg = /^[0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}$/;
      if (reg.test(this.mailname)) {
      } else {
        this.$message({
          message: "邮箱格式错误，请重新输入",
          type: "warning",
        });
        this.mailname = "";
      }
    },
    phonechange() {
      if (this.phonename.length == 11) {
      } else {
        this.$message({
          message: "手机号格式错误，请重新输入",
          type: "warning",
        });
        this.phonename = "";
      }
    },
    // 回到桌面
    backhome() {
      if (
        this.username !== "" ||
        this.signname !== "" ||
        this.mailname !== "" ||
        this.phonename !== ""
      ) {
        this.$confirm("确定要回到首页吗🍂🍂🍂?", {
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
    // 修改用户信息
    saveuser() {
      this.$confirm("确定要修改用户信息吗?", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          var params = {
            zzrname: this.username,
            zzrsign: this.signname,
            zzrsex: this.sexchoose,
            zzrmail: this.mailname,
            zzrtel: this.phonename,
          };
          postListAPI("zirui/updateUser", params)
            .then((res) => {
              if (res == "success") {
                this.$router.push("/");
                this.$message({
                  message: "修改用户信息成功",
                  type: "success",
                });
              } else if (res == "notoken") {
                this.$message("token已过期，请重新登录");
              } else {
                this.$message("修改出现异常，请稍后");
              }
            })
            .catch((e) => {
              this.$message("服务器异常，请稍后");
            });
        })
        .catch(() => {});
    },
  },
};
</script>
<style scoped>
</style>