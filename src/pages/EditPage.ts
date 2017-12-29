import Vue from 'vue'
import Component from 'vue-class-component'
import router from '../router'

@Component({
  name: 'edit-page'
})
export default class EditPage extends Vue {

  private editedText: string;
  private id: number;
  private defaultText: string;

  get todo() {
    return this.$store.getters.todo(this.$store.state.route.params.id)
  }

  private created() {
    this.id = parseInt(this.$route.params.id, 10) - 0;
    this.defaultText = this.$store.state.todos.filter((v: string , i: number) => i === this.id).toString()
    this.editedText = this.defaultText
  }

  private editTodo() {
    this.$store.commit('editTodo', {
      text: this.editedText,
      id: this.$store.state.route.params.id}
    )
    this.back()
  }

  private back() {
    router.push('/')
  }
}
