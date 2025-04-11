
import { ReactNode } from 'react';
import NavBar from './NavBar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-theme-dark text-theme-light flex flex-col">
      <NavBar />
      <main className="flex-1">
        {children}
      </main>
      <footer className="py-6 bg-theme-darker/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 text-center text-theme-light/60 text-sm">
          <p>© {new Date().getFullYear()} Roee Farjoun. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
