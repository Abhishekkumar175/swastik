import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import DoctorProfile from './components/DoctorProfile';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import MobileRibbon from './components/MobileRibbon';

function App() {
  return (
    <div className="font-sans antialiased text-slate-800 bg-slate-50 min-h-screen relative pb-16 md:pb-0">
      <TopBar />
      <Header />
      
      <main>
        <Hero />
        <DoctorProfile />
        <Services />
        <Testimonials />
      </main>
      
      <Footer />
      <MobileRibbon />
    </div>
  );
}

export default App;
