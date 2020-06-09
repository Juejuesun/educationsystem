import { PUSH_INFO, SHOW_SEARCH, PUSH_WORK, PUSH_CHANGE_CLASS, DETAUL_LIST } from './mutation-types'
const moment = require("moment")
import axios from 'axios'

export default{
    async [PUSH_INFO] (state, {loginInfo}) { //让ADD_TODO变成一个变量
      state.userInfo.userId = loginInfo.id
      state.userInfo.userName = loginInfo.name//暂时这样
      state.userInfo.userRoot = loginInfo.identity
      state.userInfo.userAvatar = loginInfo.avatar

      let dec = {
        id: state.userInfo.userId
      }
      // 请求列表
      if(state.userInfo.userRoot == 1) {
        const {data: res} = await axios.post('/student/getSubjects', dec)
        console.log('列表',res.data)
        state.stuClassInfo.defaultInfo = res.data[0]
        state.stuClassInfo.classList = res.data
        state.stuClassInfo.defaultName = state.stuClassInfo.defaultInfo.subjectName
        //请求列表
      }else {
        const {data: res} = await axios.post('/teacher/getSubjects', dec)
        console.log('列表',res.data)
        state.teaClassInfo.defaultInfo = res.data[0]
        state.teaClassInfo.classList = res.data
        state.teaClassInfo.defaultName =  `${res.data[0].grade}年级${res.data[0].class}班${res.data[0].subjectName}`
        let {data: res2} = await axios.post('/teacher/getWorksOfSubject', {id: state.teaClassInfo.defaultInfo.subjectId})//切换
        for(let v of res2.data) {  
          // console.log(v);
          v.isShow = false
        };
        console.log('处理后的', res2.data)
        state.homeworkList = res2.data
      }
      
    },
    [SHOW_SEARCH](state,{search}){
      if(search){
        state.searchChatText = state.chatText.filter((value)=>{  //过滤数组元素
          return value.msg.includes(search) | value.uname.includes(search); //如果包含字符返回true
        });
      }else {
        state.searchChatText = [{uname: '查询失败！', msg: '请输入关键词！'}]
      }
      if(!state.searchChatText.length){
        state.searchChatText = [{uname: '无此用户！', msg: '无记录！'}]
      }
      console.log(state.searchChatText)
    },
    [PUSH_WORK] (state,{cons}) {
      state.content = cons.content
    },
    SOCKET_sid(state,data) {
        state.sessionId = data
    },
    SOCKET_chat(state,data) {
        console.log(data)
        let chatmsg = {
            uname: data.uname,
            msg: data.msg,
            date: moment().format("HH:mm:ss"),
            msgType: 'msgres',
            cid: data.cid,
            avatar: data.avatar
        }
        state.chatText.push(chatmsg)
    },
    SOCKET_response(state,respond) {
        console.log(respond)
        let joinmsg = {
            uname: respond.msg,
            msg: '',
            date: moment().format("HH:mm:ss"),
            msgType: 'respond'
        }
        state.chatText.push(joinmsg)
        // state.groupMembers += respond.change
        console.log("response目前返回人数："+state.groupMembers)
    },
    [PUSH_CHANGE_CLASS](state, list) {
      for(let v of list) {  
        // console.log(v);
        v.isShow = false
      };
      console.log('处理后的', list)
      state.homeworkList = list
    },
    async [DETAUL_LIST](state, {id}) {
      let {data: res} = await axios.post('/teacher/WorkSubmission', { workId: id})
      if(res) {
        state.teaList = res.data
        console.log(state.teaList)
      }
    }
}
