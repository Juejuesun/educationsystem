import { PUSH_INFO, SHOW_SEARCH, PUSH_WORK, PUSH_CHANGE_CLASS, DETAUL_LIST, GET_CLASSMATES } from './mutation-types'

export default{
    pushInfo({commit}, loginInfo) {
        //提交对mutation的请求
        commit(PUSH_INFO, {loginInfo})
    },
    showSearch({commit}, search) {
        commit(SHOW_SEARCH, {search})
    },
    pushWork({commit}, cons) {
        commit(PUSH_WORK, {cons})
    },
    pushChangeClass({commit}, list) {
        commit(PUSH_CHANGE_CLASS, list)
    },
    detailList({commit}, id) {
        commit(DETAUL_LIST, {id})
    },
    getClassmates({commit}) {
        commit(GET_CLASSMATES)
    }
}
