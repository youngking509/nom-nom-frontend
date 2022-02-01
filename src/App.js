//import logo from './logo.svg';
import './App.scss';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Contact from './pages/Contact';
// import Videos from './pages/Videos';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      {/* <Contact /> */}
      {/* <Videos /> */}
    </div>
  );
}

export default App;
