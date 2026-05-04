import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { siteMetadata } from "@data/site";

export async function GET(context: { site: URL | undefined }) {
  const showDrafts = import.meta.env.PUBLIC_SHOW_DRAFTS === "true";
  const posts = (await getCollection("blog")).filter((post) => showDrafts || !post.data.draft);

  return rss({
    title: siteMetadata.title,
    description: siteMetadata.description,
    site: context.site ?? siteMetadata.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.id.replace(/\.(md|mdx)$/, "")}/`
    }))
  });
}
