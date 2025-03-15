import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Features from "./components/Features";
import Commands from "./components/Commands";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <div>
        <Hero />
        <Features />
        <Commands />
        <Cards />
        <Footer />
      </div>
    </>
  );
}

export default App;
