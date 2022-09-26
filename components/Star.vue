<template>
  <div style="text-align: center; margin-top: 2rem">
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
</template>

<script>
export default {
  mounted() {
    const scr = document.createElement("script");
    scr.setAttribute("src", "https://buttons.github.io/buttons.js");
    document.body.appendChild(scr);
  },
};
</script>
