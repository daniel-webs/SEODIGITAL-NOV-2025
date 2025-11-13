import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Componentes
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import Map from './components/Map';
import FeaturedSlider from './components/FeaturedSlider';
import ProcessSection from './components/ProcessSection';
import About from './components/about'; // 👈 ojo con la mayúscula
import GoExpertsPage from './components/Goexpert'; // 👈 ojo con el nombre
import Django from './components/Django';
import CSharp from './components/Csharp';
import Angular from './components/Angular';
import Python from './components/Python';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <Services />
              <Map />
              <FeaturedSlider />
              <ProcessSection />
            </>
          } 
        />
        <Route path="/about" element={<About />} />
        <Route path="/go-experts" element={<GoExpertsPage />} />
        <Route path="/django" element={<Django />} />
        <Route path="/csharp" element={<CSharp />} />
        <Route path="/angular" element={<Angular />} />
        <Route path="/python" element={<Python />} />
        <Route path="/node" element={<Django />} />
        <Route path="/iasection" element={<Django />} />
         <Route path="/cmasmas" element={<Django />} />
         <Route path="/vuejs" element={<Django />} />
        
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
