import DefaultTheme from "vitepress/theme";
import Star from "../../../components/Star.vue";
import Newsletter from "../../../components/Newsletter.vue";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("star", Star);
    app.component("newsletter", Newsletter);
  },
};
