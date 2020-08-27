import Vue from 'vue'

export class VueComponent<P> extends Vue {
  // @ts-ignore
  $props: P
}
