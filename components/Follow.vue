<template>
  <div style="text-align: center; margin-top: 2rem">
    <a
      class="twitter-follow-button"
      href="https://twitter.com/nas5w"
      data-size="large"
      data-show-count="true"
      >Follow @nas5w</a
    >
  </div>
</template>

<script>
export default {
  mounted() {
    window.twttr = (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
      if (d.getElementById(id)) return t;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://platform.twitter.com/widgets.js";
      fjs.parentNode.insertBefore(js, fjs);

      t._e = [];
      t.ready = function (f) {
        t._e.push(f);
      };

      return t;
    })(document, "script", "twitter-wjs");
  },
};
</script>
