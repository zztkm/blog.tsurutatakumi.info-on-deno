import blog, { ga } from "https://deno.land/x/blog@0.5.0/blog.tsx";

blog({
  title: "Be a hacker",
  description: "This is my learning log",
  avatar: "avator.jpeg",
  avatarClass: "rounded-full",
  links: [
    { title: "GitHub", url: "https://github.com/zztkm" },
    { title: "Twitter", url: "https://twitter.com/zztkm" },
  ],
  lang: "ja",
  author: "zztkm",
  middlewares: [
    ga(Deno.env.get("GA_TRACKING_ID")),
  ]
});
