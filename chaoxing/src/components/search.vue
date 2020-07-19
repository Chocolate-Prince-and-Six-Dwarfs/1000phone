<template>
  <div class="searchPage">
        <!-- 上方导航 -->
        <div class="searchTopNav">
            <div class="searchReturnPre" @click="toPre">
                <img class="searchReturnPreImg" src="../assets/img/jt.png" alt="">
            </div>
            <div class="searchTitle">
                <div class="searchTitleText">
                    找应用
                </div>
            </div>
        </div>

        <div class="searchMainBody">
            <!-- 搜索框 -->
            <div class="searchDiv" @click="clickToSearch()">
                <div class="searchDivImgDiv">
                    <img class="searchDivImg" src="../assets/img/shouye/search.png">
                </div>
                <input id="searchInput" class="searchInput">
            </div>
            <!-- 历史记录 -->
            <div class="searchHistory">
                <div class="searchHistoryTitle">最近搜索</div>
                <img class="searchHistoryImg" src="../assets/img/shouye/delete.png">
            </div>
            <div class="taoLaoBanWuDi">
                陶老板专属搜索界面<br>
                😃😃😃
            </div>
        </div>
  </div>
</template>

<script>
export default {
  methods: {
        toPre: function(){
            this.$router.go(-1)
        }
  },
};
</script>
<style scoped>
.searchTopNav{
    z-index: 9999;
    position: fixed;
    background-color: #ffffff;
    top: 0px;
    width: 100%;
    height: 65px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid #dddddd;
}
.searchReturnPreImg{
    width: 20px;
    height: 20px;
    margin-left: 3vw;
}
.searchTitle{
    width: 100%;
    text-align: center;
}
.searchTitleText{
    font-size: 17px;
    font-weight: bold;
}
.searchMainBody{
    width: 100%;
    margin-top: 75px;
}
.searchDiv{
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    margin: 10px;
}
.searchInput{
    width: 100%;
    height: 20px;
    border: none;
    border-radius: 30px;
    background-color: #f4f4f4;
    font-size: 15px;
    outline: none;
    padding-left: 25px;
}
.searchDivImgDiv{
    position: absolute;
    left: 3px;
    top: 1px;
}
.searchDivImg{
    position: relative;
    width: 20px;
    height: 20px;
}
.searchHistory{
    width: 100%;
    border-top: 1px solid #dddddd;
    border-bottom: 1px solid #dddddd;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
}
.searchHistoryTitle{
    font-size: 15px;
    color: #cfcfcf;
    margin-left: 10px;
}
.searchHistoryImg{
    width: 18px;
    height: 18px;
    margin-right: 10px;
}
.taoLaoBanWuDi{
    text-align: center;
    font-size: 30px;
    color: #cfcfcf;
    margin-top: 20px;
}
</style>