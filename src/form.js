import React, {useRef} from 'react';
import baseDeDato from './firebase'

export default function Form(){

    // <input  className="para cuerpo"/>
    const tituloRef = useRef(null);
    const textoRef = useRef(null);

    const enviar = ()=>{
        const contacto = {
            Titulo: tituloRef.current.value,
            Post: textoRef.current.value,
        
        }

       baseDeDato.firestore().collection('Usuario')
        .add(contacto);

        tituloRef.current.value = "";
        textoRef.current.value = "";

        
      
    }

    return(

        <div className="form">
             <input placeholder="Titulo" className="para" ref={tituloRef}/>
            <textarea ref={textoRef}></textarea>
            <div>
            <button className="botonesForm" onClick={() => {window.location.href='/homeAutenticated'}}>Cancelar</button>
            <button className="botonesForm" onClick={enviar}>enviar</button>
            </div>
        </div>
    ) 
}