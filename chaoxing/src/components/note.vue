<template>
  <div class="note-container">
      <div class="header">
          <div class="placeholder"></div>
          <div class="group">
              <span class="group-name">我的</span><span class="group-selector"><img class="group-selector-img" src="../assets/img/shouye/arrow-bottom.png" alt=""></span>
          </div>
          <div class="editor-img-container">
            <img class="editor-img" src="../assets/img/biji/edit.png">
          </div>
      </div>
      <div class="search-box">
          <img class="search-img" src="../assets/img/biji/search.png" alt="">
          <span class="search-text">搜索</span>
      </div>
      <div class="add-box">
          <div class="notebook">
              <img class="notebook-img" src="../assets/img/biji/dynamic_notebook.png" alt="">
              <span class="notebook-text">笔记本</span>
          </div>
          <div class="add-way">
              <img class="mic-img" src="../assets/img/biji/dynamic_voice_icon.png" alt="">
              <img class="ca-img" src="../assets/img/biji/dynamic_camera_icon.png" alt="">
          </div>
      </div>
      <div class="notebook-container">
          <div class="note-info">
              <img class="note-head" src="https://mooc1-2.chaoxing.com/u/28/60847090" alt="">
              <div class="note-text-info">
                <div class="name-type">
                    <div class="note-owner-name">我是陶老板</div>
                    <div class="type">
                        <span class="type-text">私有</span>
                        <span class="group">个人笔记></span>
                    </div>
                </div>
                <div class="time-read">
                    <span class="time">07-19 11:12</span>
                    <span class="read">阅读:1</span>
                </div>
              </div>
          </div>
          <div class="note-content">
              <div class="note-title">
                  日记
              </div>
              <div class="note-text">
                  今天也是在小组里当老大的快乐一天！
              </div>
          </div>
          <div class="note-tool-container">
              <div class="note-tool">
                  <img class="note-tool-img" src="../assets/img/biji/dynamic_reply.png" alt="">
                  <span class="note-tool-text">评论</span>
              </div>
              <div class="note-tool">
                  <img class="note-tool-img" src="../assets/img/biji/dynamic_prise.png" alt="">
                  <span class="note-tool-text">赞</span>
              </div>
              <div class="note-tool">
                  <img class="note-tool-img" src="../assets/img/biji/dynamic_share_icon.png" alt="">
                  <span class="note-tool-text">转发</span>
              </div>
          </div>
      </div>
      <nav-bar :navIndex="2"></nav-bar>
  </div>
</template>

<script>
import navbar from "./compontentPage/NavBar.vue"
export default {
    data () {
        return {
        }
    },
    components: {
        'nav-bar': navbar
    }
}
</script>

<style>
    .header
    {
        width: 100vw;
        height: 54px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #f5f5f5;
        position: sticky;
        background-color: #ffffff;
        top: 0;
        left: 0;;
    }
    .placeholder
    {
        flex: 1;
    }
    .group
    {
        display: flex;
        flex: 2;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
    }
    .group-name
    {
        font-size: 20px;
        color: #333333;
    }
    .group-selector-img
    {
        width: 20px;
        height: 20px;
    }
    .editor-img-container
    {
        flex: 1;
        padding-right: 20px;
    }
    .editor-img
    {
        float: right;
        width: 22px;
        height: 22px;
    }
    .search-box
    {
        margin: 10px 18px;
        height: 38px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 18px;
        background-color: #f4f7f7;
    }
    .search-img
    {
        width: 24px;
        height: 24px;
        margin-right: 4px;
    }
    .search-text
    {
        font-size: 18px;
        color: #ced1d1;
    }
    .add-box
    {
        height: 54px;
        background-color: white;
        border-bottom: 10px solid #f4f7f7;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-right: 18px;
        padding-left: 18px;
    }
    .notebook
    {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .notebook-img
    {
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }
    .notebook-text
    {
        font-size: 18px;
    }
    .add-way
    {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .mic-img
    {
        width: 22px;
        height: 32px;
        margin-right: 36px;
    }
    .ca-img
    {
        width: 32px;
        height: 26px;
    }
    .notebook-container
    {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding: 12px;
        border-bottom: 10px solid #f4f7f7;
    }
    .note-info
    {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-around;
        align-items: center;
    }
    .note-head
    {
        width: 47px;
        height: 47px;
        border-radius: 4px;
        margin: 18px 12px;
    }
    .note-text-info
    {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
    .name-type
    {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .note-owner-name
    {
        font-size: 18px;
        color: #0593f0;
    }
    .type
    {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .type-text
    {
        background-color: #c4c4c4;
        line-height: 18px;
        font-size: 14px;
        color: #f9f9f9;
        margin-right: 4px;
    }
    .group
    {
        font-size: 18px;
        color: #aaaaaa;
    }
    .time-read
    {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .time
    {
        font-size: 16px;
        color: #949494;
        margin-right: 20px;
    }
    .read
    {
        font-size: 16px;
        color: #0593f0;
    }
    .note-content
    {
        padding-left: 16px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
    }
    .note-title
    {
        color: #020202;
        font-size: 18px;
        margin-bottom: 20px;
    }
    .note-text
    {
        padding-left: 16px;
        color: #020202;
        font-size: 16px;
        margin-bottom: 20px;
    }
    .note-tool-container
    {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .note-tool
    {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .note-tool-img
    {
        width: 26px;
        height: 26px;
        margin-right: 10px;
    }
    .note-tool-text
    {
        font-size: 16px;
    }


</style>