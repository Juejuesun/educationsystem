import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Home from '../views/Home'
import StuHome from '../views/StuHome'
import ClassSetting from '../components/teacherView/ClassSetting'
import CoursePlan from '../components/teacherView/CoursePlan'
import Homework from '../components/teacherView/Homework'
import Paper from '../components/teacherView/paper/Paper'
import WorkSch from '../components/teacherView/WorkSch'
import Commun from '../components/teacherView/Commun'
import MsgDetil from '../components/studentView/MsgDetil'
import SubWork from '../components/studentView/SubWork'
import Chatti from '../components/Chatti'
import PerCenter from '../components/PerCenter'
import DetailPage from '../components/teacherView/DetailPage'
import PaperList from '../components/teacherView/paper/PaperList'
import PaperCheck from '../components/teacherView/paper/PaperCheck'

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
        path: '',
        redirect: '/home/courseplan'
      },
      {
        path: '/home/courseplan',
        name: 'CoursePlan',
        component: CoursePlan,
      },
      {
        path: '/home/homework',
        name: 'Homework',
        component: Homework
      },
      {
        path: '/home/homework/detail',
        name: 'DetailPage',
        component: DetailPage,
      },
      {
        path: '/home/paper',
        name: 'Paper',
        component: Paper,
        children: [
          {
            path: '/home/paper/list',
            name: 'PaperList',
            component: PaperList,
          },
          {
            path: '/home/paper/check',
            name: 'PaperCheck',
            component: PaperCheck,
          }
        ]
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
    path: '/stuhome',
    name: 'StuHome',
    component: StuHome,
    children: [
      {
        path: '',
        redirect: '/stuhome/msgdetil'
      },
      {
        path: '/stuhome/msgdetil',
        name: 'MsgDetil',
        component: MsgDetil,
      },
      {
        path: '/stuhome/subwork',
        name: 'SubWork',
        component: SubWork,
      },
      {
        path: '/stuhome/chatti',
        name: 'Chatti',
        component: Chatti,
      }
    ]
  },
  {
    path: '/classsetting',
    name: 'ClassSetting',
    component: ClassSetting
  },
  {
    path: '/percenter',
    name: 'PerCenter',
    component: PerCenter
  }
]

const router = new VueRouter({
  routes
})

export default router
