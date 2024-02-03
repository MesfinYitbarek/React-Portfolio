import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero/hero';
import Skills from './Components/Skills/Skills';
import WorkExperience from './Components/WorkExperince/WorkExperience';
import ContactMe from './Components/ContactMe/ContactMe';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <>
      <Navbar/>
      <div className="container">
      <Hero />
      <Skills />
      <WorkExperience />
      <ContactMe />
      </div>
      <Footer />
    </>
  );
}

export default App;
