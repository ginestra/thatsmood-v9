
import React from 'react';
import { ArrowRight, Eye, Code, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <Layout>
      <section className="container max-w-5xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-dark dark:text-brand-yellow mb-4 animate-fade-in">
              Hi, I'm <span className="relative">
                <span className="relative z-10">Ginestra</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-brand-yellow -z-10"></span>
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-200 mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              UX Designer focused on creating accessible digital experiences
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              I'm passionate about building intuitive interfaces that solve real user problems through careful research and thoughtful design. My approach prioritizes accessibility and inclusive design principles.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Link to="/work" className="button">
                <Button className="bg-brand-dark hover:bg-black text-white">
                  View my work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/cv" className="button">
                <Button variant="outline" className="border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800 dark:text-gray-200">
                  Download CV
                </Button>
              </Link>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full bg-brand-yellow border-[12px] border-primary flex items-center justify-center animate-fade-in">
              <img
                src="/thatsmood-v9/assets/my-shadow.svg"
                alt="Profile"
                className="w-[12.25em] h-[12.25em] md:w-[16.3em] md:h-[16.3em]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900 py-16">
        <div className="container max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-gray-100">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-brand-light dark:bg-gray-800 p-6 rounded-lg">
              <div className="mb-4 bg-brand-yellow p-3 rounded-full inline-block">
                <Eye className="h-6 w-6 text-brand-dark" />
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">UX Research</h3>
              <p className="text-gray-600 dark:text-gray-300">Conducting user interviews, usability testing, and analysis to understand user needs</p>
            </div>
            <div className="bg-brand-light dark:bg-gray-800 p-6 rounded-lg">
              <div className="mb-4 bg-brand-yellow p-3 rounded-full inline-block">
                <Code className="h-6 w-6 text-brand-dark" />
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">UI Design</h3>
              <p className="text-gray-600 dark:text-gray-300">Creating visually appealing interfaces that align with brand identities and user expectations</p>
            </div>
            <div className="bg-brand-light dark:bg-gray-800 p-6 rounded-lg">
              <div className="mb-4 bg-brand-yellow p-3 rounded-full inline-block">
                <Smartphone className="h-6 w-6 text-brand-dark" />
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Accessibility</h3>
              <p className="text-gray-600 dark:text-gray-300">Ensuring digital products are usable by people of all abilities and conform to WCAG guidelines</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
