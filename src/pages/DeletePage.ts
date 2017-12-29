import Vue from 'vue'
import router from '../router'
import Component from 'vue-class-component'

@Component({
  name: 'delete-page'
})
export default class DeletePage extends Vue {

  get todo() {
    return this.$store.getters.todo(this.$store.state.route.params.id)
  }

  private deleteTodo() {
    this.$store.commit('deleteTodo', this.$store.state.route.params.id)
    this.back()
  }

  private back() {
    router.push('/')
  }

}
