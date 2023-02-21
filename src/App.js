import logo from './logo.svg';
import './styles.css';


import Navbar from "./components/Navbar.jsx"
import HeroBanner from "./components/HeroBanner.jsx"
import WorkExperience from "./components/WorkExperience.jsx"
import Skillset from "./components/Skillset.jsx"
import Projects from "./components/Projects.jsx"
import Contact from "./components/Contact.jsx"






function App() {


  



  return (
    <div className="App">
      <HeroBanner/>
      <WorkExperience/>
      <Skillset/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
