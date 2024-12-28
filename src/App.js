import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Slider from './Components/Slide';
import Cards from './Components/Cards';
import Table from './Components/Table';
import Faqs from './Components/Faqs';
import ContactUs from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Cards />
      <Table />
      <Faqs />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
