import rss from "@astrojs/rss";

const postImportResult = import.meta.globEager("./posts/*.md");
const posts = Object.values(postImportResult);

export const get = () =>
  rss({
    title: "InterviewGuide.dev Blog",
    description: "Thoughts and insights on acing your FAANG and big tech interviews. Expert advice on LeetCode, behavioral interviews, system design, and more.",
    site: "https://interviewguide.dev/blog",
    items: posts.map((post) => ({
      link: post.url,
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      pubDate: new Date(post.frontmatter.pubDate),
      ...(post.frontmatter.tags && { categories: post.frontmatter.tags }),
    })),
    customData: `<language>en-us</language>`,
  });
