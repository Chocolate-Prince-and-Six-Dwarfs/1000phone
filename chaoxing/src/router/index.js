import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Information from '@/components/information'
import Note from '@/components/note'
import My from '@/components/my'
import MyAccount from '@/components/myAccount'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/information',
      name: 'Informationome',
      component: Information
    },
    {
      path: '/note',
      name: 'Note',
      component: Note
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path: '/myAccount',
      name: 'MyAccount',
      component: MyAccount
    },
  ]
})
