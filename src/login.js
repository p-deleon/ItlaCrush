import baseDeDato from './firebase';
import React, {useRef} from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";








export default function Login()
{

    
    //    const firebase = useFirebaseApp();


        
        const userRef = useRef(null);
        const passwordRef = useRef(null);
    
    
    //creaar usuario
        const create = async ()=>{
            baseDeDato.auth().createUserWithEmailAndPassword(userRef.current.value, passwordRef.current.value)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...

    userRef.current.value = "";
    passwordRef.current.value = "";
  })
  .catch((error) => {
    alert("informacion suministrada es incorrecta o el usuario no existe")
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });}

  // confirmar usuario
  const login = async ()=> {
    baseDeDato.auth().signInWithEmailAndPassword(userRef.current.value, passwordRef.current.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user.email)
       window.location.href='/homeAutenticated'
     
      // ...
    })
    .catch((error) => {
      alert("informacion suministrada es incorrecta o el usuario no existe")
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  }

    
    return (
        
            <div className="login">
               
               <input placeholder="Correo" ref={userRef}/>
               <br></br>
               <br></br>
               <input placeholder="Contraseña" type="password" ref={passwordRef}/>
               <br></br>
               <br></br>
               <button onClick={login}>Log In</button>
               <br></br>
               <br></br>
               <button onClick={create}>Crear Cuenta</button>


            </div>
       
    );
}
