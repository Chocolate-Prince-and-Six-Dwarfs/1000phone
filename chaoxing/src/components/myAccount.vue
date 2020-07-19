<template>
  <div class="account">
      <div class="account-head">
          <div class="drawback">
              <img class="drawback-img" src="../assets/img/jt.png" alt="">
          </div>
          <div class="head-text">账号管理</div>
      </div>
      <div class="account-main">
          <div class="avater"></div>
          <div class="name"></div>
          <div class="sex"></div>
          <div class="description"></div>
          <div class="phoneNum"></div>
          <div class="work"></div>
          <div class="wallet"></div>
          <div class="cancel"></div>
      </div>
      <div class="account-bottom"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .account-head{
        width: 100%;
        height: 65px;
        display: flex;
        align-items: center;
    }
    .drawback{
        float: left;
    }
    .drawback-img{
        width: 25px;
        height: 25px;
    }
</style>