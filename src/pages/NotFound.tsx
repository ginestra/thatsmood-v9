
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="container max-w-5xl mx-auto px-6 py-20 text-center">
        <div className="max-w-md mx-auto">
          <div className="relative mb-8">
            <div className="text-9xl font-bold text-gray-100">404</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-brand-dark">Page Not Found</h1>
            </div>
          </div>
          <p className="text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/">
            <Button className="bg-brand-dark hover:bg-black text-white">
              <Home className="mr-2 h-4 w-4" />
              Return Home
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
