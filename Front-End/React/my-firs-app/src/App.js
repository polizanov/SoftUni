import logo from './logo.svg';
import Nav from './components/root/nav/Nav.js';
import Footer from './components/root/footer/Footer.js';
import Main from './components/main/Main.js'

import './App.css';

function App() {
  return (
    <div className="App">
      <Nav className="wrap"></Nav>
      <Main></Main>
      <Footer className="wrap"></Footer>
    </div>
  );
}

export default App;
