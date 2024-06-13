import DefaultTheme from "vitepress/theme";
import Star from "../../../components/Star.vue";
import Foot from "../../../components/Foot.vue";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("star", Star);
    app.component("foot", Foot);
  },
};
