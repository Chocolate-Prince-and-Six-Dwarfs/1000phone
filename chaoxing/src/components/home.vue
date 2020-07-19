<template>
    <div class="homePage">
        <!-- 上方导航 -->
        <div class="homeTopNav">
            <div class="homeClock">
                <router-link to='recently'><img class="homeClockImg" src="../assets/img/shouye/clock.png" alt=""></router-link>
            </div>
            <div class="homeTitle">
                <div class="homeTitleText">西南石油大学（学生）</div>
                <img class="homeTitleImg" src="../assets/img/shouye/arrow-bottom.png" alt="">
            </div>
            <div class="homeScan">
                <img class="homeScanImg" src="../assets/img/shouye/scanning.png" alt="">
                <div class="homeScanText">邀请码</div>
            </div>
        </div>

        <!-- 首页主体 -->
        <div class="homeMainBody">
            <!-- 搜索框 -->
            <div class="homeSearch" @click="clickToSearch()">
                <div class="homeSearchImgDiv">
                    <img class="homeSearchImg" src="../assets/img/shouye/search.png">
                </div>
                <input id="homeSearchInput" class="homeSearchInput" placeholder="找应用"/>
            </div>
            <!-- 图片 -->
            <div class="homeMainImgDiv">
                <img class="homeMainImg" src="../assets/img/shouye/homeImg.jpg" alt="">
            </div>
            <!-- 首页选项 -->
            <div class="homeMainOptions">
                <div>
                    <div class="MenuItem" v-for="(menuItem,indexMe) in menu" :key="indexMe">
                        <div class="MenuItemTitle">
                            <div class="MenuItemTitleMargin">{{ menuItem.MenuTitle }}</div>
                        </div>
                        <div class="optionsItemDiv">
                            <div class="optionsItem" v-for="(opItem,indexOp) in menuItem.MenuOptions" :key="indexOp">
                                <img class="optionsItemImg" :src="opItem.picPath" alt="">
                                <div class="optionsItemTitle">{{ opItem.title }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 下方导航 -->
        <v-navbar :navIndex="0"></v-navbar>
    </div>
</template>

<script>
import NavBar from './compontentPage/NavBar'
import img1 from "@/assets/img/shouye/ic_dynamic_notebook.png";
export default {
    data(){
        return {
            index: 0,
            // showSearchImg: true, //v-if="showSearchImg"
            menu: {}
        }
    },
    created() {
        this.getMenuData()
    },
    components: {
        'v-navbar': NavBar
    },
    methods: {
        clickToSearch: function(){
            this.$router.push({ path: 'search' })
        },
        // onInputHideOrShowImg: function(){
        //     var inputValue = document.getElementById('homeSearchInput').value
        //     if(inputValue == null || inputValue == ""){
        //         this.showSearchImg = true
        //     }else{
        //         this.showSearchImg = false
        //     }
        //     // @input="onInputHideOrShowImg()
        // },
        getMenuData: function(){
            this.$ajax({
                methods: 'get',
                url: '../../static/homeMainOptions.json'
            }).then(res => {
                this.menu = res.data.MainMenu
                console.log(this.menu[0].MenuOptions[0].title)
            }).catch(error => {
                console.log(error)
            })
        }
    },
}
</script>

<style>
*{
    /* font-family: KaiTi; */
    font-family: Microsoft JhengHei;
}
.homeTopNav{
    z-index: 9999;
    position: fixed;
    background-color: #ffffff;
    top: 0px;
    width: 100%;
    height: 65px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #dddddd;
}
.homeTitle{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.homeScan{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.homeClockImg, .homeTitleImg, .homeScanImg{
    width: 20px;
    height: 20px;
}
.homeTitleText{
    font-size: 17px;
    font-weight: bold;
}
.homeScanText{
    font-size: 10px;
}
.homeMainBody{
    width: 100%;
    margin-top: 75px;
}
.homeSearch{
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    margin: 10px;
}
.homeSearchImgDiv{
    position: absolute;
}
.homeSearchImg{
    position: relative;
    right: 17px;
    width: 25px;
    height: 25px;
}
.homeSearchInput{
    width: 100%;
    height: 36px;
    border: none;
    border-radius: 30px;
    background-color: #f4f4f4;
    font-size: 15px;
    outline: none;
    text-align: center;
}
input::-webkit-input-placeholder{
    position: relative;
    left: 17px;
}
.homeMainImg{
    width: 100%;
    height: calc(100wd * 372 / 855);
}
.homeMainOptions{
    width: 100%;
}
.MenuItem{
    width: 100%;
    display: flex;
    flex-direction: column;
}
.optionsItemDiv{
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
}
.optionsItem{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60px;
    height: 60px;
    margin: 10px;
}
.MenuItemTitle{
    background-color: #f9f9f9;
    font-size: 15px;
    color: #9b9b9b;
    height: 35px;
    line-height: 35px;
}
.optionsItemImg{
    width: 30px;
    height: 30px;
}
.optionsItemTitle{
    text-align: center;
    margin-top: 10px;
    font-size: 10px;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.MenuItemTitleMargin{
    margin-left: 5px;
}
</style>