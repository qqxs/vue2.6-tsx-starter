import { Vue, Component } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld'
import logoImg from '../assets/logo.png'
@Component({
  components: {
    'v-hello-world': HelloWorld
  }
})
export default class Home extends Vue {
  render() {
    return (
      <div class="home">
        <img alt="Vue logo" src={logoImg} />
        <v-hello-world
          msg="Welcome to Your Vue.js App"
          onClick={() => {
            console.log(123412)
          }}
        >
          default slot 1234123
          <header slot="header">header slot</header>
          <footer slot="footer">footer slot</footer>
        </v-hello-world>
      </div>
    )
  }
}
