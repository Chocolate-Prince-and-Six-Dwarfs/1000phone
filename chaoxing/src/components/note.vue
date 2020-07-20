<template>
  <div class="note-container">
      <div class="header">
          <div class="placeholder"></div>
          <div class="group" @click="changeShow">
              <span class="group-name">{{currentGroup}}</span><span class="group-selector"><img class="group-selector-img" :src="showGroup?topArrow:bottomArrow" alt=""></span>
          </div>
          <div class="editor-img-container">
            <img class="editor-img" src="../assets/img/biji/edit.png">
          </div>
      </div>
      <div class="search-box" @click="search">
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
      <div class="notebook-container" v-for="(item,index) in notes[currentGroup]" :key="index">
          <div class="note-info">
              <img class="note-head" src="https://mooc1-2.chaoxing.com/u/28/60847090" alt="">
              <div class="note-text-info">
                <div class="name-type">
                    <div class="note-owner-name">{{item['owner']}}</div>
                    <div class="type">
                        <span class="type-text" v-if="item['type']=='私有'">{{item['type']}}</span>
                        <span class="group">{{item['group']}}&nbsp;></span>
                    </div>
                </div>
                <div class="time-read">
                    <span class="time">{{item['time']}}</span>
                    <span class="read">阅读:{{item['read']}}</span>
                </div>
              </div>
          </div>
          <div class="note-content">
              <div class="note-title">
                  {{item['title']}}
              </div>
              <div class="note-text">
                  {{item['text']}}
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
      <div class="group-container" :class="showGroup?'shown-group':'hidden-group'">
            <div class="group-placeholder"></div>
            <div class="group-content">
                <div class="group-tip">选择显示</div>
                <div class="group-row">
                    <span class="group-item" v-for="(item,index) in groupList1" :key="index" :class="currentGroup==item.name?'current-group':''" @click="changeGroup(item.name)">{{item.name}}</span>
                </div>
                <div class="group-row">
                    <span class="group-item" v-for="(item,index) in groupList2" :key="index" :class="currentGroup==item.name?'current-group':''" @click="changeGroup(item.name)">{{item.name}}</span>
                    <span class="group-item group-mana">分组管理 </span>
                </div>
            </div>
            <div class="dark-bg"></div>
      </div>
  </div>
</template>

<script>
import navbar from "./compontentPage/NavBar.vue"
import bottomArrow from "../assets/img/shouye/arrow-bottom.png"
import topArrow from "../assets/img/shouye/arrow-top.png"
export default {
    data () {
        return {
            showGroup: false,
            currentGroup: '我的',
            groupList1: [
                {'name': '我的', 'mana': false},
                {'name': '关注', 'mana': false},
                {'name': '推荐', 'mana': false}
            ],
            groupList2: [
                {'name': '同单位', 'mana': false},
                {'name': '特别关注', 'mana': false}
            ],
            bottomArrow: bottomArrow,
            topArrow: topArrow,
            notes: {
                '我的': [
                    {
                        'owner': '我是陶老板',
                        'type': '私有',
                        'group': '个人笔记',
                        'time': '07-19 11:12',
                        'read': 1,
                        'title': '日记',
                        'text': '今天也是在小组里当老大的快乐一天！'
                    },
                    {
                        'owner': '我是陶老板',
                        'type': '私有',
                        'group': '个人笔记',
                        'time': '07-18 22:30',
                        'read': 1,
                        'title': '日记',
                        'text': '又剥削了一天员工，资本家的生活就是这么枯燥~'
                    },
                    {
                        'owner': '我是陶老板',
                        'type': '公开',
                        'group': '公开笔记',
                        'time': '07-18 22:30',
                        'read': 1400,
                        'title': '日记',
                        'text': '买了辆特斯拉玩玩，感觉还行'
                    }
                ],
                '关注': [
                    {
                        'owner': '陶老板的男人',
                        'type': '公开',
                        'group': '公开笔记',
                        'time': '07-18 21:32',
                        'read': 231,
                        'title': '日记',
                        'text': '又被陶老板包养了一天，幸福！'
                    }
                ],
                '推荐': [
                    {
                        'owner': '社畜',
                        'type': '公开',
                        'group': '公开笔记',
                        'time': '07-19 03:12',
                        'read': 233,
                        'title': '日记',
                        'text': '又被陶老板压榨了一整天，加班到现在，累死了，哎'
                    }
                ],
                '同单位': [
                    {
                        'owner': '社畜',
                        'type': '公开',
                        'group': '公开笔记',
                        'time': '07-19 03:12',
                        'read': 233,
                        'title': '日记',
                        'text': '又被陶老板压榨了一整天，加班到现在，累死了，哎'
                    }
                ],
                '特别关注': [
                    {
                        'owner': '陶老板的女人',
                        'type': '公开',
                        'group': '公开笔记',
                        'time': '07-19 20:21',
                        'read': 1,
                        'title': '日记',
                        'text': '陶某人昨天乱花钱买了个什么特斯拉，等他回来看我抽不死他！'
                    }
                ],
            }
        }
    },
    methods: {
        changeShow: function () {
            this.showGroup = !this.showGroup;
        },
        changeGroup: function (groupName) {
            this.currentGroup = groupName;
            this.changeShow();
        },
        search: function () {
            this.$router.push({
                    path: "/search",
                    query: {
                        title: '找笔记'
                    }
            });
        }
    },
    components: {
        'nav-bar': navbar
    }
}
</script>

<style>
    .note-container .header
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
        left: 0;
        z-index: 900;
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
        font-size: 18px;
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
        height: 32px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 14px;
        background-color: #f4f7f7;
    }
    .search-img
    {
        width: 20px;
        height: 20px;
        margin-right: 4px;
    }
    .search-text
    {
        font-size: 14px;
        color: #ced1d1;
    }
    .add-box
    {
        height: 50px;
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
        width: 30px;
        height: 30px;
        margin-right: 10px;
    }
    .notebook-text
    {
        font-size: 16px;
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
        width: 18px;
        height: 28px;
        margin-right: 32px;
    }
    .ca-img
    {
        width: 28px;
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
        width: 40px;
        height: 40px;
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
        font-size: 16px;
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
        font-size: 16px;
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
        font-size: 14px;
        color: #949494;
        margin-right: 20px;
    }
    .read
    {
        font-size: 14px;
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
        font-size: 16px;
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
        width: 24px;
        height: 24px;
        margin-right: 10px;
    }
    .note-tool-text
    {
        font-size: 14px;
    }
    .group-container
    {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        position: fixed;
        top: 0px;
        left: 0;
    }
    .hidden-group
    {
        display: none;
    }
    .shown-group
    {
        display: block;
    }
    .group-content
    {
        height: 120px;
        width: 100%;
        box-sizing: border-box;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px;
    }
    .group-tip
    {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: flex-start;
        align-items: center;
        font-size: 10px;
        color: #ced1d1;
    }
    .group-row
    {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .group-item
    {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        color: black;
        font-size: 12px;
        margin: 4px;
        height: 36px;
        background-color:  #f4f7f7;
        border-radius: 3px;
    }

    .dark-bg
    {
        height: calc(100% - 64px);
        width: 100%;
        background-color: rgba(0,0,0,0.6);
    }
    .group-placeholder
    {
        height: 61px;
    }
    .current-group
    {
        color: #0593f0;
    }
    .group-mana
    {
        background-color: white;
        color: #0593f0;
        border: 1px solid #0593f0;
    }


</style>