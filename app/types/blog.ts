export type BlogBlock =
  | ParagraphBlock
  | QuoteBlock
  | ImageBlock
  | VideoBlock
  | CTASectionBlock
  | RelatedPostsBlock;

export interface ParagraphBlock {
  type: "paragraph";
  text: string;
}

export interface QuoteBlock {
  type: "quote";
  quote: string;
  owner: string;
}

export interface ImageBlock {
  type: "image";
  src: string;
  alt: string;
}

export interface VideoBlock {
  type: "video";
  url: string;
}

export interface CTASectionBlock {
  type: "cta";
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export interface RelatedPostsBlock {
  type: "relatedPosts";
}


export interface BlogPost {
  id: number;

  title: string;

  slug: string;
 
  author: string;

  category: string;

  excerpt: string;

  image: string;

  createdAt: string;

  featured?: boolean;
   
  content: BlogBlock[];
}