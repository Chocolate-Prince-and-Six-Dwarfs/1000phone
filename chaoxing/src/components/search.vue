<template>
  <div class="searchPage">
        <!-- 上方导航 -->
        <div class="searchTopNav">
            <div class="searchReturnPre" @click="toPre">
                <img class="searchReturnPreImg" src="../assets/img/jt.png">
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
                    <img v-if="imgChaChaIsShow" @click="clearInputText()" class="searchDivImgCha" src="../assets/img/shouye/chacha.png">
                </div>
                <input id="searchInput" class="searchInput" @input="showOrHideHistory()" @keyup.enter="enterToSearch()">
            </div>

            <div v-if="!searchResultIsShow" class="searchHistoryBody">
                <!-- 历史记录 -->
                <div class="searchHistory">
                    <div class="searchHistoryTitle">最近搜索</div>
                    <img class="searchHistoryImg" @click="clearHistoryList()" src="../assets/img/shouye/delete.png">
                </div>
                <div class="historyRecords">
                    <div @click="historyClickSearch(item)" v-for="(item,index) in historyList" :key="index" class="historyRecordsItem">
                        {{ item }}
                    </div>
                </div>
                <div class="taoLaoBanWuDi">
                    陶老板的搜索界面<br>
                    😃😃😃
                </div>
            </div>
            <div v-if="searchResultIsShow" class="searchResultBody">
                <div class="searchResult">
                    暂无搜索结果<br>
                    😶😶😶<br>
                    亲😙，不要为难我，这个功能没时间弄啦
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
            imgChaChaIsShow: false,
            historyList: []
        }
    },
    methods: {
        toPre: function(){
            this.$router.go(-1)
        },
        checkInputValue: function(){    //检查搜索框内容是否为空
            var inputValue = document.getElementById('searchInput').value
            if( inputValue == null || inputValue == "" ){
                this.searchResultIsShow = false
                return null
            }else{
                this.searchResultIsShow = true
                return inputValue
            }
        },
        enterToSearch: function(){  //搜索（功能未实现）及保存搜索历史
            var inputValue = this.checkInputValue()
            if(inputValue == null || inputValue == ""){
                return
            }else{
                if(this.historyList.indexOf(inputValue) == -1){
                    this.historyList.push(inputValue)
                }
                localStorage.setItem('history',JSON.stringify(this.historyList))
            }
        },
        showOrHideHistory: function(){  //是否展示搜素历史
            var inputValue = this.checkInputValue()
            if(inputValue == null || inputValue == ""){
                this.imgChaChaIsShow = false
            }else{
                this.imgChaChaIsShow = true
            }
        },
        clearHistoryList: function(){   //清空搜索历史
            this.historyList = []
            localStorage.setItem('history',JSON.stringify(this.historyList))
            this.historyList = JSON.parse(localStorage.getItem('history'))
        },
        getLocalHistoryList: function(){
            this.historyList = JSON.parse(localStorage.getItem('history'))
        },
        clearInputText: function(){ //清空搜索框内容
            this.searchResultIsShow = false
            this.imgChaChaIsShow = false
            document.getElementById('searchInput').value = ""
        },
        historyClickSearch: function(value){    //点击某一个搜索历史，将内容填充到搜索框
            var dom = document.getElementById('searchInput')
            this.searchResultIsShow = true
            this.imgChaChaIsShow = true
            dom.value = value
            dom.focus()
            // dom.select()
        }
    },
    created() {
        this.getLocalHistoryList()
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
    font-size: 18px;
    font-family: Microsoft JhengHei;
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
    margin-bottom: 2px;
}
.searchDivImgCha{
    position: absolute;
    width: 10px;
    height: 10px;
    top: 5px;
    left: calc(100vw - 40px);
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
.historyRecords{
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
}
.historyRecordsItem{
    background-color: #cfcfcf;
    border-radius: 45px;
    font-size: 8px;
    margin: 10px;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-right: 6px;
    padding-left: 6px;
}
</style>