import { PUSH_INFO, SHOW_SEARCH, PUSH_WORK } from './mutation-types'

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
    }
}
