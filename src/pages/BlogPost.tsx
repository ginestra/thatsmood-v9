
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { ArrowLeft, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import { articles } from '@/data/articles';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const articleId = parseInt(id);
      const foundArticle = articles.find(a => a.id === articleId);
      
      if (foundArticle) {
        setArticle(foundArticle);
      }
      setLoading(false);
    }
  }, [id]);

  const renderContent = (content: string) => {
    if (!content) return null;

    // Split content by paragraphs
    return content.split('\n\n').map((block, index) => {
      // Handle headers (h2, h3, h4)
      if (block.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-semibold mt-8 mb-4 dark:text-white">{block.replace('## ', '')}</h2>;
      }
      
      if (block.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-semibold mt-6 mb-3 dark:text-white">{block.replace('### ', '')}</h3>;
      }
      
      if (block.startsWith('#### ')) {
        return <h4 key={index} className="text-lg font-semibold mt-4 mb-2 dark:text-white">{block.replace('#### ', '')}</h4>;
      }
      
      // Handle images
      if (block.startsWith('![') && block.includes('](') && block.endsWith(')')) {
        const altText = block.match(/!\[(.*?)\]/)?.[1] || '';
        const imageUrl = block.match(/\((.*?)\)/)?.[1] || '';
        return (
          <figure key={index} className="my-8">
            <img src={imageUrl} alt={altText} className="rounded-lg w-full" />
            {altText && <figcaption className="text-sm text-center mt-2 text-gray-500">{altText}</figcaption>}
          </figure>
        );
      }

      // Handle bullet lists
      if (block.trim().split('\n').some(line => line.trim().startsWith('* ') || line.trim().startsWith('- '))) {
        const items = block.trim().split('\n').filter(line => 
          line.trim().startsWith('* ') || line.trim().startsWith('- ')
        );
        
        return (
          <ul key={index} className="list-disc pl-6 mb-6 space-y-1">
            {items.map((item, i) => {
              const content = item.replace(/^[*-]\s/, '');
              // Process both bold and italic text
              const processedContent = renderFormattedText(content);
              return <li key={i} dangerouslySetInnerHTML={{ __html: processedContent }}></li>;
            })}
          </ul>
        );
      }

      // Handle numbered lists
      if (/^\d+\.\s/.test(block)) {
        const items = block.split('\n').filter(line => /^\d+\.\s/.test(line));
        return (
          <ol key={index} className="list-decimal pl-6 mb-6 space-y-1">
            {items.map((item, i) => {
              const content = item.replace(/^\d+\.\s/, '');
              // Process bold and italic text in list items
              const processedContent = renderFormattedText(content);
              return <li key={i} dangerouslySetInnerHTML={{ __html: processedContent }}></li>;
            })}
          </ol>
        );
      }

      // Handle links
      let processedBlock = block;
      const linkRegex = /\[(.*?)\]\((.*?)\)/g;
      const linkMatches = [...block.matchAll(linkRegex)];
      
      if (linkMatches.length > 0) {
        processedBlock = block;
        linkMatches.forEach(match => {
          const [fullMatch, text, url] = match;
          processedBlock = processedBlock.replace(
            fullMatch, 
            `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">${text}</a>`
          );
        });
        
        // Also process bold and italic text in links
        processedBlock = renderFormattedText(processedBlock);
        return <p key={index} className="mb-6" dangerouslySetInnerHTML={{ __html: processedBlock }} />;
      }

      // Handle blockquotes
      if (block.startsWith('> ')) {
        const content = renderFormattedText(block.replace('> ', ''));
        return (
          <blockquote key={index} className="border-l-4 border-gray-300 pl-4 italic my-6 text-gray-600 dark:text-gray-300" 
            dangerouslySetInnerHTML={{ __html: content }}>
          </blockquote>
        );
      }

      // Regular paragraph with text formatting
      return <p key={index} className="mb-6" dangerouslySetInnerHTML={{ __html: renderFormattedText(block) }} />;
    });
  };

  // Enhanced helper function to process both bold and italic text
  const renderFormattedText = (text: string) => {
    // Replace bold text first
    let formattedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Then replace italic text
    formattedText = formattedText.replace(/\*(.*?)\*/g, '<em>$1</em>');
    // Also support underscore for italics
    formattedText = formattedText.replace(/_(.*?)_/g, '<em>$1</em>');
    
    return formattedText;
  };

  if (loading) {
    return (
      <Layout>
        <div className="container max-w-5xl mx-auto px-6 py-16">
          <p className="text-center">Loading...</p>
        </div>
      </Layout>
    );
  }

  if (!article) {
    return (
      <Layout>
        <div className="container max-w-5xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="mb-8">The article you're looking for doesn't exist or has been removed.</p>
          <Link to="/thoughts">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Thoughts
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="container max-w-3xl mx-auto px-6 py-16">
        <Link to="/thoughts" className="inline-block mb-8">
          <Button variant="ghost" className="pl-0 text-brand-dark dark:text-brand-yellow">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Thoughts
          </Button>
        </Link>

        <div className="flex items-center space-x-4 mb-4">
          <span className="text-sm font-medium px-2 py-1 bg-brand-light dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-200">
            {article.category}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            {format(article.date, 'MMMM d, yyyy')}
          </span>
        </div>

        <h1 className="text-4xl font-bold mb-6 text-brand-dark dark:text-brand-yellow">{article.title}</h1>
        
        <div className="aspect-[16/9] w-full overflow-hidden rounded-lg mb-8">
          <img 
            src={article.image} 
            alt={article.title} 
            className="object-cover w-full h-full"
          />
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">{article.excerpt}</p>
          
          {article.content ? (
            <div className="text-gray-600 dark:text-gray-300">
              {renderContent(article.content)}
            </div>
          ) : (
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mt-8">
              <p className="text-gray-600 dark:text-gray-300 italic">Full article coming soon...</p>
            </div>
          )}
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
