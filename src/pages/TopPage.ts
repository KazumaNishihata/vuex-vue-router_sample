import Vue from 'vue'

export default Vue.extend({
  computed: {
    todos () {
      return this.$store.state.todos
    }
  }
})
