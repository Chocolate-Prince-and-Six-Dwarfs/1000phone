<template>
  <div class="my">
    <div class="my-head">我</div>
    <div class="my-wrapper">
      <div class="my-info">
        <img class="my-photo" src="../assets/img/wo/default_head.png"/>
        <div class="my-name">我是陶老大</div>
      </div>
      <div class="goto-button">></div>
    </div>
    <div class="list-wrapper">
      <div class="list-item">
        <div class="item">
          <div class="item-context">
            <img src="../assets/img/wo/ic_my_schedule.png"/>
            <div class="item-text">待办事项</div>
          </div>
          <div class="goto-button">></div>
        </div>
        <div class="item">
          <div class="item-context">
            <img src="../assets/img/wo/ic_my_learnrecord.png"/>
            <div class="item-text">课程</div>
          </div>
          <div class="goto-button">></div>
        </div>
        <div class="item">
          <div class="item-context">
            <img src="../assets/img/wo/ic_my_yunpan.png"/>
            <div class="item-text">云盘</div>
          </div>
          <div class="goto-button">></div>
        </div>
        <div class="item">
          <div class="item-context">
            <img src="../assets/img/wo/ic_my_group.png"/>
            <div class="item-text">小组</div>
          </div>
          <div class="goto-button">></div>
        </div>
        <div class="item">
          <div class="item-context">
            <img src="../assets/img/wo/ic_my_note.png"/>
            <div class="item-text">笔记本</div>
          </div>
          <div class="goto-button">></div>
        </div>
        <div class="item">
          <div class="item-context">
            <img src="../assets/img/wo/ic_my_setting.png"/>
            <div class="item-text">设置</div>
          </div>
          <div class="goto-button">></div>
        </div>
      </div>
    </div>
    <v-NavBar :navIndex="3"></v-NavBar>
  </div>
</template>

<script>
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
  height: 24px;
  margin-bottom: 1px;
  font-size: 1.2em;
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
  font-size: 2em;
  margin: 10px;
  color: #d4d4d4;
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
.item img{
  width: 40px;
  height: 40px;
  margin: 15px;
}
</style>
