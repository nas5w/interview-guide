export default {
  title: "InterviewHandbook.dev",
  description: "An free handbook for software development interviews.",
  head: [
    [
      "script",
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-NDKV222HNH",
      },
    ],
    [
      "script",
      {},
      `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-NDKV222HNH');
  `,
    ],
    ["script", { src: "/star.js" }],
    ["script", { src: "https://buttons.github.io/buttons.js" }],
  ],
  cleanUrls: "with-subfolders",
  themeConfig: {
    logo: "/logo.png",
    siteTitle: "InterviewHandbook",
    socialLinks: [
      //   { icon: "twitter", link: "https://twitter.com/tbd" },
      //   { icon: "github", link: "https://github.com/tbd/tbd" },
    ],
    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "Preface", link: "/" },
          { text: "Preparing mentally", link: "/preparing-mentally" },
          { text: "Creating a schedule", link: "/creating-a-schedule" },
          { text: "Types of interviews", link: "/types-of-interviews" },
          {
            text: "Where should I interview?",
            link: "/where-should-i-interview",
          },
          { text: "Am I ready?", link: "/am-i-ready" },
        ],
      },
      {
        text: "Interview types",
        items: [
          { text: "Behavioral", link: "/behavioral" },
          { text: "Values", link: "/values" },
          { text: "Leetcode", link: "/leetcode" },
          { text: "Practical coding", link: "/practical-coding" },
          { text: "System design", link: "/system-design" },
          { text: "Technical knowledge", link: "/technical-knowledge" },
        ],
      },
      {
        text: "Communicating",
        items: [
          { text: "Before the interview", link: "/before-the-interview" },
          { text: "During the interview", link: "/during-the-interview" },
          { text: "After the interview", link: "/after-the-interview" },
        ],
      },
      {
        text: "Other",
        items: [
          { text: "Etiquette", link: "/etiquette" },
          {
            text: "Questions for the company",
            link: "/questions-for-the-company",
          },
          { text: "Resources", link: "/resources" },
          { text: "Feedback", link: "/feedback" },
          { text: "Credits", link: "/credits" },
        ],
      },
    ],
  },
};
