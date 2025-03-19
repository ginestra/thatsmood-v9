
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import { articles } from '@/data/articles';

const Thoughts = () => {
  return (
    <Layout>
      <section className="container max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-brand-dark dark:text-brand-yellow mb-4">Thoughts</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Thoughts, insights, and perspectives on UX design, accessibility, and creating meaningful digital experiences
          </p>
        </div>

        <div className="space-y-10">
          {articles.map((article) => (
            <article key={article.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row">
              <div className="md:w-1/3 aspect-video md:aspect-auto overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6 md:w-2/3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="text-sm font-medium px-2 py-1 bg-brand-light dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-200">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {format(article.date, 'MMMM d, yyyy')}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold mb-2 dark:text-white">{article.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{article.excerpt}</p>
                </div>
                <Link to={`/thoughts/${article.slug}`}>
                  <Button variant="ghost" className="p-0 text-brand-dark dark:text-brand-yellow hover:text-black dark:hover:text-white hover:bg-transparent self-start group">
                    Read more
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Thoughts;
