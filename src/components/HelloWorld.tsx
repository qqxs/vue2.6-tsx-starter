import {
  Component,
  Prop,
  Model,
  Watch,
  // Inject,
  Provide,
  Emit
} from 'vue-property-decorator'
import './index.scss'

import { VueComponent } from '../vue-ts-component'

interface AProps {
  href: string
  title: string
}

// const symbol = Symbol('baz')
@Component
export default class HelloWorld extends VueComponent<AProps> {
  // @Inject() readonly ifoos!: string
  // @Inject('bar') readonly bar!: string
  // @Inject({ from: 'optional', default: 'default' }) readonly optional!: string
  // @Inject(symbol) readonly ibaz!: string

  @Provide() foo = 'foo'
  @Provide('bar') baz = 'bar'

  @Prop({ type: String }) private href!: string
  @Prop({ type: String }) private msg!: string
  @Prop({ type: String }) private title?: string

  @Model('change', { type: Boolean }) readonly checked!: boolean

  @Watch('child')
  onChildChanged(val: string, oldVal: string) {
    console.log(val, oldVal)
  }

  list = [{ name: 1 }, { name: 2 }]

  count = 0

  html = `<p>this is p </p>`

  @Emit('click')
  addToCount(n: number) {
    this.count += n
    console.log(this.count)
  }

  mounted() {
    this.getInputField().select()
    // console.log(this)
  }

  private getInputField() {
    return this.$refs.input as HTMLInputElement
  }

  render() {
    return (
      <div class="hello">
        <h1 onClick={() => this.addToCount(2)}>{this.msg}</h1>
        <input
          type="text"
          placeholder="Type a message"
          onInput={(e: any) => (this.msg = e.target.value)}
          style={{ width: '100%' }}
          ref="input"
          value={this.msg}
        />
        {(this.$slots as any).default}
        <p>
          For a guide and recipes on how to configure / customize this project,
          <br />
          check out the
          <a href="https://cli.vuejs.org" target="_blank" rel="noopener">
            vue-cli documentation
          </a>
          .
        </p>
        <div domPropsInnerHTML={this.html}></div>
        <transition name="fade">
          <h3>Installed CLI Plugins</h3>
        </transition>
        <ul v-show={this.list.length}>
          {this.list.map((item: any) => (
            <li>{item.name}</li>
          ))}
        </ul>
        <ul>
          <li>
            <a
              href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
              target="_blank"
              rel="noopener"
            >
              babel
            </a>
          </li>
          <li>
            <a
              href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript"
              target="_blank"
              rel="noopener"
            >
              typescript
            </a>
          </li>
          <li>
            <a
              href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router"
              target="_blank"
              rel="noopener"
            >
              router
            </a>
          </li>
          <li>
            <a
              href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex"
              target="_blank"
              rel="noopener"
            >
              vuex
            </a>
          </li>
          <li>
            <a
              href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
              target="_blank"
              rel="noopener"
            >
              eslint
            </a>
          </li>
          <li>
            <a
              href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest"
              target="_blank"
              rel="noopener"
            >
              unit-jest
            </a>
          </li>
        </ul>
        <h3>Essential Links</h3>
        <ul>
          <li>
            <a href="https://vuejs.org" target="_blank" rel="noopener">
              Core Docs
            </a>
          </li>
          <li>
            <a href="https://forum.vuejs.org" target="_blank" rel="noopener">
              Forum
            </a>
          </li>
          <li>
            <a href="https://chat.vuejs.org" target="_blank" rel="noopener">
              Community Chat
            </a>
          </li>
          <li>
            <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://news.vuejs.org" target="_blank" rel="noopener">
              News
            </a>
          </li>
        </ul>
        <h3>Ecosystem</h3>
        <ul>
          <li>
            <a href="https://router.vuejs.org" target="_blank" rel="noopener">
              vue-router
            </a>
          </li>
          <li>
            <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">
              vuex
            </a>
          </li>
          <li>
            <a
              href="https://github.com/vuejs/vue-devtools#vue-devtools"
              target="_blank"
              rel="noopener"
            >
              vue-devtools
            </a>
          </li>
          <li>
            <a
              href="https://vue-loader.vuejs.org"
              target="_blank"
              rel="noopener"
            >
              vue-loader
            </a>
          </li>
          <li>
            <a
              href="https://github.com/vuejs/awesome-vue"
              target="_blank"
              rel="noopener"
            >
              awesome-vue
            </a>
          </li>
        </ul>
      </div>
    )
  }
}
