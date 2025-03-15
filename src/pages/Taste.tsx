import { useState } from 'react';
import Layout from '@/components/Layout';
import { Book, Headphones, Mail, MessageSquare, Bookmark, Box, Tool, Quote } from 'lucide-react';

const Taste = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'books', label: 'Books', icon: <Book className="h-4 w-4" /> },
    { id: 'podcasts', label: 'Podcasts', icon: <Headphones className="h-4 w-4" /> },
    { id: 'newsletters', label: 'Newsletters', icon: <Mail className="h-4 w-4" /> },
    { id: 'meditations', label: 'Meditations', icon: <MessageSquare className="h-4 w-4" /> },
    { id: 'products', label: 'Products', icon: <Box className="h-4 w-4" /> },
    { id: 'tools', label: 'Tools', icon: <Tool className="h-4 w-4" /> },
    { id: 'quotes', label: 'Quotes', icon: <Quote className="h-4 w-4" /> }
  ];
  
  const books = [
    "The Day Lasts More Than a Hundred Years, by Chinghiz Aitmatov",
    "Zen and the Art of Motorcycle Maintenance, by Robert M. Pirsig",
    "Make Something Wonderful, Steve Jobs in his own words, by Steve Jobs Archive",
    "Hell Yeah or No, Derek Sivers",
    "Zero to One: Notes on Startups, Or How to Build the Future, by Peter Thiel",
    "The Subtle Art of Not Giving a F*ck, by Mark Manson",
    "The Banquet of Plato, Dialogue Translated by Percy B. Shelley"
  ];
  
  const podcasts = [
    "How I Built This with Guy Raz",
    "This Week: Podcast on Startups (Hebrew)",
    "Naval"
  ];
  
  const newsletters = [
    "Every",
    "Wait but Why",
    "The 3-2-1 Newsletter by James Clear",
    "Not Boring by Packy McCormick",
    "Z-Axis by Nir Zicherman"
  ];
  
  const meditations = [
    "Just for Today, Tom Evans",
    "Focus & Awareness, Saqib Rizvi",
    "Morning Ritual, Jason McGrice",
    "Mountain Meditation, Andy Hobson"
  ];
  
  const products = [
    "LifeStraw, a hollow-membrane filter built into a straw allowing you to drink water from almost anywhere",
    "Red Julius Meinl Coffee Cup, Aesthetically pleasing cup, perfect for your macineta coffee"
  ];
  
  const quotes = [
    "Questions are places in your mind where answers fit. If you haven't asked the question, the answer has nowhere to go. It hits your mind and bounces right off. You have to ask the question — you have to want to know — in order to open up the space for the answer to fit.- Jason Fried paraphrasing Clayton Christensen",
    "⁠Beauty is not the goal of competitive sports, but high-level sports are a prime venue for the expression of human beauty.- David Foster Wallace, Roger Federer as Religious Experience",
    "The moment you know, you know, you know - David Bowie, Where Are We Now",
    "Salt is so humble that when something goes wrong, it takes the blame, and when everything goes right, it doesn't take credit.- Jay Shetty",
    "He was an individual individual - The Alpinist",
    "We are of nature ladies and gentlemen, not above nature - Stuart Kauffman, The \"Adjacent Possible\"",
    "Just for today make a change, be aware that the only constant is change. So do something new, go somewhere new, meet somebody new, think something new and allow your world to change as a result - Tom Evans",
    "I would have written you a shorter letter, but I did not have the time.- Blaise Pascal",
    "No matter where you go, there you are- Buckaroo Banzai",
    "A smooth sea never made a skilled sailor- Franklin D. Roosevelt",
    "The best journeys answer questions that at the beginning you didnt even think to ask- Submerge",
    "Its moments like corners in the end of the game.. that can create history- Beckham's Father",
    "Don't let the noise of others' opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition. They somehow already know what you truly want to become.- Steve Jobs, Stanford Commencement Speach",
    "A problem well stated is a problem half-solved- Charles Kettering",
    "The simplest way to clarify your thinking is to write a full page about whatever you are dealing with and then delete everything except the 1-2 sentences that explain it best- James Clear",
    "The winds of tomorrow will blow tomorrow- Japanese proverb",
    "You can go either way, either way is fine- N.G",
    "No one can construct for you the bridge upon which precisely you must cross the stream of life, no one but you yourself alone.- Friedrich Nietzsche",
    "Secrets are like a callus on your heart- John Dutton, Yellowstone Season 3 episode 8",
    "It is not the critic who counts: not the man who points out how the strong man stumbles or where the doer of deeds could have done better. The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood, who strives valiantly, who errs and comes up short again and again, because there is no effort without error or shortcoming, but who knows the great enthusiasms, the great devotions, who spends himself for a worthy cause; who, at the best, knows, in the end, the triumph of high achievement, and who, at the worst, if he fails, at least he fails while daring greatly, so that his place shall never be with those cold and timid souls who knew neither victory nor defeat.-  Citizenship in a Republic- Speech given by Theodore Roosevelt at the Sorbonne, Paris, April 23, 1910"
  ];
  
  const tools = [
    "Readwise Reader-  read-it-later app for power readers.",
    "Audiopen- Go from fuzzy thought to clear text. Fast.",
    "Loom- A video messaging tool that helps you get your message across through instantly shareable videos.",
    "Gamma- A new medium for presenting ideas (I think their presentation tools are great.)",
    "Realnice- the fastest, most delightful website builder ever made."
  ];
  
  const renderItems = (items, category) => {
    if (activeTab !== 'all' && activeTab !== category) return null;
    
    return (
      <div className={`mb-12 taste-item delay-${200 + Math.floor(Math.random() * 6) * 100}`}>
        <h2 className="subsection-title flex items-center">
          {tabs.find(tab => tab.id === category)?.icon}
          <span className="ml-2">{tabs.find(tab => tab.id === category)?.label}</span>
        </h2>
        <div className="mt-4 space-y-3">
          {items.map((item, index) => (
            <div 
              key={index} 
              className={category === 'quotes' ? 'quote-card' : 'glass-card p-4 mb-3'}
              style={{ 
                animationDelay: `${300 + index * 100}ms`
              }}
            >
              <p className="text-theme-light/90">{item}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <Layout>
      <div className="content-container page-transition">
        <div className="max-w-4xl mx-auto">
          <h1 className="section-title animate-fade-up">Taste</h1>
          <p className="text-lg mb-8 animate-fade-up delay-200">Carefully handpicked highlights of my personal taste</p>
          
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-10 animate-fade-up delay-300">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2 rounded-full text-sm transition-colors ${
                  activeTab === tab.id 
                    ? 'bg-theme-accent text-theme-darker font-medium' 
                    : 'bg-theme-darker text-theme-light/70 hover:text-theme-light'
                }`}
              >
                {tab.icon && <span className="mr-1.5">{tab.icon}</span>}
                {tab.label}
              </button>
            ))}
          </div>
          
          {renderItems(books, 'books')}
          {renderItems(podcasts, 'podcasts')}
          {renderItems(newsletters, 'newsletters')}
          {renderItems(meditations, 'meditations')}
          {renderItems(products, 'products')}
          {renderItems(tools, 'tools')}
          {renderItems(quotes, 'quotes')}
        </div>
      </div>
    </Layout>
  );
};

export default Taste;
