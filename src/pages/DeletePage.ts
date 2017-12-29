import Vue from 'vue'
import router from '../router'

export default Vue.extend({
  computed: {
    todo() {
      return this.$store.getters.todo(this.$store.state.route.params.id)
    }
  },
  methods: {
    deleteTodo() {
      this.$store.commit('deleteTodo',this.$store.state.route.params.id)
      this.back()
    },
    back() {
      router.push('/')
    }
  }
})
