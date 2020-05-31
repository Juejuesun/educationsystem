import {ADD_TODO} from './mutation-types'

export default{
    addTodo({commit}, todo) {
        //提交对mutation的请求
        commit(ADD_TODO, {todo})
    },
}
