"use client";


import { BlogBlock } from "@/app/types/blog";
import ParagraphBlock from "../blocks/ParagraphBlock";


import QuoteBlock from "../blocks/QuoteBlock";

import VideoBlock from "../blocks/VideoBlock";

import CTASectionBlock from "../blocks/CTASectionBlock";

import RelatedPostsBlock from "../blocks/RelatedPostsBlock";


interface Props {
  content: BlogBlock[];
}

export default function ArticleRenderer({
  content,
}: Props) {
  return (
    <section className="mt-14">
      {content.map((block, index) => {
        switch (block.type) {

          case "paragraph":
            return (
              <ParagraphBlock
                key={index}
                text={block.text}
              />
            );

          case "quote":
            return (
              <QuoteBlock
                key={index}
                quote={block.quote}
                owner={block.owner}
              />
            );

          case "video":
            return (
              <VideoBlock
                key={index}
                url={block.url}
              />
            );

          case "cta":
            return (
              <CTASectionBlock
                key={index}
                title={block.title}
                description={block.description}
                buttonText={block.buttonText}
                buttonLink={block.buttonLink}
              />
            );

          case "relatedPosts":
            return (
              <RelatedPostsBlock
                key={index}
              />
            );

          default:
            return null;
        }
      })}
    </section>
  );
}
