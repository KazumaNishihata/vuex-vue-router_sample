import Vue from 'vue'
import router from '../router'
import Component from 'vue-class-component'

@Component({
  name: 'delete-page'
})
export default class DeletePage extends Vue {

  private todoText: string;

  private addTodo() {
    this.$store.commit('addTodo', this.todoText)
    this.back();
  }

  private back() {
    router.push('/')
  }
}
