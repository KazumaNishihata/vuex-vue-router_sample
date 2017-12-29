import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'top-page'
})
export default class TopPage extends Vue {
  get todos() {
    return this.$store.state.todos
  }
}
