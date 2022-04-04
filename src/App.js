import logo from './logo-full.webp';
import './App.css';
import Nav from "./nav"
import Login from "./login"
import Envelope from "./envelope"

function App() {
  return (
    <div className="App">
      <Nav/>
      <Login/>
      <Envelope status="Privado"/>
     
    </div>
  );
}

export default App;
