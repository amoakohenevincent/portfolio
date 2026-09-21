import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertCircle } from 'lucide-react';
import Button from '../components/Button';

export default function NotFoundPage() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center pt-20">
      <div className="container-x text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-bg-card text-accent-light shadow-xl">
          <AlertCircle size={32} />
        </div>
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-light">
          404 Error
        </span>
        <h1 className="mt-3 text-section font-extrabold text-text-primary">
          Page Not Found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base text-text-secondary">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8 flex justify-center">
          <Link to="/">
            <Button variant="primary" className="gap-2">
              <Home size={16} />
              <span>Return Home</span>
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
