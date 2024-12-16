import './Header.css'

export default function Header(){
    return(
        <>
           <div className="header">
              <h2>Dreamland Cafe</h2>
              <div className="links">
                <a href="#">Home</a>
                <a href="#">About us</a>
                <a href="#">Offers</a>
                <a href="#">Services</a>
                <button>Know more!</button>
              </div>
           </div>
        </>
    );
}
