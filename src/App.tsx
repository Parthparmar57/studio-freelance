import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Wedding from './pages/services/Wedding';
import PreWedding from './pages/services/PreWedding';
import Birthday from './pages/services/Birthday';
import Maternity from './pages/services/Maternity';
import Portfolio from './pages/Portfolio';
import Pricing from './pages/Pricing';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/wedding" element={<Wedding />} />
          <Route path="/services/pre-wedding" element={<PreWedding />} />
          <Route path="/services/birthday" element={<Birthday />} />
          <Route path="/services/maternity" element={<Maternity />} />
          <Route path="/services/corporate" element={<Services />} />
          <Route path="/services/events" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
