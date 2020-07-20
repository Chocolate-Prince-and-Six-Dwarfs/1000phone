<template>
  <div class="allpage">

     <!-- 页面头部 -->
    <div class="header1">
      <div class="messageheader">
        <span class="title">消息</span>
        <div class="options">
          <span>+</span>
        </div>
        <div class="line"></div>
      </div>
    </div>


    <div class="pageMain">
      <!-- 搜索框 -->
      <div class="searchBar" @click="clickToSearch('找应用')">
        <img class="searchImg" src="../assets/img/xiaoxi/3.png" alt=""/>
        <span class="searchText">搜索</span>
      </div>

      <!-- 页面主体 -->
      <div class="message">
        <div class="message-item">
          <img class="message-item-pic" src="../assets/img/xiaoxi/ic_message_contact.png" alt=""/>
          <span class="message-item-name">通讯录</span>
        </div>

        <div class="message-item">
          <img class="message-item-pic" src="../assets/img/xiaoxi/ic_message_contact.png" alt=""/>
          <span class="message-item-name">收件箱</span>
        </div>

        <div class="class-item">
          <img class="class-item-pic" src="../assets/img/xiaoxi/class.jpg" alt=""/>
          <div class="class-item-info">
            <div class="class-item-name">
              <span >软件工程综合实习与技能实习</span>
            </div>

            <span class="class-item-time">6小时前</span>

            <div class="class-teacher">
              <span class="class-teacher-info">王兵:[签到]</span>
            </div>

          </div>

        </div>

        <div class="class-item">
          <img class="class-item-pic" src="../assets/img/xiaoxi/class.jpg" alt=""/>
          <div class="class-item-info">
            <div class="class-item-name">
              <span >Linux操作系统基础</span>
            </div>
            <span class="class-item-time">06-17</span>

            <div class="class-teacher">
              <span class="class-teacher-info">罗琴:[课堂测试6]</span>
            </div>

          </div>

        </div>

        <div class="class-item">
          <img class="class-item-pic" src="../assets/img/xiaoxi/class.jpg" alt=""/>
          <div class="class-item-info">
            <div class="class-item-name">
              <span >2020大数据处理技术</span>
            </div>
            <span class="class-item-time">06-13</span>

            <div class="class-teacher">
              <span class="class-teacher-info">赖俊良:[实验7]</span>
            </div>

          </div>

        </div>

        <div class="class-item">
          <img class="class-item-pic" src="../assets/img/xiaoxi/class.jpg" alt=""/>
          <div class="class-item-info">
            <div class="class-item-name">
              <span >2020大数据处理技术</span>
            </div>
            <span class="class-item-time">06-13</span>

            <div class="class-teacher">
              <span class="class-teacher-info">赖俊良:[实验7]</span>
            </div>

          </div>

        </div>

        <div class="class-item">
          <img class="class-item-pic" src="../assets/img/xiaoxi/class.jpg" alt=""/>
          <div class="class-item-info">
            <div class="class-item-name">
              <span >2020大数据处理技术</span>
            </div>
            <span class="class-item-time">06-13</span>

            <div class="class-teacher">
              <span class="class-teacher-info">赖俊良:[实验7]</span>
            </div>

          </div>

        </div>

        <div class="class-item">
          <img class="class-item-pic" src="../assets/img/xiaoxi/class.jpg" alt=""/>
          <div class="class-item-info">
            <div class="class-item-name">
              <span >2020大数据处理技术</span>
            </div>
            <span class="class-item-time">06-13</span>

            <div class="class-teacher">
              <span class="class-teacher-info">赖俊良:[实验7]</span>
            </div>

          </div>

        </div>

      </div>
    </div>

    <!-- 底部导航栏 -->
     <v-navbar :navIndex="1"></v-navbar>
  </div>

</template>

<script>
  import navBar from './compontentPage/NavBar.vue'

  export default {
    data(){
        return {
            index: 0,
            }
    },

    methods:{
      clickToSearch: function(title){
          this.$router.push({
              path: '/search',
              query: {
                  title: title
              }
          })
      }
    },

    components:{
      'v-navbar':navBar
    }
  }
</script>

<style>
  .allpage{
    width: 100%;
    height: 100%;
  }
  .header1{
    width: 100%;
    height: 60px;
  }
  .messageheader{
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    position: fixed;
    background-color: white;
    z-index: 999;
  }
  .title{
    margin-top: 18px;
    height: 23px;
    font-size: 23px;
    margin-bottom: 18px;
  }
  .options{
    height: 35px;
    font-size: 35px;
    position: absolute;
    right: 10px;
    margin-top: 10px;
    font-weight: 100;
  }

  .line{
    position: absolute;
    width: 100%;
    border-bottom: 1px solid #f1f3f7;
    margin-top: 60px;
  }

  .pageMain{
    width: 100%;
    height: 1000px;
  }
  .searchBar{
    height: 38px;
    text-align: center;
    background-color: #F8F8FF;
    border-radius: 40px;
    margin-top: 13px;
    margin-right: 15px;
    margin-left: 15px;
    margin-bottom: 20px;
    padding: 2px;
  }
  .searchImg{
    width: 15px;
    height: 15px;
    margin-top: 10px;
  }
  .searchText{
    color: #D3D3D3;
  }

  .message-item{
    width: 100%;
    display: flex;
    /* margin-left: 18px; */
    margin-top: 27px;
    margin-bottom: 32px;
  }
  .message-item-pic{
    width: 50px;
    height: 50px;
    margin-left: 18px;
  }
  .message-item-name{
    margin-top: 15px;
    margin-left: 14px;
  }

  .class-item{
    width: 100%;
    display: flex;
    /* margin-left: 18px; */
    margin-top: 27px;
    margin-bottom: 32px;
  }
  .class-item-pic{
    width: 50px;
    height: 50px;
    margin-left: 18px;
  }
  .class-item-info{
    width: 100%;
    position: relative;
  }
  .class-item-name{
    margin-left: 14px;
    width: calc(100% - 60px);

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .class-item-time{
    color: #BEBEBE;
    position: absolute;
    right: 25px;
  }

  .class-teacher{
    color: #BEBEBE;
    margin-top: 10px;
    margin-left: 15px;
  }
</style>
