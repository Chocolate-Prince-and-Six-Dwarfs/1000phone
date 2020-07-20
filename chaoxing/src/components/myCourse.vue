<template>
  <div class="my_course">
    <div class="course_top">
      <img class="back" src="../assets/img/recently_back.png" alt="" @click="back">
      <span>课程</span>
    </div>
    <div class="search_Bar">
      <img class="search_Img" src="../assets/img/xiaoxi/3.png" alt=""/>
      <span class="search_Text">搜索</span>
    </div>
    <div class="course_list" v-for="(citem,cindex) in course" :key="cindex">
      <div class="course_item">
        <div class="course_info">
          <img class="course_img" :src="citem.img" />
          <span class="course_name">{{citem.name}}</span>
          <span class="course_teacher">{{citem.teacher}}</span>
        </div>
        <img class="goto-button" src="../assets/img/wo/ic_goto.png" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        course:[{
            img: require('@/assets/img/shouye/ic_group_course.png'),
            name: '大学生职业生涯规划',
            teacher: '谢伟',
          },
          {
            img: require('@/assets/img/shouye/ic_group_course.png'),
            name: '软件工程综合实现与技能实习',
            teacher: '肖斌',
          },
          {
            img: require('@/assets/img/shouye/ic_group_course.png'),
            name: '2020大数据处理技术',
            teacher: '王兵',
          },
          {
            img: require('@/assets/img/shouye/ic_group_course.png'),
            name: '操作系统',
            teacher: '任冬梅',
          },
          {
            img: require('@/assets/img/shouye/ic_group_course.png'),
            name: '文献检索与利用（9-16周）',
            teacher: '贺映兰',
          },
          {
            img: require('@/assets/img/shouye/ic_group_course.png'),
            name: 'Linux操作系统基础',
            teacher: '李波',
          },
          {
            img: require('@/assets/img/shouye/ic_group_course.png'),
            name: '高等数学',
            teacher: '罗琴',
          },
          {
            img: require('@/assets/img/shouye/ic_group_course.png'),
            name: '人机交互的软件工程方法',
            teacher: '张剑',
          },
          ]
      }
    },
    methods:{
      back:function(){
        this.$router.replace('/my')
      }
    }
  }
</script>

<style>
  .my_course{
    width: 100%;
    height: 100%;
  }
  .course_top{
    width: 100%;
    height: 40px;
    background-color: #FFFFFF;
    font-size: 16px;
    line-height: 30px;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .back{
    width: 20px;
    height: 20px;
    position: absolute;
    left: 10px;
  }
  .search_Bar{
    height: 38px;
    text-align: center;
    background-color: #F8F8FF;
    border-radius: 40px;
    margin-top: 13px;
    margin-right: 15px;
    margin-left: 15px;
    margin-bottom: 20px;
    padding: 2px;
  }
  .search_Img{
    width: 15px;
    height: 15px;
    margin-top: 10px;
  }
  .search_Text{
    color: #D3D3D3;
  }
  .course_list{
    width: 100%;
    display: flex;
  }
  .course_item{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
  }
  .course_img{
    width: 35px;
    height: 35px;
    margin: 7.5px 10px 0 10px;
  }
  .course_info{
    width: calc(100%-120px);
    height: 50px;
    display: flex;
    align-items: center;

  }
  .course_name{
    font-size: 16px;
  }
  .course_teacher{
    font-size: 12px;
    margin-left: 10px;
    color: #969696;
  }
  .goto-button{
    height: 15px;
    width: 15px;
    margin: 10px;
  }
  a{
    text-decoration: none;   /* 清除a标签的下划线 */
    display: flex;
    align-items: center;
    justify-content:space-between;
    color: #000000;
  }
</style>
