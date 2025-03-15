
import Layout from '@/components/Layout';
import { Briefcase, GraduationCap, FileText } from 'lucide-react';

const Work = () => {
  return (
    <Layout>
      <div className="content-container page-transition">
        <div className="max-w-4xl mx-auto">
          <h1 className="section-title animate-fade-up">Work</h1>
          
          <div className="mt-10">
            <div className="mb-12 animate-fade-up delay-200">
              <div className="flex items-start">
                <div className="mt-1 mr-4">
                  <div className="p-3 bg-theme-accent rounded-full text-theme-darker">
                    <Briefcase className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-serif mb-6">Experience</h2>
                  
                  <div className="space-y-8">
                    <div className="work-item delay-300">
                      <h3 className="text-xl font-medium mb-1">Various Startups — Entrepreneur</h3>
                      <p className="text-sm text-theme-light/70 mb-2">08/21 to Present</p>
                      <p className="text-theme-light/90"></p>
                    </div>
                    
                    <div className="work-item delay-400">
                      <h3 className="text-xl font-medium mb-1">Curiosity and TAU Innovation Labs — Research Assistant to Prof. Goren Gordon</h3>
                      <p className="text-sm text-theme-light/70 mb-2">08/22 to 10/23</p>
                      <p className="text-theme-light/90"></p>
                    </div>
                    
                    <div className="work-item delay-500">
                      <h3 className="text-xl font-medium mb-1">Shaldor — Strategy Consultant Intern</h3>
                      <p className="text-sm text-theme-light/70 mb-2">08/22 to 10/22</p>
                      <p className="text-theme-light/90"></p>
                    </div>
                    
                    <div className="work-item delay-600">
                      <h3 className="text-xl font-medium mb-1">Alley Runners Athletic Club — Semi Professional Runner</h3>
                      <p className="text-sm text-theme-light/70 mb-2">04/21 to 07/23</p>
                      <p className="text-theme-light/90"></p>
                    </div>
                    
                    <div className="work-item delay-700">
                      <h3 className="text-xl font-medium mb-1">Special Combat Division — IDF, Unit 8200</h3>
                      <p className="text-sm text-theme-light/70 mb-2">08/15 to 08/18</p>
                      <p className="text-theme-light/90"></p>
                    </div>
                  </div>
                  
                  <p className="mt-6 text-theme-light/80 italic animate-fade-up delay-800">
                    * Feel free to reach out for my full CV.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mb-12 animate-fade-up delay-300">
              <div className="flex items-start">
                <div className="mt-1 mr-4">
                  <div className="p-3 bg-theme-accent rounded-full text-theme-darker">
                    <FileText className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-serif mb-6">Projects</h2>
                  <p className="text-theme-light/80 italic">Coming soon...</p>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-up delay-400">
              <div className="flex items-start">
                <div className="mt-1 mr-4">
                  <div className="p-3 bg-theme-accent rounded-full text-theme-darker">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-serif mb-6">Education</h2>
                  
                  <div className="work-item delay-500">
                    <h3 className="text-xl font-medium mb-1">Tel Aviv University</h3>
                    <p className="mb-2">BS - Industrial Engineering, Management & Humanities (Mandel Excellence Program) — Magna Cum Laude</p>
                  </div>
                  
                  <h3 className="text-xl font-medium mt-8 mb-4 work-item delay-600">Courses I loved</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4 work-item delay-700">
                    <li>Optimization and Meta-Heuristics (especially Genetic Algorithms)</li>
                    <li>Complex Networks</li>
                    <li>Physics 1 & 2</li>
                    <li>Aesthetics</li>
                    <li>Python</li>
                    <li>Moral Philosophy</li>
                    <li>Modern Philosophy</li>
                    <li>Rhetorics (Theoretical & Applied)</li>
                    <li>Architecture and Environment in Japan</li>
                    <li>Managerial Accounting and Costing</li>
                    <li>Game Theory and Its Applications</li>
                    <li>Generative Art</li>
                  </ul>
                  
                  <h3 className="text-xl font-medium mt-8 mb-4 work-item delay-800">Activities and societies</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4 work-item delay-800">
                    <li>First Place (5000 NIS prize), EcoTAU Hackathon (2022)</li>
                    <li>Startup Scouter in ScouTAU Program, TAU Entrepreneurship Center (2022)</li>
                    <li>University Representative Running and Aquathlon Teams (2019-2023)</li>
                    <li>Dean's List (2022-2023)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Work;
