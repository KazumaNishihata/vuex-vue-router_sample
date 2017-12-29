import Vue from 'vue'
import router from '../router'

export default Vue.extend({
  data () {
    return {
      todoText: ''
    }
  },
  methods: {
    addTodo() {
      this.$store.commit('addTodo',this.todoText)
      this.back();
    },
    back() {
      router.push('/')
    }
  }
})
