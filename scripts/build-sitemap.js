const fs = require("fs");
const path = require("path");
const fg = require("fast-glob");
const { SitemapStream, streamToPromise } = require("sitemap");

console.log("Start building sitemap..");

const linksStream = fg.stream(["./docs/*.md"]).map((filePath) => {
  const stats = fs.statSync(filePath);
  return {
    url: filePath.replace("docs/", "").replace(/\.md$/, ""),
    lastmod: stats.mtime.toISOString(),
    changefreq: 'weekly',
    priority: filePath.includes('index.md') ? 1.0 : 0.8,
  };
});

const sitemapStream = new SitemapStream({
  hostname: "https://interviewguide.dev/",
});

// Return a promise that resolves with your XML string
streamToPromise(linksStream.pipe(sitemapStream)).then((sitemap) => {
  fs.writeFileSync(
    path.resolve(__dirname, "../docs/.vitepress/dist/sitemap.xml"),
    sitemap
  );
  console.log("Sitemap built successfully!");
});
