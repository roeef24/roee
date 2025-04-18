
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);
  
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-theme-dark z-0">
        <div className="w-full h-full bg-[url('/lovable-uploads/c0d1784b-f5f1-4bd0-9d3b-365d20bcaffd.png')] bg-cover bg-center opacity-50" style={{
        backgroundPosition: '50% 30%'
      }} />
        <div className="absolute inset-0 bg-gradient-to-t from-theme-dark via-theme-dark/60 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="mb-10 flex justify-center">
          <div className={`w-[68px] h-[68px] md:w-[23rem] md:h-[23rem] rounded-full overflow-hidden border-4 border-theme-accent transition-all duration-1000 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{
          boxShadow: '0 0 30px 5px rgba(138, 92, 246, 0.4)'
        }}>
            <img src="/lovable-uploads/434152a0-8b92-449e-b882-e2c3193d9b85.png" alt="Roee Farjoun" className="w-full h-full object-cover" />
          </div>
        </div>
        
        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-8 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          Hey 👋, welcome to my little home on the internet
        </h1>
        
        <div className={`transition-all duration-1000 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Link to="/work" className="inline-flex items-center py-3 bg-theme-accent hover:bg-theme-accent-light text-theme-darker font-medium rounded-full transition-colors px-[24px]">
            See my work
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
