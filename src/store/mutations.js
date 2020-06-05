import {PUSH_INFO, SHOW_SEARCH, PUSH_WORK} from './mutation-types'
const moment = require("moment")

export default{
    [PUSH_INFO] (state, {loginInfo}) { //让ADD_TODO变成一个变量
        state.userInfo.userId = loginInfo.id
        state.userInfo.userName = loginInfo.name//暂时这样
        state.userInfo.userRoot = loginInfo.identity
        state.userInfo.userAvatar = loginInfo.avatar
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
    }
}
