import React from 'react';
import {useState} from 'react';
import baseDeDato from './firebase';

export default function Nav()
{

    // para hacer el log out
    const logout = () =>
    {
        baseDeDato.auth().signOut().then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }

  
    return(
       <div>
            <ul>
          
          <li><a href="/homeAutenticated">Home</a></li>
          <li><a href="/">Log out</a></li>
          <li><a href="/create">Create</a></li>
         
      </ul>
       </div>
    );
}