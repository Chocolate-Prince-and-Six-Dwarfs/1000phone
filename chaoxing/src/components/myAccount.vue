<template>
  <div class="account">
      <div class="account-head">
          <div class="drawback">
              <router-link to="/my">
                <img class="drawback-img" src="../assets/img/jt.png" alt="">
              </router-link>
          </div>
          <div class="head-text">
              <div>账号管理</div>
          </div>
      </div>
      <div class="account-main">
          <div class="avater"></div>
          <div class="name"></div>
          <div class="sex"></div>
          <div class="description"></div>
          <div class="phoneNum">
              <div class="phoneNum-line"></div>
              <div class="phoneNum-text"></div>
          </div>
          <div class="work">
              <div class="work-line"></div>
              <div class="work-text"></div>
          </div>
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
        height: 59px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #dddddd;
    }
    .drawback{
        float: left;
        margin-left:10px;
    }
    .drawback-img{
        width: 25px;
        height: 25px;
    }
    .head-text{
        width: 300px;
        height: 65px;
        display: flex;
        font-size: 17px;
        font-weight: 525;
        justify-content: center; 
        align-items: center;
    }
    .avater{
        width: 91%;
        height:65px;
        margin-left: 4.5%;
        margin-right: 4.5%;
        background-color: yellowgreen;
        border-bottom: 1px solid #dddddd;
    }
    .name, .sex, .description{
        width: 91%;
        height:45px;
        margin-left: 4.5%;
        margin-right: 4.5%;
        background-color: rgb(104, 50, 205);
        border-bottom: 1px solid #dddddd;
    }    
/*     .phoneNum{
        width:100%;
        height:52px;
    } */
    .phoneNum-line{
        width:100%;
        height:7px;
        background-color:#f4f7f7;
    }
    .phoneNum-text{
        width:100%;
        height:45px; 
        background-color: rgb(50, 205, 192);
    }
/*     .work{
        width:100%;
        height:87px;
    } */
    .work-line{
        width:100%;
        height:27px;
        background-color:#f4f7f7;
    }
    .work-text{
        width:100%;
        height:60px; 
        background-color: rgb(50, 205, 192);
    }
</style>