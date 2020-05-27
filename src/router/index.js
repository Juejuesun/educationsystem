import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Home from '../views/Home'
import ClassSetting from '../components/teacherView/ClassSetting'
import CoursePlan from '../components/teacherView/CoursePlan'
import Homework from '../components/teacherView/Homework'
import Paper from '../components/teacherView/Paper'
import WorkSch from '../components/teacherView/WorkSch'
import Commun from '../components/teacherView/Commun'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/home/courseplan',
        name: 'CoursePlan',
        component: CoursePlan,
      },
      {
        path: '/home/homework',
        name: 'Homework',
        component: Homework,
      },
      {
        path: '/home/paper',
        name: 'Paper',
        component: Paper,
      },
      {
        path: '/home/worksch',
        name: 'WorkSch',
        component: WorkSch,
      },
      {
        path: '/home/commun',
        name: 'Commun',
        component: Commun,
      }
    ]
  },
  {
    path: '/classsetting',
    name: 'ClassSetting',
    component: ClassSetting
  }
]

const router = new VueRouter({
  routes
})

export default router
