<template>
    <div class="homePage">
        <div class="homeTopNav">
            <div class="homeClock">
                <img class="homeClockImg" src="../assets/img/shouye/clock.png" alt="">
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
    </div>
</template>

<script>
export default {

}
</script>

<style>
.homeTopNav{
    width: 100%;
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
.homeTopNav{
    width: 100%;
    height: 65px;
}
.homeClockImg, .homeTitleImg, .homeScanImg{
    width: 20px;
    height: 20px;
}
.homeTitleText{
    font-size: 18px;
    font-weight: bold;
}
.homeScanText{
    font-size: 10px;
}
</style>
