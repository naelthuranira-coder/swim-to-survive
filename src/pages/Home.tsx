import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import WaveDivider from "../components/WaveDivider";
import GuideIcon from "../components/illustrations/GuideIcon";
import GuideCard from "../components/GuideCard";
import UsDrowningMap from "../components/UsDrowningMap";
import { guides } from "../data/guides";
import { posts } from "../data/posts";
import { guideProfile } from "../data/guide-profile";
import { headlineStats } from "../data/stats";
import { galleryImages } from "../data/images";


const recentPosts = [...posts]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 3);

export default function Home() {
  return (
    <div>
      {/* MEET THE GUIDE — top bar */}
      <div className="bg-foam border-b border-teal/10">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap items-center justify-between gap-3">
          <Link to="/about-us" className="flex items-center gap-3 group">
            <img
              src={guideProfile.photo}
              alt={guideProfile.name}
              className="w-11 h-11 rounded-full object-cover border-2 border-sand shadow-sm"
            />
            <span className="text-sm leading-tight">
              <span className="block font-semibold text-deep group-hover:text-teal transition-colors">
                {guideProfile.name}
              </span>
              <span className="block text-ink/55 text-xs">{guideProfile.title}</span>
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/about-us" className="text-sm font-semibold text-teal hover:text-deep">
              About us
            </Link>
            <Link
              to="/support"
              className="text-sm font-semibold bg-gold text-deep px-4 py-2 rounded-full hover:bg-gold-dark hover:text-sand transition-colors"
            >
              Support my guide
            </Link>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pt-14 md:pt-20 pb-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-[3.25rem] font-semibold leading-[1.08] text-deep">
            If you can swim, you can teach your child to swim safely.
          </h1>
          <p className="mt-6 text-lg text-ink/75 leading-relaxed max-w-lg">
            Watersafe Hub turns ordinary pool time into real swim lessons.
            Follow free, step-by-step guides built for parents — and learn
            the everyday habits that keep every family safer around water.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/guides"
              className="bg-teal text-sand font-semibold px-6 py-3.5 rounded-full hover:bg-deep transition-colors"
            >
              Browse the guides
            </Link>
            <Link
              to="/blog"
              className="border-2 border-teal/30 text-deep font-semibold px-6 py-3.5 rounded-full hover:border-teal transition-colors"
            >
              Read safety tips
            </Link>
          </div>
        </div>
        <div className="mt-10 md:mt-0">
          <img
            src={galleryImages.poolSplash}
            alt="Illustration of a parent teaching their child to swim in a pool"
            className="w-full rounded-2xl shadow-[0_20px_50px_-20px_rgba(14,58,69,0.35)]"
          />
        </div>
      </section>

      <WaveDivider color="#E8F3F0" />

      {/* WHAT WE DO */}
      <section className="bg-foam">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20 grid md:grid-cols-2 gap-12">
          <SectionHeading
            title="Two things, done well"
            lede="We believe most drownings are preventable when parents have two things: a clear way to teach swimming themselves, and the safety habits to use every time water is nearby."
          />
          <div className="space-y-5">
            <div className="flex gap-4 bg-sand rounded-2xl p-5">
              <div className="shrink-0 w-11 h-11 rounded-full bg-teal/10 text-teal flex items-center justify-center">
                <GuideIcon type="float" />
              </div>
              <div>
                <h3 className="font-semibold text-deep">Step-by-step swim guides</h3>
                <p className="text-sm text-ink/70 mt-1 leading-relaxed">
                  Free lessons broken into small, teachable stages — from
                  first splashes to swimming independently.
                </p>
              </div>
            </div>
            <div className="flex gap-4 bg-sand rounded-2xl p-5">
              <div className="shrink-0 w-11 h-11 rounded-full bg-teal/10 text-teal flex items-center justify-center">
                <GuideIcon type="poolRules" />
              </div>
              <div>
                <h3 className="font-semibold text-deep">Everyday safety habits</h3>
                <p className="text-sm text-ink/70 mt-1 leading-relaxed">
                  Practical rules for pools, bath time, and open water — the
                  kind you can say out loud before every swim.
                </p>
              </div>
            </div>

            <div className="border-l-4 border-gold bg-gold/10 rounded-r-xl px-5 py-4">
              <p className="text-sm text-deep leading-relaxed">
                <span className="font-semibold">Before you start: </span>
                if you can't swim yourself, or wouldn't be able to reach your
                child in an emergency, please enrol them with a certified
                instructor first — or learn to swim yourself before you
                teach. Your safety is part of theirs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="bg-deep text-sand">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              dark
              title="Why this matters"
              lede="These numbers are hard to read. That's the point — they're also the reason a short guide, followed consistently, saves lives."
            />
            <Link to="/statistics" className="text-gold font-semibold text-sm hover:text-sand shrink-0">
              See full statistics &rarr;
            </Link>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {headlineStats.map((s) => (
              <div key={s.label} className="border border-sand/15 rounded-2xl p-6">
                <div className="text-3xl font-display font-semibold text-gold">
                  {s.value}
                </div>
                <p className="mt-3 text-sm text-sand/85 leading-relaxed">{s.label}</p>
                <p className="mt-3 text-xs text-sand/50">{s.source}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-sand/5 border border-sand/15 p-5 md:p-7">
            <UsDrowningMap compact />
            <Link
              to="/statistics"
              className="mt-2 inline-block text-sm font-semibold text-gold hover:text-sand"
            >
              See the full breakdown &rarr;
            </Link>
          </div>
        </div>
      </section>

      <WaveDivider color="#FBFAF6" flip />

      {/* GUIDES PREVIEW (merged with photo gallery) */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <SectionHeading
            title="Start with a guide"
            lede="Real pool time, guide by guide — tap a card to explore the full step-by-step lesson for that stage."
          />
          <Link to="/guides" className="text-teal font-semibold text-sm hover:text-deep shrink-0">
            See all guides
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.slice(0, 6).map((g) => (
            <GuideCard key={g.slug} guide={g} />
          ))}
        </div>
      </section>

      {/* VIDEO */}
      <section className="bg-foam">
        <div className="max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-20">
          <SectionHeading
            align="center"
            title="Watch: everyday water safety"
            lede="A short introduction to the habits covered throughout our guides."
          />
          <div className="mt-10 rounded-2xl overflow-hidden shadow-[0_20px_50px_-20px_rgba(14,58,69,0.35)] aspect-video">
         <video 
  className="w-full h-full" 
  src="/videos/watersafety.mp4" 
  title="Water Safety — American Red Cross" 
  controls 
/>

          </div>
          <p className="text-center text-xs text-ink/50 mt-3">
            Video courtesy of the American Red Cross.
          </p>
        </div>
      </section>

      {/* RECENT POSTS */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <SectionHeading
            title="From the blog"
            lede="Recent safety tips and guidance for parents."
          />
          <Link to="/blog" className="text-teal font-semibold text-sm hover:text-deep shrink-0">
            See all posts
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group rounded-2xl border border-teal/15 overflow-hidden hover:border-teal/40 hover:shadow-[0_8px_28px_-12px_rgba(14,58,69,0.25)] transition-all bg-sand flex flex-col"
            >
              <div className="aspect-[16/10] overflow-hidden bg-foam">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <span className="text-[11px] font-semibold uppercase tracking-wide text-teal">
                  {post.category}
                </span>
                <h3 className="mt-2 font-semibold text-deep leading-snug group-hover:text-teal transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-ink/65 mt-2 leading-relaxed line-clamp-2 flex-1">
                  {post.excerpt}
                </p>
                <p className="text-xs text-ink/45 mt-4">
                  {post.date} &middot; {post.readTime}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-gold">
        <div className="max-w-4xl mx-auto px-5 md:px-8 py-14 md:py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-deep">
            Ready to start today?
          </h2>
          <p className="mt-3 text-deep/80 max-w-xl mx-auto">
            Pick the guide that matches your child's stage, or send us a
            message if you're not sure where to begin.
          </p>
          <div className="mt-7 flex flex-wrap gap-4 justify-center">
            <Link
              to="/guides"
              className="bg-deep text-sand font-semibold px-6 py-3.5 rounded-full hover:bg-ink transition-colors"
            >
              Browse the guides
            </Link>
            <Link
              to="/contact"
              className="border-2 border-deep/30 text-deep font-semibold px-6 py-3.5 rounded-full hover:border-deep transition-colors"
            >
              Contact us
            </Link>
          </div>
          <p className="mt-6 text-sm text-deep/70">
            Want to help more families find this?{" "}
            <Link to="/support" className="font-semibold underline">
              Support my guide
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
