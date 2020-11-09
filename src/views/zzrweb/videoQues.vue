<template>
  <div id="videoQues" class="container" style="background-color: #ffffff">
    <div style="width: 80%; margin-left: 10%">
      <div style="margin-left: 10%">
        <el-select v-model="videoLabel" placeholder="请选择">
          <el-option
            v-for="item in chooseOne"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <span
          style="
            margin-left: 20%;
            font-family: 'STSong', '新宋体', 'Arial';
            font-size: 18px;
            font-weight: 600;
          "
          >{{ videoName }}</span
        >
      </div>
    </div>
    <zzrvideo
      :choosevideo="myvideo"
      style="width: 80%; margin-left: 10%"
    ></zzrvideo>
    <div style="width: 80%; margin-left: 10%; height: 30px" />
    <div style="width: 80%; margin-left: 10%; padding-bottom: 30px">
      <el-collapse v-for="item in pagedata" :key="item">
        <el-collapse-item :title="item.questitle" style="font-family: FangSong">
          <div
            v-html="item.quesContent"
            style="background-color: #fcfcfc"
          ></div>
        </el-collapse-item>
      </el-collapse>
    </div>
    <div style="text-align: center; padding-bottom: 20px">
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
import zzrvideo from "./Zzrvideo";
export default {
  name: "videoQues",
  components: {
    zzrvideo,
  },
  data() {
    return {
      myvideo: "../../../static/video/1 痛歼搬仓鼠普通话_高清.mp4",
      activeNames: "1",
      // 分页需要的
      params: {
        page: 1,
        size: 6,
      },
      pagedata: {},
      pagetotal: "",
      videoName: "黑猫警长（1）",
      videoLabel: "",
      chooseOne: [
        {
          value: "选项1",
          label: "选项1",
        },
        {
          value: "选项2",
          label: "选项2",
        },
        {
          value: "选项3",
          label: "选项3",
        },
        {
          value: "选项4",
          label: "选项4",
        },
        {
          value: "选项5",
          label: "选项5",
        },
      ],
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.params.size = val;
      this.pagesques();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.params.page = val;
      this.pagesques();
    },
    pagesques: function () {
      var params = {
        pageCode: this.params.page,
        pageSize: this.params.size,
      };
      getListAPI("zirui/pagesques", params).then((res) => {
        console.log(res);
        this.pagedata = res.list;
        this.pagetotal = res.total;
      });
    },
  },
  mounted() {
    this.pagesques();
  },
};
</script>
<style scoped>
.home {
  width: 1000px;
  margin: 0 auto;
  text-align: center;
}
</style>
