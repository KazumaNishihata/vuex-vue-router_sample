import Vue from 'vue'
import router from '../router'

export default Vue.extend({
  data () {
    return {
      editedText: ''
    }
  },
  computed: {
    todo() {
      return this.$store.getters.todo(this.$store.state.route.params.id)
    }
  },
  methods: {
    editTodo() {
      this.$store.commit('editTodo',{
        text: this.editedText,
        id: this.$store.state.route.params.id}
      )
      this.back()
    },
    back() {
      router.push('/')
    }
  },
  created(){
    this.id = this.$route.params.id-0;
    this.defaultText =  this.editedText = this.$store.state.todos.filter( (v: string ,i:number ) => i===this.id).toString()
  }
})
