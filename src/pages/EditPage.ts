import Vue from 'vue'
import router from '../router'
import Component from 'vue-class-component'

@Component({
  name: 'edit-page'
})
export default class EditPage extends Vue {

  editedText: string;
  id: number;
  defaultText: string;

  get todo () {
    return this.$store.getters.todo(this.$store.state.route.params.id)
  }

  created(){
    this.id = parseInt(this.$route.params.id,10) - 0;
    this.defaultText = this.$store.state.todos.filter( (v: string ,i:number ) => i===this.id).toString()
    this.editedText = this.defaultText
  }

  editTodo() {
    this.$store.commit('editTodo',{
      text: this.editedText,
      id: this.$store.state.route.params.id}
    )
    this.back()
  }

  back() {
    router.push('/')
  }
}
