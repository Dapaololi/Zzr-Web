<template>
  <div
    id="zzrarticle"
    style="background-color: #fffaf0; margin-left: 5%; width: 90%"
  >
    <el-container>
      <el-header style="box-shadow: 4px 6px 5px #fff8dc"
        ><div
          style="
            margin-top: 20px;
            text-align: center;
            font-family: KaiTi;
            font-size: 18px;
            font-weight: 600;
          "
        >
          {{ this.arttitle }}
        </div>
        <div style="background-color: #fffacd; margin-top: 20px">
          <div style="font-family: FangSong">作者：{{ this.zzruser }}</div>
          <div style="font-family: FangSong">标签：{{ this.artlabel }}</div>
        </div>
      </el-header>
      <el-main>
        <el-divider></el-divider>
        <div v-html="this.artContent"></div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { getListAPI, postListAPI } from "@/api/api";
export default {
  name: "zzrarticle",
  data() {
    return {
      // 文章id
      artid: "",
      //文章内容
      artContent: "",
      // 文章标题
      arttitle: "",
      //文章作者
      zzruser: "",
      //文章分类
      artlabel: "",
      //图片地址
      artimageurl: "",
    };
  },
  mounted() {
    var params = {
      id: this.$route.query.id,
    };
    getListAPI("zirui/selectArticle", params)
      .then((res) => {
        console.log(res);
        this.arttitle = res.arttitle;
        this.artContent = res.artContent;
        this.zzruser = res.zzruser;
        this.artlabel = res.artlabel;
        this.artimageurl = res.artimageurl;
      })
      .catch((e) => alert(e));
  },
  methods: {},
};
</script>