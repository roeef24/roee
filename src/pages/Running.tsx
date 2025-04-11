
import Layout from '@/components/Layout';
import { Activity, ExternalLink } from 'lucide-react';

const Running = () => {
  const favoriteRuns = [
    "Hayarkon Park Loop, Tel Aviv",
    "Charles River Trail, Boston",
    "Yarkon River Trail, Start to Sea",
    "Central Park Loop, New York",
    "Ramat Gan Safari Trail"
  ];

  return (
    <Layout>
      <div className="content-container page-transition">
        <div className="max-w-4xl mx-auto">
          <h1 className="section-title animate-fade-up flex items-center gap-2">
            <Activity className="h-8 w-8" />
            <span>Running</span>
          </h1>
          
          <div className="mt-6 glass-card p-8 animate-fade-up delay-200">
            <p className="text-lg mb-6 leading-relaxed text-theme-light/90">
              I firmly believe running is one of the resources that humanity is underutilizing the most.
            </p>
            
            <p className="text-lg mb-6 leading-relaxed text-theme-light/90">
              For me it's an anchor, a way to ground myself and sort through my thoughts. It's like a washing machine for the mind. More than just physical exercise, running builds resilience, willpower, and tenacity. It's a great way to strengthen self-efficacy and push past your limits.
            </p>
            
            <p className="text-lg mb-6 leading-relaxed text-theme-light/90">
              Running has taught me a few valuable lessons and often, it's while I'm running that I come up with my best ideas and insights.
            </p>
            
            <p className="text-lg mb-8 leading-relaxed text-theme-light/90">
              I am currently working on Runline as a side project. 
              <a href="#" className="inline-flex items-center ml-2 text-theme-accent hover:underline">
                Check it out!
                <ExternalLink className="ml-1 h-4 w-4" />
              </a>
            </p>
            
            <h2 className="text-2xl font-serif mb-4 text-theme-accent">Some of My Favourite Runs</h2>
            
            <ul className="space-y-2 ml-4">
              {favoriteRuns.map((run, index) => (
                <li 
                  key={index} 
                  className="flex items-center text-lg text-theme-light/90"
                  style={{ animationDelay: `${500 + index * 100}ms` }}
                >
                  <span className="text-theme-accent mr-2">•</span>
                  {run}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Running;
