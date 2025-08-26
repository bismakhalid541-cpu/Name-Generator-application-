import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import CategoryList from './Components/CategoryList';
import OtherGenerators from './Components/OtherGenerators';
import About from './Components/About';
import Footer from './Components/Footer';
import ContactUs from './Components/ContactUs';
function App() {
  return (
    <div className="App">
      <div className="App">
        <Header />
        <Hero />
        <CategoryList />
        <OtherGenerators />
        <About />
        <ContactUs/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
