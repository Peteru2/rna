


import { BlogPost } from "../types/blog";

export const blogs: BlogPost[] = [
    {

    id: 1,
    slug: "rna-digital-literacy",

    title:
      "RNA Brand launches free digital literacy initiatives",

    category: "Initiatives",

    author: "RNA Editorial",

    createdAt: "16 March 2023",

    image: "/blog/blogHero.jpg",

    excerpt: "Kicks Off May 5th, 2025",
    featured: true,

    content: [
      {
        type: "paragraph",

        text: `Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.`,
      },

      {
        type: "paragraph",

        text: `We’re now at a pivotal moment in our AI journey. Breakthroughs in generative AI are fundamentally changing how people interact with technology and at Google, we’ve been responsibly developing large language models so we can safely bring them to our products.`,
      },

      {
        type: "quote",

        quote:
          "People worry that computers will get too smart and take over the world, but the real problem is that they’re too stupid and they’ve already taken over the world.",
        owner:"Pedro Domingos"
      },
      {
        type: "paragraph",
        text:"More than 3 billion people already benefit from AI-powered features in Google Workspace, whether it’s using Smart Compose in Gmail or auto-generated summaries in Google Docs. Now, we’re excited to take the next step and bring a limited set of trusted testers a new set of features that makes the process of writing even easier. In Gmail and Google Docs, you can simply type in a topic you’d like to write about, and a draft will be instantly generated for you. So if you’re a manager onboarding a new employee, Workspace saves you the time and effort involved in writing that first welcome email. From there, you can elaborate upon or abbreviate the message or adjust the tone to be more playful or professional — all in just a few clicks. We’ll be rolling out these new experiences to testers in the coming weeks."
      },

      {
        type: "video",

        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
    {
        type: "paragraph",
        text:"We’re so excited by the potential of generative AI, and the opportunities it will unlock — from helping people express themselves creatively, to helping developers build brand new types of applications, to transforming how businesses and governments engage their customers and constituents. Stay tuned for more to come in the weeks and months ahead."
      },
      {
        type: "cta",

        title: "Join Our Digital Literacy Initiative",

        description:
          "Become part of the next generation of digitally empowered students.",

        buttonText: "Join Initiative",

        buttonLink: "/initiative",
      },

      {
        type: "relatedPosts",
      },
    ],
  },
  

  {
    id: 2,

    title:
      "RNA Brand Expands Global Reach with New Evangelism Drive",

    slug: "rna-global-evangelism",

    category: "Ministry",

    author: "RNA Editorial",


    excerpt: "Global ministry impact",

    image: "/blog/blog1.jpg",

    createdAt: "August 20, 2022",

    content:[]

  },

  {
    id: 3,

    title:
      "True Worshippers Church Celebrates 10 Years of Impact",

    slug: "true-worshippers-anniversary",

    category: "Ministry",

    author: "RNA Editorial",


    excerpt: "Celebrating transformation",

    image: "/blog/blog2.jpg",

    createdAt: "August 20, 2022",

    content:[]

  },

  {
    id: 4,

    title:
      "Zoe Schools Ranked Among Top Institutions in Ogbomoso",

    slug: "zoe-school-ranking",

    category: "Initiative",
    author: "RNA Editorial",


    excerpt: "Academic excellence recognized",

    image: "/blog/blog3.jpg",

    createdAt: "August 20, 2022",

    content:[]

  },
];
