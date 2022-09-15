const interval = setInterval(() => {
  const links = document.querySelector(".social-links");
  if (!links) return;
  clearInterval(interval);

  const link = document.createElement("a");
  link.classList.add("github-button");
  link.setAttribute("href", "https://github.com/nas5w/interview-guide");
  link.dataset.icon = "octicon-star";
  link.setAttribute("data-show-count", "true");
  link.setAttribute("aria-label", "Star nas5w/interview-guide on Github");
  link.innerHTML = "Star";

  links.appendChild(link);

  const scr = document.createElement("script");
  scr.setAttribute("src", "https://buttons.github.io/buttons.js");
  document.body.appendChild(scr);
}, 100);
