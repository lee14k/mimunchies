
import './Call.css'
export default function Call() {
  return (
    <div className="midcontainer">
      <h1 className='special'>Custom Order?</h1>
     <p className='make'>Let's make something special together!</p>
        <button
            className="orderbutton"
            onClick={() => handleNavLinkClick("/Store")}
          >
            Order your Treats
          </button>
    </div>
  );
}
