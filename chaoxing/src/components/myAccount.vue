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
          <div class="avater">
              <span class="main-text">头像</span>
              <img class="avater-pic" src="../assets/img/wo/default_head.png"/>
              <img class="goto" src="../assets/img/jt2.png"/>
          </div>
          <div class="name">
              <span class="main-text">姓名</span>
              <div class="name-text">陶老板</div>
          </div>
          <div class="sex">
              <span class="main-text">性别</span>
              <div class="textinfo">男</div>
              <img class="goto" src="../assets/img/jt2.png"/>
          </div>
          <div class="description">
              <span class="main-text">描述</span>
              <div class="textinfo">陶老板牛的啊</div>
              <img class="goto" src="../assets/img/jt2.png"/>
          </div>
          <div class="phoneNum">
              <div class="phoneNum-line"></div>
              <div class="phoneNum-text">
                  <span class="main-text">手机号</span>
                  <div class="textinfo" id="phoneinfo">88888888</div>
                  <img class="goto" src="../assets/img/jt2.png"/>
              </div>
          </div>
          <div class="work">
              <div class="work-line">
                  <div class="work-main-text">
                      <span class="main-text">单位</span>
                      <div class="work-add">+</div>
                  </div>
              </div>
              <div class="work-text">
                  <div>西南石油大学<br/>学号/工号：000000000001</div> 
              </div>
          </div>
          <div class="wallet">
              <div class="wallet-line"></div>
              <div class="wallet-text">
                  <span class="main-text">钱包</span>
                  <div class="wallet-info">0元</div>
                  <img class="goto" src="../assets/img/jt2.png"/>
              </div>
          </div>
          <div class="cancel">
              <div class="cancel-line"></div>
              <div class="cancel-text">
                  <span class="main-text">账号注销</span>
                  <img class="goto" src="../assets/img/jt2.png"/>
              </div>
          </div>
      </div>
      <div class="account-bottom">
          <button class="logout">退出登录</button>
      </div>
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
        width: 94%;
        height:65px;
        margin-left: 3%;
        margin-right: 3%;
        border-bottom: 1px solid #dddddd;
        display: flex;
        align-items: center;
    }
    .avater-pic{
        position:absolute;
        right: 35px;
        width:50px;
        height: 50px;
    }
    .name, .sex{
        width: 94%;
        height:45px;
        margin-left: 3%;
        margin-right: 3%;
        border-bottom: 1px solid #dddddd;
        display: flex;
        align-items: center;
    }    
    .description{
        width: 94%;
        height:45px;
        margin-left: 3%;
        margin-right: 3%;
        display: flex;
        align-items: center;
    }
    .phoneNum{
        width:100%;
        height:52px;
    }
    .phoneNum-line{
        width:100%;
        height:7px;
        background-color:#f4f7f7;
    }
    .phoneNum-text{
        width:100%;
        height:45px; 
        display: flex;
        align-items: center;
        margin-left: 10px;
    }
    .work{
        width:100%;
        height:87px;
    }
    .work-line{
        width:100%;
        height:27px;
        background-color:#f4f7f7;
        display: flex;
        align-items: center;
    }
    .work-main-text{
        margin-left: 10px;
        height:27px;
        width: 100%;
        color:#999999;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .work-add{
        color:#999999;
        font-size: 20px;
        margin-right: 15px;
    }
    .work-text{
        width:100%;
        height:60px; 
        margin-left: 10px;
        display: flex;
        align-items: center;
        color:#999999;
    }
    .wallet-line, .cancel-line{
        width:100%;
        height:7px;
        background-color:#f4f7f7;
    }
    .wallet-text,.cancel-text{
        width:96%;
        height:45px; 
        display: flex;
        align-items: center;
        margin-left: 3%;
        position: relative;
        margin-right: 1%;
    }
    .wallet-info{
        position: absolute;
        right: 28px;
        color: #b3b3b3;
        font-size: 12px;
    }
    .account-bottom{
        width: 100%;
        height: 160px;
        background-color: #f4f7f7;;
    }
    .logout{
        width: 100%;
        height: 45px;
        position: absolute;
        bottom: 0;
        border-radius: 10px;
        border-width: 0;
        background-color: #fe3c2e;
        color: white;
        font-size: 16px;
        font-weight: 520;
    }
    .goto{
        position: absolute;
        right: 10px;
        width: 20px;
        height: 20px;
    }
    .name-text{
        color: #009bff;
        margin-left: 30px;
    }
    .textinfo{
        color: #999999;
        margin-left: 30px;
    }
    #phoneinfo{
        margin-left: 15px !important;
    }
</style>