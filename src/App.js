import './App.css';
import AboutAtal from './components/AboutAtal';
import Footer from './components/Footer';
import Header from './components/Header';
import InvestorsCount from './components/InvestorsCount';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutAtal />
      <InvestorsCount />
      <Footer />
    </div>
  );
}

export default App;
