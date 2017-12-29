import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todos: ['aaa', 'bbb']
  },
  mutations: {
    addTodo    : (state, text)  => state.todos.push(text),
    editTodo   : (state, param) => state.todos = state.todos.map((v, i) => i === param.id ? param.text : v) ,
    deleteTodo : (state, id) => state.todos.splice(id, 1),
  },
  getters: {
    todo: (state) => (id: number) => state.todos.filter((v , i) => i === id - 0).toString()
  }
})

export default store
