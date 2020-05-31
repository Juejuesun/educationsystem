import {ADD_TODO} from './mutation-types'

export default{
    [ADD_TODO] (state, {todo}) { //让ADD_TODO变成一个变量
        state.todos.unshift(todo)
    },
}
