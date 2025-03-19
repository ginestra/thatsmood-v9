import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      const foundProject = projects.find(p => p.slug === slug);
      
      if (foundProject) {
        setProject(foundProject);
      }
      setLoading(false);
    }
  }, [slug]);

  const renderContent = (content: string) => {
    if (!content) return null;

    // Split content by paragraphs
    return content.split('\n\n').map((block, index) => {
      // Handle headers
      if (block.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-semibold mt-8 mb-4 dark:text-white">{block.replace('## ', '')}</h2>;
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
        
        return <p key={index} className="mb-6" dangerouslySetInnerHTML={{ __html: processedBlock }} />;
      }

      // Handle blockquotes
      if (block.startsWith('> ')) {
        return (
          <blockquote key={index} className="border-l-4 border-gray-300 pl-4 italic my-6 text-gray-600 dark:text-gray-300">
            {block.replace('> ', '')}
          </blockquote>
        );
      }

      // Handle simple tables
      if (block.includes('| --- |') || block.includes('|------|')) {
        const rows = block.split('\n');
        const headerRow = rows[0];
        const headers = headerRow.split('|').filter(cell => cell.trim()).map(cell => cell.trim());
        
        // Skip the separator row
        const dataRows = rows.slice(2);
        
        return (
          <div className="my-8 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  {headers.map((header, i) => (
                    <TableHead key={i}>{header}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {dataRows.map((row, rowIndex) => (
                  <TableRow key={rowIndex}>
                    {row.split('|').filter(cell => cell.trim()).map((cell, cellIndex) => (
                      <TableCell key={cellIndex}>{cell.trim()}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        );
      }

      // Regular paragraph
      return <p key={index} className="mb-6">{block}</p>;
    });
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

  if (!project) {
    return (
      <Layout>
        <div className="container max-w-5xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <p className="mb-8">The case study you're looking for doesn't exist or has been removed.</p>
          <Link to="/work">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Work
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="container max-w-5xl mx-auto px-6 py-16">
        <Link to="/work" className="inline-block mb-8">
          <Button variant="ghost" className="pl-0 text-brand-dark dark:text-brand-yellow">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Work
          </Button>
        </Link>

        <span className="text-sm text-gray-500 dark:text-gray-400 mb-2 block">{project.category}</span>
        <h1 className="text-4xl font-bold mb-4 text-brand-dark dark:text-brand-yellow">{project.title}</h1>
        
        <div className="aspect-[16/9] w-full overflow-hidden rounded-lg mb-8">
          <img 
            src={project.image} 
            alt={project.title} 
            className="object-cover w-full h-full"
          />
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">Overview</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>
          
          {project.fullDescription ? (
            <>
              <Tabs defaultValue="challenge" className="mt-8">
                <TabsList className="mb-6">
                  <TabsTrigger value="challenge">The Challenge</TabsTrigger>
                  <TabsTrigger value="approach">The Approach</TabsTrigger>
                  <TabsTrigger value="outcome">The Outcome</TabsTrigger>
                  {project.fullDescription.additionalContent && (
                    <TabsTrigger value="details">Project Details</TabsTrigger>
                  )}
                </TabsList>

                <TabsContent value="challenge" className="text-gray-600 dark:text-gray-300">
                  <p>{project.fullDescription.challenge || "Coming soon..."}</p>
                </TabsContent>
                
                <TabsContent value="approach" className="text-gray-600 dark:text-gray-300">
                  <p>{project.fullDescription.approach || "Coming soon..."}</p>
                </TabsContent>
                
                <TabsContent value="outcome" className="text-gray-600 dark:text-gray-300">
                  <p>{project.fullDescription.outcome || "Coming soon..."}</p>
                </TabsContent>

                {project.fullDescription.additionalContent && (
                  <TabsContent value="details" className="text-gray-600 dark:text-gray-300">
                    {renderContent(project.fullDescription.additionalContent)}
                  </TabsContent>
                )}
              </Tabs>
            </>
          ) : (
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mt-8">
              <p className="text-gray-600 dark:text-gray-300 italic">Full case study coming soon...</p>
            </div>
          )}
        </div>
      </article>
    </Layout>
  );
};

export default CaseStudy;
