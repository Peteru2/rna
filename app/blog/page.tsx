
import BlogHero from "../components/blog/layout/BlogHero";
import BlogGrid from "../components/blog/layout/BlogGrid";
import SectionHeading from "../components/blog/layout/SectionHeading";
import { blogs } from "../data/blogData";
export default function BlogPage() {
  const featuredBlog = blogs.find(
    (blog) => blog.featured
  );

  const otherBlogs = blogs.filter(
    (blog) => !blog.featured
  );

  return (
    <main className="bg-[#f5f5f5] pb-32 pt-30">
      <div className="mx-auto max-w-6xl  sm:px-6 ">
        {/* FEATURED HERO */}
        {featuredBlog && (
          <BlogHero blog={featuredBlog} />
        )}

        {/* BLOG GRID */}
        <section className="mt-20">
          <SectionHeading
            title="Blog"
            subtitle="Ideas, trends, and inspiration for a brighter future"
          />

          <BlogGrid blogs={otherBlogs} />
        </section>
      </div>
    </main>
  );
}