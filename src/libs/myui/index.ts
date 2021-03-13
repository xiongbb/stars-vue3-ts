import { App } from "vue";
import Stars from "./components/Stars.vue";

const components = [Stars];

const install = function (app: App) {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

export default { install };
export { Stars };
