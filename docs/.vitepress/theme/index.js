import DefaultTheme from "vitepress/theme";
import Star from "../../../components/Star.vue";
import Follow from "../../../components/Follow.vue";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("star", Star);
    app.component("follow", Follow);
  },
};
