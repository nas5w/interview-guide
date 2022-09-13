const interval = setInterval(() => {
  const links = document.querySelector(".social-links");
  if (!links) return;
  clearInterval(interval);
  links.innerHTML =
    '<a class="github-button" href="https://github.com/buttons/github-buttons" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star buttons/github-buttons on GitHub">Star</a>';

  const scr = document.createElement("script");
  scr.setAttribute("src", "https://buttons.github.io/buttons.js");
  document.body.appendChild(scr);
}, 100);
