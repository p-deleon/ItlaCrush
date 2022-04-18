import logo from './logo-full.webp';
import './App.css';
import Navlogin from "./nav-login"
import Navsignout from "./nav-signout"
import Login from "./login"
import Envelope from "./envelope"
import Form from "./form"
import baseDeDato from './firebase'
import {useState, useEffect} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {

  
    
  const base = baseDeDato.firestore().collection("Usuario");
  //console.log(base);

  const [data,setdata] = useState([]);
  const [loader,setloader] = useState(true);

  const getData = () => {
    base.onSnapshot((info) => {
      const item = [];
      info.forEach((doc) => {
        item.push(doc.data())
      })
      setdata(item);
      setloader(false);

    }) 

  }

  useEffect(() => {
    getData();
 //   console.log(data);
  },[])
 
  

  return (
  
    <Router>
      <div className="App">
      
        <div className="content">
        <Switch>
          <Route exact path="/">
          <Navsignout/>
          {loader === false && (data.map((user) => (
            
        <Envelope mensaje={user.Post} status={user.Titulo} />
        
      )))}

          </Route>

          <Route path="/login">
          <Navsignout/>
          <Login/>

          </Route>

          <Route path="/create">
          <Navlogin/>
            <Form/>

          </Route>

          <Route path="/autenticated">
            <Navlogin/>

          </Route>

          <Route path="/homeAutenticated">
            <Navlogin/>
            {loader === false && (data.map((user) => (
        <Envelope mensaje={user.Post} status={user.Titulo} />
      )))}
          </Route>
        
        </Switch>
      
        </div>
    </div>
    </Router>
  );
}

  

 
export default App;
