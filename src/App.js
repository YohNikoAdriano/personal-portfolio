import './App.css';

import About from './components/about/About.jsx';
import Contact from './components/contact/Contact.jsx';
import Home from './components/home/Home.jsx';
import Portfolio from './components/portfolio/Portfolio.jsx';
import Resume from './components/resume/Resume.jsx';
import Services from './components/services/Services.jsx';
import Sidebar from './components/sidebar/Sidebar.jsx';

function App() {
  return (
    <>
      <Sidebar />
      <main>
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}

export default App;
