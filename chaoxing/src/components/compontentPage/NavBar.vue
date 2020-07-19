<!-- 
Autor: Kowaine
Use:
    传入一个Number类型属性navIndex：0-3，表示当前为某一栏
 -->
<template>
    <div class="nav">
        <div class="nav-placeholder"></div>
        <div class="nav-container" >
                <div class="nav-item" v-for="(navItem,index) in  navList" :key="index"  :class="index==navIndex?'selected':''">
                    <router-link :to="navItem.to">
                        <img class="nav-item-img" :src="index==navIndex?navItem.imgSel:navItem.img" >
                        <div class="nav-item-text">{{navItem.text}}</div>
                    </router-link>
                </div>
        </div>
  </div>
</template>

<script>
import home from '../../assets/img/daohang/tab_find_normal.png'
import homeSel from '../../assets/img/daohang/tab_find_selected.png'
import info from '../../assets/img/daohang/tab_message_nor.png'
import infoSel from '../../assets/img/daohang/tab_message_sel.png'
import note from '../../assets/img/daohang/tab_note_nor.png'
import noteSel from '../../assets/img/daohang/tab_note_sel.png'
import my from '../../assets/img/daohang/tab_mine_nor.png'
import mySel from '../../assets/img/daohang/tab_mine_sel.png'
export default {
    props: {
        navIndex: Number
    },
    data () {
        return  {
            navList: [
                {'text': '首页', 'to': '/', 'img': home, 'imgSel': homeSel},
                {'text': '消息', 'to': '/info', 'img': info, 'imgSel': infoSel},
                {'text': '笔记', 'to': '/note', 'img': note, 'imgSel': noteSel},
                {'text': '我', 'to': '/my', 'img': my, 'imgSel': mySel}
            ] 
        }
    }
}
</script>

<style>
    .nav
    {
        width: 100vw;
        border-top: 1px solid #e5e5e5;
    }
    .nav-placeholder
    {
        height: 64px;
    }
    .nav-container
    {
        width: 100%;
        height: 64px;
        position: fixed;
        bottom: 0;
        left: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        font-size: 16px;
        background: #f7f7f7;
    }
    .nav-item
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .nav-item-img
    {
        width: 27px;
        height: 27px;
    }
    .nav-item a
    {
        text-decoration: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #7c7c7c;
    }
    .nav-item.selected a
    {
        color: #019afb;
    }
</style>