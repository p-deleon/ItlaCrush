export default function envolope({status})
{
    return(
        <div className="wrapper">
      <div className="lid one"></div>
      <div className="lid two"></div>
      <div className="envelope"></div>
      <div className="letter">
        <p>{status}</p>
      </div>
    </div>
    )
}