# vue2.6-tsx-starter



## example

[demo](./public/demo.png)

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Run your unit tests

```
yarn test:unit
```

### Lints and fixes files

```
yarn lint
```

### https://github.com/kaorun343/vue-property-decorator

[vue-property-decorator](https://github.com/kaorun343/vue-property-decorator)

```tsx
import { Vue, Component } from "vue-property-decorator";

@Component({
  components: {},
})
export default class About extends Vue {
  render() {
    return (
      <div class="about">
        <h1>This is an about page</h1>
      </div>
    );
  }
}
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
