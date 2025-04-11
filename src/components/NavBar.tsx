
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Add scroll listener for navbar background
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-theme-darker/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <NavLink to="/" className="font-serif text-xl text-theme-accent hover:text-theme-accent-light transition-colors">
          Roee Farjoun
        </NavLink>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <NavLink 
              to="/" 
              className={({isActive}) => 
                isActive ? "nav-link active" : "nav-link"
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/work" 
              className={({isActive}) => 
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Work
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/writing" 
              className={({isActive}) => 
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Writing
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/taste" 
              className={({isActive}) => 
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Taste
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/running" 
              className={({isActive}) => 
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Running
            </NavLink>
          </li>
        </ul>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-theme-light"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-theme-darker/95 backdrop-blur-lg transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[300px] border-b border-theme-accent/20' : 'max-h-0'}`}>
        <ul className="flex flex-col p-4">
          <li className="py-2">
            <NavLink 
              to="/" 
              className={({isActive}) => 
                isActive ? "nav-link active" : "nav-link"
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink 
              to="/work" 
              className={({isActive}) => 
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Work
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink 
              to="/writing" 
              className={({isActive}) => 
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Writing
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink 
              to="/taste" 
              className={({isActive}) => 
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Taste
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink 
              to="/running" 
              className={({isActive}) => 
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Running
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
