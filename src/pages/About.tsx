
import Layout from '@/components/Layout';
import { Mail } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      <div className="content-container page-transition">
        <div className="max-w-4xl mx-auto">
          <h1 className="section-title animate-fade-up">About</h1>
          
          <div className="mt-6 glass-card p-8 animate-fade-up delay-200">
            <h2 className="text-3xl font-serif mb-6">Hey I am Roee Farjoun 👋</h2>
            <p className="text-lg mb-4 leading-relaxed text-theme-light/90">
              Welcome to my little home on the internet.
            </p>
            <p className="text-lg mb-4 leading-relaxed text-theme-light/90">
              I am not a big fan of social media but always wanted a place to express myself and my thoughts online. I'm currently based in Tel Aviv and recently finished my bachelor's degree in Industrial Engineering, Management & Humanities at Tel Aviv University.
            </p>
            <p className="text-lg mb-4 leading-relaxed text-theme-light/90">
              I have been tinkering with ideas, products and startup ideas for the past few years and am currently continuing my journey.
            </p>
            <p className="text-lg mb-4 leading-relaxed text-theme-light/90">
              I invite you to look around, learn a little more about me, my background and the things I think about and value.
            </p>
            <p className="text-lg leading-relaxed text-theme-light/90">
              Feel free to reach out for a quick chat or for any additional information.
            </p>
            
            <div className="mt-8">
              <a
                href="mailto:contact@example.com"
                className="inline-flex items-center px-5 py-2.5 bg-theme-accent hover:bg-theme-accent-light text-theme-darker font-medium rounded-lg transition-colors"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
