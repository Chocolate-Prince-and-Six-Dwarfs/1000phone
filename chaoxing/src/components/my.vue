<template>
  <div class="my">
    <!-- 头部栏 -->
    <span class="my-head">我</span>
    <!-- 个人信息栏 -->
    <!-- 跳转到myAccount页面 -->
    <div class="my-wrapper">
      <router-link to="/myAccount">
        <div class="my-info">
          <img class="my-photo" src="../assets/img/wo/default_head.png"/>
          <span class="my-name">我是陶老板</span>
        </div>
          <img src="../assets/img/wo/ic_goto.png" class="goto-button"/>
      </router-link>
    </div>
    <!-- 选项栏 -->
    <div class="list-wrapper">
      <div class="list-item">

        <div class="item">
          <div class="item-context">
            <img src="../assets/img/wo/ic_my_schedule.png"/>
            <span class="item-text">待办事项</span>
          </div>
          <img src="../assets/img/wo/ic_goto.png" class="goto-button"/>
        </div>
        <!-- 跳转至课程页面 -->
        <router-link to="/myCourse">
        <div class="item">
          <div class="item-context">
            <img src="../assets/img/wo/ic_my_learnrecord.png"/>
            <span class="item-text">课程</span>
          </div>
          <img src="../assets/img/wo/ic_goto.png" class="goto-button"/>
        </div>
        </router-link>
        <div class="item">
          <div class="item-context">
            <img src="../assets/img/wo/ic_my_yunpan.png"/>
            <span class="item-text">云盘</span>
          </div>
          <img src="../assets/img/wo/ic_goto.png" class="goto-button"/>
        </div>
        <div class="item">
          <div class="item-context">
            <img src="../assets/img/wo/ic_my_group.png"/>
            <span class="item-text">小组</span>
          </div>
          <img src="../assets/img/wo/ic_goto.png" class="goto-button"/>
        </div>
        <div class="item">
          <div class="item-context">
            <img src="../assets/img/wo/ic_my_note.png"/>
            <span class="item-text">笔记本</span>
          </div>
          <img src="../assets/img/wo/ic_goto.png" class="goto-button"/>
        </div>
        <div class="item">
          <div class="item-context">
            <img src="../assets/img/wo/ic_my_setting.png"/>
            <span class="item-text">设置</span>
          </div>
          <img src="../assets/img/wo/ic_goto.png" class="goto-button"/>
        </div>
      </div>
    </div>
    <v-NavBar :navIndex="3"></v-NavBar>
  </div>
</template>

<script>
  // 引用底部导航组件
  import NavBar from './compontentPage/NavBar.vue'
export default {
  components:{
    'v-NavBar': NavBar
  }
}
</script>

<style>
.my{
  width: 100%;
  height: 100%;
  background-color: #eeeeee;
  display: flex;
  flex-direction: column;
}
.my-head{
  width: 100%;
  height: 23px;
  padding-top: 16px;
  padding-bottom: 16px;
  margin-bottom: 1px;
  font-size: 23px;
  text-align: center;
  background-color: #ffffff;
}
.my-wrapper{
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content:space-between;
  background-color: #ffffff;
  margin-bottom: 10px;
}
.my-info{
  display: flex;
  align-items: center;
}
.my-photo{
  width: 50px;
  height: 50px;
  margin: 15px;
  border-radius: 90px;
  }
.my-name{
  font-size: 1.2em;
}
.goto-button{
  height: 15px;
  width: 15px;
  margin: 10px;
}
.list-item{
  width: 100%;
}
.item{
  width: 100%;
  height: 50px;
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
}
.item-context{
  width: 100%;
  display: flex;
  align-items: center;
}
.item-context img{
  width: 40px;
  height: 40px;
  margin: 15px;
}
a{
  width: 100%;
  text-decoration: none;   /* 清除a标签的下划线 */
  display: flex;
  align-items: center;
  justify-content:space-between;
  color: #000000;
}
</style>
