
import Layout from '@/components/Layout';
import { ArrowRight, Book } from 'lucide-react';
import { Link } from 'react-router-dom';

const Writing = () => {
  const essays = [
    { title: "What to Do", slug: "what-to-do" },
    { title: "The Origins of Wokeness", slug: "origins-of-wokeness" },
    { title: "Writes and Write-Nots", slug: "writes-and-write-nots" },
    { title: "When To Do What You Love", slug: "when-to-do-what-you-love" },
    { title: "Founder Mode", slug: "founder-mode" },
    { title: "The Right Kind of Stubborn", slug: "right-kind-of-stubborn" },
    { title: "The Reddits", slug: "the-reddits" },
    { title: "How to Start Google", slug: "how-to-start-google" },
    { title: "The Best Essay", slug: "the-best-essay" },
    { title: "Superlinear Returns", slug: "superlinear-returns" },
    { title: "How to Do Great Work", slug: "how-to-do-great-work" },
    { title: "How to Get New Ideas", slug: "how-to-get-new-ideas" },
    { title: "The Need to Read", slug: "the-need-to-read" },
    { title: "What You (Want to)* Want", slug: "what-you-want-to-want" },
    { title: "Alien Truth", slug: "alien-truth" },
    { title: "What I've Learned from Users", slug: "what-ive-learned-from-users" },
    { title: "Heresy", slug: "heresy" }
  ];

  return (
    <Layout>
      <div className="content-container page-transition">
        <div className="max-w-4xl mx-auto">
          <h1 className="section-title animate-fade-up flex items-center gap-2">
            <Book className="h-8 w-8" />
            <span>Essays</span>
          </h1>
          
          <p className="text-lg mb-6 animate-fade-up delay-200">
            If you're not sure which to read, try <Link to="/writing/how-to-do-great-work" className="text-theme-accent hover:underline">How to Do Great Work</Link>, <Link to="/writing/having-kids" className="text-theme-accent hover:underline">Having Kids</Link>, or <Link to="/writing/how-to-lose-time-and-money" className="text-theme-accent hover:underline">How to Lose Time and Money</Link>.
          </p>
          
          <div className="mt-8 space-y-0.5 animate-fade-up delay-300">
            {essays.map((essay, index) => (
              <div 
                key={index}
                className="flex items-center"
                style={{ animationDelay: `${300 + index * 50}ms` }}
              >
                <span className="text-theme-accent/60 mr-3">•</span>
                <Link 
                  to={`/writing/${essay.slug}`} 
                  className="py-2 text-lg hover:text-theme-accent transition-colors group flex items-center"
                >
                  {essay.title}
                  <ArrowRight className="ml-2 h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Writing;
