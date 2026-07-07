import Image from "next/image";
import { BLOG } from "@/lib/data";
import Reveal from "./Reveal";
import { Container, SectionHeader } from "./ui";

export default function Blog() {
  return (
    <section id="blog" data-nav="dark" className="border-t border-dark-line bg-dark-bg py-20 sm:py-28">
      <Container className="!max-w-[1080px]">
        <Reveal>
          <SectionHeader
            eyebrow="Blog"
            title={BLOG.title}
            sub={BLOG.sub}
            dark
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {BLOG.posts.map((post, i) => (
            <Reveal key={post.title} delay={(i % 2) * 120}>
              <article className="group flex h-full flex-col rounded-[24px] bg-dark-card p-5 transition-transform duration-300 hover:-translate-y-1.5 sm:p-6">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
                  <Image
                    src={post.photo}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 480px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="mono-label absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1.5 text-ink-strong backdrop-blur">
                    {post.category}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold leading-snug tracking-tight text-white sm:text-2xl">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-dark-muted">
                  {post.excerpt}
                </p>

                <div className="mt-6 flex items-center gap-2.5 text-sm text-dark-muted">
                  <span className="relative h-7 w-7 overflow-hidden rounded-full">
                    <Image src={post.avatar} alt={post.author} fill sizes="28px" className="object-cover" />
                  </span>
                  <span>{post.author}</span>
                  <span className="h-1 w-1 rounded-full bg-white/25" />
                  <span>{post.read}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
