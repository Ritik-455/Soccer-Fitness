import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from './Components/Header';
import Download from './Components/Download';
import Send from './Components/Send';
import Knowledge from './Components/Knowledge';
import Author from './Components/Author';
import Fitness from './Components/Fitness';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Footer from './Components/Footer';

function App() {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000, });
  }, []);
  
  return (
    <>
      <Header />
      <Download />
      <Send />
      <Knowledge />
      <Author />
      <Fitness />
      <Footer />
    </>
  );
}

export default App;
