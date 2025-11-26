import Header from "./components/header/Header";
import Section1 from "./sections/section1/Section1";
import Section2 from "./sections/section2/Section2";
import Section3 from "./sections/section3/Section3";
import Section4 from "./sections/section4/Section4";
import Footer from "./components/footer/Footer";

import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Footer />
    </div>
  );
}

export default App;
