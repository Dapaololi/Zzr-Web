<template>
  <div
    id="zzrmessage"
    style="
      background-color: #faebd7;
      margin-left: 5%;
      width: 90%;
      box-shadow: 2px 2px 5px #000;
    "
  >
    <div class="container">
      <i class="el-icon-phone-outline"></i>
      <span>😒😵😠😟</span>
      <i class="el-icon-sold-out\r\n"></i>
      <i class="el-icon-service\r\n"></i>
      <i class="fa fa-clipboard fa-x fa-fw"></i>
      <div class="comment" v-for="item in this.messagecomment" :key="item">
        <div class="info">
          <img class="avatar" :src="item.fromAvatar" width="36" height="36" />
          <div class="right">
            <div class="name">{{ item.fromName }}</div>
            <div class="date">{{ item.date }}</div>
          </div>
        </div>
        <div class="content">{{ item.content }}</div>
        <div class="control">
          <span
            class="like"
            :class="{ active: item.isLike }"
            @click="likeClick(item)"
          >
            <i class="iconfont icon-like"></i>
            <span class="like-num">{{
              item.likeNum > 0 ? item.likeNum + "人赞" : "赞"
            }}</span>
          </span>
          <span class="comment-reply" @click="showCommentInput(item)">
            <i class="iconfont icon-comment"></i>
            <span>回复</span>
          </span>
        </div>
        <div class="reply">
          <div class="item" v-for="reply in item.reply" :key="reply">
            <div class="reply-content">
              <span class="from-name">{{ reply.fromName }}</span
              ><span>: </span>
              <span class="to-name">@{{ reply.toName }}</span>
              <span>{{ reply.content }}</span>
            </div>
            <div class="reply-bottom">
              <span>{{ reply.date }}</span>
              <span class="reply-text" @click="showCommentInput(item, reply)">
                <i class="iconfont icon-comment"></i>
                <span>回复</span>
              </span>
            </div>
          </div>
          <div
            class="write-reply"
            v-if="item.reply.length > 0"
            @click="showCommentInput(item)"
          >
            <i class="el-icon-edit"></i>
            <span class="add-comment">添加新评论</span>
          </div>
          <transition name="fade">
            <div class="input-wrapper" v-if="showItemId === item.id">
              <el-input
                class="gray-bg-input"
                v-model="inputComment"
                type="textarea"
                :rows="3"
                autofocus
                placeholder="写下你的评论"
              >
              </el-input>
              <div class="btn-control">
                <span class="cancel" @click="cancel">取消</span>
                <el-button
                  class="btn"
                  type="success"
                  round
                  @click="commitComment"
                  >确定</el-button
                >
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";

