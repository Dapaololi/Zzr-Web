<template>
  <div
    id="journal"
    style="
      background-color: #ffffe0;
      margin-left: 5%;
      width: 90%;
      text-align: center;
      box-shadow: 2px 2px 5px #000;
    "
  >
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">热门</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">最新</a></el-breadcrumb-item>
      <el-breadcrumb-item>前端</el-breadcrumb-item>
      <el-breadcrumb-item>后端</el-breadcrumb-item>
      <el-breadcrumb-item>阅读</el-breadcrumb-item>
    </el-breadcrumb>
    <el-carousel
      :interval="4000"
      type="card"
      height="150px"
      style="width: 80%; margin-left: 10%"
    >
      <el-carousel-item v-for="item in carouselContent" :key="item">
        <img style="width: 100%; height: 100%" :src="item.src" />
        <span
          style="
            top: 50%;
            left: 35%;
            z-index: 999;
            position: absolute;
            color: #ffdab9;
            font-family: FangSong;
          "
          >{{ item.item }}</span
        >
      </el-carousel-item>
    </el-carousel>
    <div>
      <el-row
        style="width: 80%; margin-left: 10%;padding-top:20px;padding-bottom：20px;"
      >
        <el-col
          v-for="item in this.pagedata"
          :key="item"
          style="padding-bottom: 20px"
        >
          <el-card
            :body-style="{ padding: '0px' }"
            shadow="hover"
            @click.native="showArticle(item)"
          >
            <img src="../../assets/images/kda.jpg" class="image" height="400" />
            <div style="padding: 14px">
              <span style="font-family: KaiTi; color: #ee82ee">{{
                item.arttitle
              }}</span>
              <div class="bottom clearfix">
                <time class="time">{{ item.createTime }}</time>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-skeleton avatar :paragraph="{ rows: 4 }" />
    </div>
    <div>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="this.params.page"
        :page-sizes="[3, 6]"
        :page-size="this.params.size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="this.pagetotal"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getListAPI, postListAPI } from "@/api/api";
export default {
  name: "journal",
  data() {
    return {
      // currentDate: "2012 - 01 - 01",
      params: {
        page: 1,
        size: 6,
      },
      pagedata: {},
      pagetotal: "",
      // 走马灯
      carouselContent: [
        {
          src: require("../../assets/images/jiqiz.jpg"),
          item: "碧蓝航线",
        },
        {
          src: require("../../assets/images/qishi.jpg"),
          item: "关于Img标签绑定:src不显示图片",
        },
        {
          src: require("../../assets/images/1575029102048.png"),
          item: "随便加的辣",
        },
      ],
    };
  },
  mounted() {
    this.pagehelper();
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.params.size = val;
      this.pagehelper();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.params.page = val;
      this.pagehelper();
    },
    pagehelper: function () {
      var params = {
        pageCode: this.params.page,
        pageSize: this.params.size,
      };
      getListAPI("zirui/pageshelpe", params).then((res) => {
        console.log(res);
        this.pagedata = res.list;
        this.pagetotal = res.total;
      });
    },
    showArticle(val) {
      console.log(val);
      let routeData = this.$router.resolve({
        name: "zzrarticle",
        query: {
          id: val.id,
        },
      });
      window.open(routeData.href, "_blank");
    },
  },
};
</script>>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 260px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #76eec6;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #b4eeb4;
}
</style>