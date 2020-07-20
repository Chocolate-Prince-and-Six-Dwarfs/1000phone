<template>
  <div class="reD_content">
    <div class="reD_top">
      <img class="reD_back" src="../assets/img/recently_back.png" @click="toRecently">
      <span>详情</span>
    </div>
    <div style="width: 100%; height: 40px;"></div>
    <div class="reD_middle">
      <div class="reD_text1">什么？？？</div>
      <div class="reD_text1">难道你。。。</div>
      <div class="reD_text2">也想一起起舞吗</div>
      <div class="reD_text2">当然，是和陶老板一起</div>
    </div>
    <div class="reD_message">{{message}}</div>
    <div class="reD_bottom">
      <div class="reD_dancer" :style="{'margin-top': d_top + '%', 'margin-left': d_left + '%'}" @click="dancer">陶老板</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message_list: ['哎，我跑了', '没逮到', '来抓我啊', '还是没逮着'],
        message: '',
        d_top: 10,
        d_left: 10,
      }
    },

    methods: {
      toRecently: function() {
        this.$router.replace('/recently');
      },

      dancer: function() {
        var tmp = parseInt(Math.random() * 4);
        this.d_top = Math.random() * 80;
        this.d_left = Math.random() * 80;
        this.message = this.message_list[tmp];
      }
    }
  }
</script>

<style>
  .reD_content {
    width: 100%;
    height: 100%;
  }

  .reD_top {
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

  .reD_back {
    width: 20px;
    height: 20px;
    position: absolute;
    left: 10px;
  }

  .reD_middle {
    width: 100%;
    height: 220px;
    background-color: rgb(245, 245, 245);
  }

  .reD_text1 {
    width: 100%;
    height: 50px;
    color: rgb(150, 150, 150);
    font-size: 14px;
    font-weight: bold;
    line-height: 50px;
    text-align: center;
  }

  .reD_text2 {
    width: 100%;
    height: 50px;
    font-size: 16px;
    font-weight: bold;
    line-height: 50px;
    text-align: center;
  }

  .reD_message {
    width: 100%;
    height: 40px;
    font-size: 14px;
    line-height: 40px;
    text-align: center;
  }

  .reD_bottom {
    width: 100%;
    height: calc(100% - 300px);
  }

  .reD_dancer {
    width: 50px;
    height: 50px;
    border-radius: 25px;
    border: 1px solid rgb(150, 150, 200);
    font-size: 14px;
    line-height: 50px;
    text-align: center;
    position: absolute;
  }
</style>