export default {
  props: {
    comments: {
      type: Array,
      required: true,
    },
  },
  components: {},
  data() {
    return {
      inputComment: "",
      showItemId: "",
      messagecomment: [
        {
          id: "comment0001", //主键id
          date: "2018-07-05 08:30", //评论时间
          ownerId: "talents100020", //文章的id
          fromId: "errhefe232213", //评论者id
          fromName: "犀利的评论家", //评论者昵称
          fromAvatar:
            "http://ww4.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2pddjuj30v90uvagf.jpg", //评论者头像
          likeNum: 3, //点赞人数
          content: "非常靠谱的程序员", //评论内容
          reply: [
            //回复，或子评论
            {
              id: "34523244545", //主键id
              commentId: "comment0001", //父评论id，即父亲的id
              fromId: "observer223432", //评论者id
              fromName: "夕阳红", //评论者昵称
              fromAvatar:
                "https://wx4.sinaimg.cn/mw690/69e273f8gy1ft1541dmb7j215o0qv7wh.jpg", //评论者头像
              toId: "errhefe232213", //被评论者id
              toName: "犀利的评论家", //被评论者昵称
              toAvatar:
                "http://ww4.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2pddjuj30v90uvagf.jpg", //被评论者头像
              content: "赞同，很靠谱，水平很高", //评论内容
              date: "2018-07-05 08:35", //评论时间
            },
            {
              id: "34523244545",
              commentId: "comment0001",
              fromId: "observer567422",
              fromName: "清晨一缕阳光",
              fromAvatar:
                "http://imgsrc.baidu.com/imgad/pic/item/c2fdfc039245d688fcba1b80aec27d1ed21b245d.jpg",
              toId: "observer223432",
              toName: "夕阳红",
              toAvatar:
                "https://wx4.sinaimg.cn/mw690/69e273f8gy1ft1541dmb7j215o0qv7wh.jpg",
              content: "大神一个！",
              date: "2018-07-05 08:50",
            },
          ],
        },
        {
          id: "comment0002",
          date: "2018-07-05 08:30",
          ownerId: "talents100020",
          fromId: "errhefe232213",
          fromName: "毒蛇郭德纲",
          fromAvatar:
            "http://ww1.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2q2p8pj30v90uzmzz.jpg",
          likeNum: 0,
          content: "从没见过这么优秀的人",
          reply: [],
        },
      ],
    };
  },
  computed: {},
  methods: {
    /**
     * 点赞
     */
    likeClick(item) {
      if (item.isLike === null) {
        Vue.$set(item, "isLike", true);
        item.likeNum++;
      } else {
        if (item.isLike) {
          item.likeNum--;
        } else {
          item.likeNum++;
        }
        item.isLike = !item.isLike;
      }
    },

    /**
     * 点击取消按钮
     */
    cancel() {
      this.showItemId = "";
    },

    /**
     * 提交评论
     */
    commitComment() {
      console.log(this.inputComment);
    },

    /**
     * 点击评论按钮显示输入框
     * item: 当前大评论
     * reply: 当前回复的评论
     */
    showCommentInput(item, reply) {
      if (reply) {
        this.inputComment = "@" + reply.fromName + " ";
      } else {
        this.inputComment = "";
      }
      this.showItemId = item.id;
    },
  },
  created() {
    console.log(this.comments);
  },
};
</script>

<style scoped>
.container {
  padding: 0 10px;
  box-sizing: border-box;
}
.comment {
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-bottom: 1px solid #f2f6fc;
}
.info {
  display: flex;
  align-items: center;
}
.avatar {
  border-radius: 50%;
}
.right {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}
.name {
  font-size: 16px;
  color: #409eff;
  margin-bottom: 5px;
  font-weight: 500;
}
.date {
  font-size: 12px;
  color: #909399;
}
.content {
  font-size: 16px;
  color: #409eff;
  line-height: 20px;
  padding: 10px 0;
}
.control {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #909399;
}
.like {
  display: flex;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
}
.iconfont {
  font-size: 14px;
  margin-right: 5px;
}
.comment-reply {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.comment-reply:hover {
  color: #333;
}
.iconfont {
  font-size: 16px;
  margin-right: 5px;
}
.reply {
  margin: 10px 0;
  border-left: 2px solid #dcdfe6;
}
.item {
  margin: 0 10px;
  padding: 10px 0;
  border-bottom: 1px dashed #ebeef5;
}
.reply-content {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #409eff;
}
.from-name {
  color: #409eff;
}
.to-name {
  color: #409eff;
  margin-left: 5px;
  margin-right: 5px;
}
.reply-bottom {
  display: flex;
  align-items: center;
  margin-top: 6px;
  font-size: 12px;
  color: #909399;
}
.reply-text {
  display: flex;
  align-items: center;
  margin-left: 10px;
  cursor: pointer;
}
.reply-text:hover {
  color: #333;
}
.icon-comment {
  margin-right: 5px;
}
.write-reply {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #909399;
  padding: 10px;
  cursor: pointer;
}
.write-reply:hover {
  color: #409eff;
}
.el-icon-edit {
  margin-right: 5px;
}
.fade-enter-active,
fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.input-wrapper {
  padding: 10px;
}
.gray-bg-input,
.el-input__inner {
  /*background-color: #67C23A;*/
}
.btn-control {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 10px;
}
.cancel {
  font-size: 16px;
  color: #606266;
  margin-right: 20px;
  cursor: pointer;
}
.cancel:hover {
  color: #333;
}
.confirm {
  font-size: 16px;
}
</style>