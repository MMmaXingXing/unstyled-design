import { App } from "vue";
import button from "./src/components/button/index";

const components = [
  button
]

export default {
  imstall(app: App) {
    components.map(item => {
      app.use(item)
    })
  }
}