import { BlogData } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, User, Share2 } from "lucide-react";
import PostContent from "@/components/Blog/PostContent";
import { Metadata } from "next";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return BlogData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BlogData.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Nexflow Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BlogData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-white min-h-screen">
      {/* Navigation & Header */}
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-brand transition-colors mb-20 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Journal
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <span className="px-4 py-2 bg-brand/10 text-brand rounded-full text-[10px] font-black uppercase tracking-widest mb-8 inline-block">
             {post.category}
          </span>
          <h1 className="text-4xl md:text-7xl font-black text-slate-950 tracking-tighter uppercase leading-[0.9] mb-10">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center justify-between gap-8 pt-10 border-t border-slate-100">
             <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-slate-200 border-2 border-slate-100">
                   {post.author.image ? (
                     <Image src={post.author.image} alt={post.author.name} width={56} height={56} className="object-cover" />
                   ) : (
                     <div className="w-full h-full flex items-center justify-center text-slate-400"><User size={24} /></div>
                   )}
                </div>
                <div>
                  <p className="text-sm font-black text-slate-900 uppercase tracking-tighter leading-none mb-1">{post.author.name}</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{post.author.role}</p>
                </div>
             </div>

             <div className="flex items-center gap-8 text-slate-400 text-xs font-black uppercase tracking-widest">
                <span className="flex items-center gap-2"><Clock size={16} /> {post.readTime}</span>
                <span>{post.date}</span>
                <button className="flex items-center gap-2 hover:text-brand transition-colors">
                  <Share2 size={16} /> Share
                </button>
             </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative w-full h-[50vh] md:h-[70vh] mb-32">
        <Image 
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20" />
      </div>

      <PostContent post={post} />

      {/* Suggested Reading */}
      <section className="bg-slate-50 py-32 px-6">
         <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-20">
               <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
                  Keep <span className="text-slate-400">Reading.</span>
               </h2>
               <Link href="/blog" className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 hover:text-brand transition-colors">
                  View All Posts →
               </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto md:mx-0">
               {BlogData.filter(p => p.slug !== post.slug).slice(0, 2).map((p) => (
                  <Link key={p.id} href={`/blog/${p.slug}`} className="group">
                     <div className="bg-white p-8 rounded-[2rem] border border-slate-100 hover:shadow-xl transition-all duration-500">
                        <span className="text-[10px] font-black uppercase tracking-widest text-brand mb-4 block">{p.category}</span>
                        <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 group-hover:text-brand transition-colors line-clamp-2">
                           {p.title}
                        </h3>
                        <p className="text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">
                           Read Article →
                        </p>
                     </div>
                  </Link>
               ))}
            </div>
         </div>
      </section>
    </main>
  );
}
