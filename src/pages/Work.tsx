
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';

const Work = () => {
  return (
    <Layout>
      <section className="container max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-brand-dark dark:text-brand-yellow mb-4">Work</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of my most recent UX/UI design projects, showcasing my approach to solving user problems through thoughtful design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-gray-500 dark:text-gray-400 mb-2 block">{project.category}</span>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <Link to={`/work/${project.slug}`}>
                  <Button variant="ghost" className="p-0 text-brand-dark dark:text-brand-yellow hover:text-black dark:hover:text-white hover:bg-transparent group">
                    View case study
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Work;
