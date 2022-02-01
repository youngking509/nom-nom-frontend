//import logo from './logo.svg';
import './App.scss';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      {/* <Contact /> */}
    </div>
  );
}

export default App;
