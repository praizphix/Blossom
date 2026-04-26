import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { newsArticles } from '../data/newsData';

const NewsDetail = () => {
  const { slug } = useParams();
  const article = newsArticles.find(item => item.slug === slug);

  if (!article) {
    return <Navigate to="/news" replace />;
  }

  return (
    <main className="pt-12 pb-24">
      {/* Breadcrumb */}
      <section className="max-w-container-max mx-auto px-8 mb-8">
        <div className="flex items-center gap-2 text-sm text-on-surface-variant">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
          <Link to="/news" className="hover:text-primary transition-colors">News</Link>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
          <span className="text-on-surface">{article.title}</span>
        </div>
      </section>

      {/* Article Header */}
      <section className="max-w-4xl mx-auto px-8 mb-12">
        <div className="mb-6">
          <span className={`inline-block bg-${article.categoryColor} text-on-${article.categoryColor} text-label-md px-4 py-2 rounded-full mb-6`}>
            {article.category.toUpperCase()}
          </span>
          <h1 className="font-display-xl text-primary mb-6">
            {article.title}
          </h1>
          <div className="flex items-center gap-6 text-on-surface-variant">
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">calendar_today</span>
              {article.date}
            </span>
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">person</span>
              {article.author}
            </span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="rounded-[2rem] overflow-hidden mb-12 shadow-2xl">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full aspect-[16/9] object-cover"
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          {article.content.map((block, index) => {
            if (block.type === 'paragraph') {
              return (
                <p key={index} className="font-body-lg text-on-surface-variant mb-6 leading-relaxed">
                  {block.text}
                </p>
              );
            }
            
            if (block.type === 'stats') {
              return (
                <div key={index} className="bg-surface-container p-8 rounded-2xl my-8">
                  <h3 className="font-headline-sm text-primary mb-6">{block.title}</h3>
                  <ul className="space-y-4">
                    {block.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-secondary text-2xl">check_circle</span>
                        <span className="font-body-md text-on-surface">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }
            
            return null;
          })}
        </article>

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-outline-variant">
          <p className="font-label-md text-on-surface-variant mb-4">Share this article:</p>
          <div className="flex gap-3">
            <button className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary hover:text-white transition-all">
              <span className="material-symbols-outlined">share</span>
            </button>
            <button className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary hover:text-white transition-all">
              <span className="material-symbols-outlined">mail</span>
            </button>
          </div>
        </div>

        {/* Back to News */}
        <div className="mt-12">
          <Link 
            to="/news"
            className="inline-flex items-center gap-2 text-primary font-label-md hover:gap-3 transition-all"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Back to News
          </Link>
        </div>
      </section>

      {/* Related News */}
      <section className="max-w-container-max mx-auto px-8 mt-16">
        <h2 className="font-headline-md text-primary mb-8">More News</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {newsArticles
            .filter(item => item.id !== article.id)
            .slice(0, 3)
            .map(relatedArticle => (
              <Link 
                key={relatedArticle.id}
                to={`/news/${relatedArticle.slug}`}
                className="group rounded-[24px] bg-white p-2 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/3] rounded-[20px] overflow-hidden mb-4">
                  <img 
                    src={relatedArticle.image} 
                    alt={relatedArticle.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="px-4 pb-4">
                  <span className="text-label-md text-primary font-bold text-xs mb-2 block">
                    {relatedArticle.category.toUpperCase()}
                  </span>
                  <h3 className="font-headline-sm text-primary mb-2 line-clamp-2">
                    {relatedArticle.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant line-clamp-2 mb-4">
                    {relatedArticle.excerpt}
                  </p>
                  <span className="text-primary font-semibold text-sm group-hover:underline">
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </main>
  );
};

export default NewsDetail;
