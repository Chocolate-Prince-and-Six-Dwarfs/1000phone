<template>
  <div class="re_content">
    <div class="re_top">
      <img class="re_back" src="../assets/img/recently_back.png" alt="" @click="toHome">
      <span>最近使用</span>
    </div>
    <div style="width: 100%; height: 40px;"></div>
    <div class="re_middle">
      <div class="re_tip" :style="{display: tip_disp}">添加成功</div>
      <div class="re_nav">
        <span class="re_nav_text">常用</span>
      </div>
      <div class="re_item" v-for="(aitem, aindex) in always" :key="aindex">
        <img class="re_item_img" :src="aitem.img">
        <div class="re_item_word">
          <span class="re_item_name">{{aitem.name}}</span>
          <span class="re_item_text" v-if="aitem.text">{{aitem.text}}</span>
          <div class="re_item_icon" v-if="aitem.icon">{{aitem.icon}}</div>
        </div>
      </div>
      <div class="re_nav">
        <span class="re_nav_text">最近使用</span>
      </div>
      <div class="re_item" v-for="(oitem, oindex) in once" :key="oindex + 100">
        <img class="re_item_img" :src="oitem.img">
        <div class="re_item_word">
          <span class="re_item_name">{{oitem.name}}</span>
          <span class="re_item_text" v-if="oitem.text">{{oitem.text}}</span>
          <div class="re_item_icon" v-if="oitem.icon">{{oitem.icon}}</div>
        </div>
        <button class="re_item_button" @click="add(oindex)">{{stat}}</button>
      </div>
    </div>
    <div class="re_bottom">
      <span>已经到底啦~(^_^)~~</span>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        always: [{
            img: require('@/assets/img/shouye/ic_message_todo.png'),
            name: '考试',
            text: '',
            icon: '',
          },
          {
            img: require('@/assets/img/head_notice.png'),
            name: '通知',
            text: '',
            icon: '',
          },
          {
            img: require('@/assets/img/shouye/ic_group_course.png'),
            name: '大学生职业生涯规划',
            text: '',
            icon: '课程',
          },
        ],
        once: [{
            img: require('@/assets/img/shouye/ic_group_course.png'),
            name: '软件工程综合实现与技能实习',
            text: '',
            icon: '课程',
          },
          {
            img: require('@/assets/img/shouye/ic_message_contact.png'),
            name: '最美古诗词',
            text: '',
            icon: '',
          },
          {
            img: require('@/assets/img/shouye/ic_group_course.png'),
            name: '2020大数据处理技术',
            text: '',
            icon: '课程',
          },
          {
            img: require('@/assets/img/shouye/ic_group_course.png'),
            name: '操作系统',
            text: '',
            icon: '课程',
          },
          {
            img: require('@/assets/img/shouye/ic_group_course.png'),
            name: '建设法规',
            text: '',
            icon: '课程',
          },
          {
            img: require('@/assets/img/shouye/ic_group_course.png'),
            name: '文献检索与利用（9-16周）',
            text: '',
            icon: '课程',
          },
          {
            img: require('@/assets/img/shouye/ic_group_course.png'),
            name: 'Linux操作系统基础',
            text: '',
            icon: '课程',
          },
          {
            img: require('@/assets/img/shouye/ic_group_course.png'),
            name: '高等数学',
            text: '',
            icon: '课程',
          },
          {
            img: require('@/assets/img/shouye/ic_group_course.png'),
            name: '形势与政策1',
            text: '',
            icon: '课程',
          },
          {
            img: require('@/assets/img/shouye/ic_group_course.png'),
            name: '人机交互的软件工程方法',
            text: '',
            icon: '课程',
          },
          {
            img: require('@/assets/img/shouye/ic_group_course.png'),
            name: '线性代数',
            text: '',
            icon: '课程',
          },
          {
            img: require('@/assets/img/shouye/ic_group_course.png'),
            name: '马克思主义基本原理概论',
            text: '',
            icon: '课程',
          },
        ],
        stat: '+常用',
        tip_disp: 'none',
      }
    },

    methods: {
      toHome: function() {
        this.$router.replace('/');
      },

      add: function(index) {
        this.always.push(this.once[index]);
        this.once.splice(index, 1);
        this.tip_disp = 'block';
        setTimeout(() => {
          this.tip_disp = 'none';
        }, 1000);
      }
    }
  }
</script>

<style>
  .re_content {
    width: 100%;
    height: 100%;
  }

  .re_top {
    width: 100%;
    height: 40px;
    background-color: rgb(255, 255, 255);
    font-size: 16px;
    line-height: 30px;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .re_back {
    width: 20px;
    height: 20px;
    position: absolute;
    left: 10px;
  }

  .re_middle {
    width: 100%;
  }

  .re_tip {
    width: 100px;
    height: 50px;
    border-radius: 20px;
    background-color: rgb(220, 220, 220, 0.6);
    font-size: 16px;
    line-height: 50px;
    text-align: center;
    position: absolute;
    top: 300px;
    left: calc(50% - 50px);
  }

  .re_nav {
    width: 100%;
    height: 25px;
    background-color: rgb(245, 245, 245);
  }

  .re_nav_text {
    font-size: 10px;
    line-height: 25px;
    color: rgb(150, 150, 150);
    margin-left: 10px;
  }

  .re_item {
    width: 100%;
    height: 50px;
    display: flex;
  }

  .re_item_img {
    width: 35px;
    height: 35px;
    margin: 7.5px 10px 0 10px;
  }

  .re_item_word {
    width: calc(100% - 120px);
    height: 50px;
    display: flex;
    align-items: center;
  }

  .re_item_name {
    font-size: 14px;
  }

  .re_item_text {
    font-size: 10px;
    color: rgb(150, 150, 150);
  }

  .re_item_icon {
    width: 28px;
    height: 16px;
    border-radius: 25px;
    border: 1px solid rgb(150, 150, 150);
    font-size: 10px;
    line-height: 16px;
    text-align: center;
    color: rgb(150, 150, 150);
    margin: 0 0 0 10px;
  }

  .re_item_button {
    width: 50px;
    height: 25px;
    background-color: rgb(255, 255, 255);
    border-radius: 8px;
    border: 1px solid rgb(100, 150, 240);
    font-size: 10px;
    line-height: 25px;
    color: rgb(100, 150, 240);
    margin: 12.5px 0 0 10px;
  }

  .re_bottom {
    width: 100%;
    height: 30px;
    background-color: rgb(245, 245, 245, 0.5);
    font-size: 10px;
    line-height: 30px;
    color: rgb(150, 150, 150);
    display: flex;
    justify-content: center;
  }
</style>
