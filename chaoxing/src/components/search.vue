<template>
  <div class="searchPage">
        <!-- 上方导航 -->
        <div class="searchTopNav">
            <div class="searchReturnPre" @click="toPre">
                <img class="searchReturnPreImg" src="../assets/img/jt.png" alt="">
            </div>
            <div class="searchTitle">
                <div class="searchTitleText">
                    {{ this.$route.query.title }}
                </div>
            </div>
        </div>

        <div class="searchMainBody">
            <!-- 搜索框 -->
            <div class="searchDiv">
                <div class="searchDivImgDiv">
                    <img class="searchDivImg" src="../assets/img/shouye/search.png">
                </div>
                <input id="searchInput" class="searchInput" @input="enterToSearch()" @keyup.enter="enterToSearch()">
            </div>

            <div v-if="!searchResultIsShow" class="searchHistoryBody">
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
            <div v-if="searchResultIsShow" class="searchResultBody">
                <div class="searchResult">
                    暂无搜索结果<br>
                    😶😶😶
                </div>
            </div>
        </div>

        
  </div>
</template>

<script>
export default {
    data(){
        return {
            searchResultIsShow: false,
            historyList: []
        }
    },
    methods: {
        toPre: function(){
            this.$router.go(-1)
        },
        checkInputValue: function(){
            var inputValue = document.getElementById('searchInput').value
            if( inputValue == null || inputValue == "" ){
                this.searchResultIsShow = false
            }else{
                this.searchResultIsShow = true
            }
        },
        enterToSearch: function(){
            this.checkInputValue()
        },
        showOrHideHistory: function(){
            this.checkInputValue()
        }
    }
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
.searchHistoryBody, .searchResultBody{
    width: 100%;
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
.searchResult{
    text-align: center;
    font-size: 12px;
    color: #cfcfcf;
    margin-top: 100px;
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