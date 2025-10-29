import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Features from '@/components/Features';
import Demo from '@/components/Demo';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Features />
      <Demo />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
