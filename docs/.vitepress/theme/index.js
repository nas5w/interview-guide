import DefaultTheme from "vitepress/theme";
import Star from "../../../components/Star.vue";
import Subscribe from "../../../components/Subscribe.vue";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("star", Star);
    app.component("foot", Subscribe);
  },
};
