

export default function Envolope({status,mensaje})
{



 

    return(
      <div className="sort">
        <h1> </h1>
        <br/>
        <div className="wrapper" onClick={function open(){alert(mensaje)} }>
        <div className="lid one"></div>
        <div className="lid two"></div>
        <div className="envelope"></div>
        <div className="letter">
        <p>{status}</p>
        </div>
        </div>
      </div>
    )
}