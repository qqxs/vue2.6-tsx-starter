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
  @Prop({ type: String }) private slot?: any

  @Model('change', { type: Boolean }) readonly checked!: boolean

  @Watch('child')
  onChildChanged(val: string, oldVal: string) {
    console.log(val, oldVal)
  }

  list = [{ name: 1 }, { name: 2 }]

  count = 0

  stateMsg = this.msg

  html = `<p>this is html  p tag </p>`

  message = ''

  @Emit('click')
  addToCount(n: number) {
    this.count += n
    console.log(this.count)
  }

  mounted() {
    this.getInputField().select()
    console.log(this)
  }

  private getInputField() {
    return this.$refs.input as HTMLInputElement
  }

  render() {
    return (
      <div class="hello">
        <h1 onClick={() => this.addToCount(2)}>{this.stateMsg}</h1>
        {/* 双向绑定 */}
        <input
          type="text"
          placeholder="Type a message"
          onInput={(e: any) => (this.stateMsg = e.target.value)}
          style={{ width: '100%' }}
          ref="input"
          value={this.stateMsg}
        />
        <div>
          <div>solt</div>
          <div>{(this.$slots as any).default}</div>
          <div>{(this.$slots as any).header}</div>
          <div>{(this.$slots as any).footer}</div>
        </div>

        <p>Message is: {this.message}</p>
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

        <h3>Essential Links</h3>
        <h3>Ecosystem</h3>
      </div>
    )
  }
}
