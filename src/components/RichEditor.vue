
<template>
  <div class="edit_container">
    <div>
      <el-input v-model="inputTitle" placeholder="请输入标题"></el-input>
    </div>
    <!--  新增时输入 -->
    <div>
      <quill-editor
        v-loading="loading"
        style="background-color: #faf0e6"
        v-model="editorcontent"
        ref="myQuillEditor"
        :options="editorOption"
        @blur="onEditorBlur($event)"
        @focus="onEditorFocus($event)"
        @change="onEditorChange($event)"
      >
      </quill-editor>
    </div>
    <!-- 从数据库读取展示 -->
    <div style="margin-bottom: 20px">
      <span style="margin-left: 35%">文章类型：</span>
      <el-select v-model="labelvalue" placeholder="请选择文章类型">
        <el-option
          v-for="item in labeloption"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <div style="margin-bottom: 20px">
      <span style="margin-left: 35%">发布区域：</span>
      <el-select v-model="partvalue" placeholder="请选择发布区域">
        <el-option
          v-for="part in partoption"
          :key="part.value"
          :label="part.label"
          :value="part.value"
        >
        </el-option>
      </el-select>
    </div>
    <div style="padding-bottom: 20px">
      <el-button
        type="primary"
        plain
        style="margin-left: 40%"
        @click="saveRichEditor"
        >保存</el-button
      >
      <el-button type="info" plain style="margin-left: 5%" @click="returnHome"
        >返回首页</el-button
      >
    </div>
  </div>
</template>
<script>
import { quillEditor } from "vue-quill-editor"; //调用编辑器
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { getListAPI, postListAPI } from "@/api/api";

export default {
  components: {
    quillEditor,
  },
  watch: {},
  data() {
    return {
      //内容
      editorcontent: `<p></p><p><br></p><ol><li><strong><em>Or drag/paste an image here.</em></strong></li><li><strong><em>rerew</em></strong></li><li><strong><em>rtrete</em></strong></li><li><strong><em>tytrytr</em></strong></li><li><strong><em>uytu</em></strong></li></ol>`,
      //标题
      inputTitle: "",
      editorOption: {},
      //两个都是选择类型
      labelvalue: "",
      partvalue: "",
      partoption: [
        {
          value: "article",
          label: "话题区",
        },
        {
          value: "ques",
          label: "每日小题",
        },
      ],
      labeloption: [
        {
          value: "前端",
          label: "前端",
        },
        {
          value: "后端",
          label: "后端",
        },
        {
          value: "阅读",
          label: "阅读",
        },
      ],
    };
  },
  methods: {
    onEditorReady(editor) {
      // 准备编辑器
    },
    onEditorBlur() {}, // 失去焦点事件
    onEditorFocus() {}, // 获得焦点事件
    onEditorChange() {}, // 内容改变事件
    // 转码
    escapeStringHTML(str) {
      str = str.replace(/&lt;/g, "<");
      str = str.replace(/&gt;/g, ">");
      return str;
    },
    saveRichEditor() {
      if (
        this.inputTitle == "" ||
        this.editorcontent == "" ||
        this.labelvalue == "" ||
        this.partvalue == ""
      ) {
        this.$message({
          message: "仍有未输入的内容，请查证后补全- -",
          type: "warning",
        });
        return;
      }

      if (this.partvalue == "article") {
        var params = {
          arttitle: this.inputTitle,
          artContent: this.editorcontent,
          artlabel: this.labelvalue,
        };
        postListAPI("zirui/richarticle", params)
          .then((res) => {
            if (res === "success") {
              this.$message({
                message: "话题区已发表",
                type: "success",
              });
              this.$router.push("/journal");
            } else {
              this.$message.error("话题区发表失败，服务器正在维护");
            }
          })
          .catch((err) => alert(err));
      } else if (this.partvalue == "ques") {
        var params = {
          questitle: this.inputTitle,
          quesContent: this.editorcontent,
          artlabel: this.labelvalue,
        };
        postListAPI("zirui/richques", params)
          .then((res) => {
            console.log(res);
            if (res === "success") {
              this.$message({
                message: "每日小题已发表",
                type: "success",
              });
              this.$router.push("/videoQues");
            } else {
              this.$message.error("每日小题发表失败，服务器正在维护");
            }
          })
          .catch((err) => alert(err));
      }

      console.log(this.articlevalue);
    },
    returnHome() {
      this.$router.push("/");
    },
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    },
  },
  mounted() {
    let content = ""; // 请求后台返回的内容字符串
    // this.str = this.escapeStringHTML(content);
  },
};
</script>