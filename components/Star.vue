<template>
  <div
    :style="{
      'margin-top': expanded ? '3rem' : 0,
      padding: expanded ? '1.5rem 1rem' : 'auto',
    }"
    :class="{ tip: expanded, 'custom-block': expanded }"
  >
    <h3 style="margin: 0 0 1rem 0" v-if="expanded">Support this resource</h3>

    <p v-if="expanded">
      If you're enjoying this guide, please support it be
      <a href="https://github.com/nas5w/interview-guide"
        >giving it a "star" on GitHub</a
      >. This will help it grow and will help others find it!
    </p>

    <div v-if="!expanded" style="text-align: center; margin-top: 2rem">
      <a
        class="github-button"
        href="https://github.com/nas5w/interview-guide"
        data-icon="octicon-star"
        data-size="large"
        data-show-count="true"
        aria-label="Star nas5w/interview-guide on GitHub"
      >
        Star
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["expanded"],
  mounted() {
    const scr = document.createElement("script");
    scr.setAttribute("src", "https://buttons.github.io/buttons.js");
    document.body.appendChild(scr);
  },
};
</script>
