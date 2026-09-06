import { Link, useParams } from "react-router-dom";
import { posts } from "../data/posts";
import NotFound from "./NotFound";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function PostDetail() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <NotFound />;

  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="max-w-2xl mx-auto px-5 md:px-8 py-14 md:py-20">
      <Link to="/blog" className="text-sm text-teal font-semibold hover:text-deep">
        &larr; All posts
      </Link>

      <div className="mt-6 rounded-2xl overflow-hidden aspect-[16/9]">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
      </div>

      <p className="text-xs font-semibold text-teal uppercase tracking-wide mt-6">
        {post.category}
      </p>
      <h1 className="text-3xl md:text-4xl font-semibold text-deep leading-tight mt-2">
        {post.title}
      </h1>
      <p className="text-sm text-ink/45 mt-3">
        {formatDate(post.date)} &middot; {post.readTime}
      </p>

      <div className="mt-8 space-y-5">
        {post.body.map((para, i) => (
          <p key={i} className="text-ink/80 leading-relaxed">
            {para}
          </p>
        ))}
      </div>

      <div className="mt-14 pt-8 border-t border-teal/10">
        <h2 className="font-semibold text-deep text-lg mb-4">More from the blog</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {more.map((p) => (
            <Link
              key={p.slug}
              to={`/blog/${p.slug}`}
              className="rounded-xl border border-teal/15 overflow-hidden hover:border-teal/40 transition-colors"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <p className="text-xs text-teal font-medium">{p.category}</p>
                <p className="font-semibold text-deep text-sm mt-1">{p.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
