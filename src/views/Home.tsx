import { Vue, Component } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld";
import logoImg from "../assets/logo.png";
// @ts-ignore
@Component({
  components: {
    "v-hello-world": HelloWorld
  }
})
export default class Home extends Vue {
  render() {
    return (
      <div class="home">
        <img alt="Vue logo" src={logoImg} />
        <v-hello-world msg="Welcome to Your Vue.js App"></v-hello-world>
      </div>
    );
  }
}
