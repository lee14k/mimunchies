import { Link } from "react-router-dom";
import "./Store.css";
export default function Store() {
  return (
    <div className="container">

      <div className="card">
        <img
          className="container-image"
          src="https://items-images-production.s3.us-west-2.amazonaws.com/files/c569e0457489fa19751b011dc49e07f1f2219b3e/original.jpeg"
          alt="Asteroids (Nerd Clusters)"
        />
        <div>
          <p>Asteroids (Nerd Clusters)</p>
          <p>$4.00 - $8.00</p>
          <Link to="https://square.link/u/6VgTqAiW?src=embed"><button className="btn">Buy now</button></Link>
        </div>
      </div>

      <div className="card">
        <img
          img
          className="container-image"
          src="https://items-images-production.s3.us-west-2.amazonaws.com/files/caac5f6587db4ac370b1d27579bf33343587b3c2/original.png"
          alt="Flying Saucers (Sprees)"
        />
        <div>
          <p>Flying Saucers (Sprees)</p>
          <p>$4.00 - $8.00</p>
          <Link to="https://square.link/u/qogrxIur?src=embed"><button className="btn">Buy now</button></Link>
        </div>
      </div>

      <div className="card">
        <img
          className="container-image"
          src="https://items-images-production.s3.us-west-2.amazonaws.com/files/796131434089a5be238204a741e70f5bca5115c8/original.jpeg"
          alt="Hi Honey (Bit o honey)"
        />
        <div>
          <p>Hi Honey (Bit o honey)</p>
          <p >$4.00 - $8.00</p>
          <Link to="https://square.link/u/K6tO8LVP?src=embed"><button className="btn">Buy now</button></Link>
        </div>
      </div>
    
 <div className="card">
        <img
          className="container-image"
          src="https://items-images-production.s3.us-west-2.amazonaws.com/files/46e80bdee7a7fef576a4af57d5f4c2c4d95301bf/original.jpeg" alt="Meteor Bites (Caramel M&amp;M)" 
        />
        <div>
          <p>Meteor Bites (Caramel M&amp;M)</p>
          <p >$4.00 - $8.00</p>
          <Link to="https://square.link/u/9zMHvL1o?src=embed"><button className="btn">Buy now</button></Link>
        </div>
      </div>
<div className="card">
        <img
          className="container-image"
          src="https://items-images-production.s3.us-west-2.amazonaws.com/files/fcc6f02a62d226865d26c8858b0ea80894e29065/original.png" alt="Moon Rocks (Twix)" 
        />
        <div>
          <p>Moon Rocks (Twix)</p>
          <p >$3.00</p>
          <Link to="https://square.link/u/ssXJLXxf?src=embed" >
            
            <button className="btn">Buy now</button></Link>
        </div>
      </div>
      <div className="card">
        <img
          className="container-image"
          src="https://items-images-production.s3.us-west-2.amazonaws.com/files/7a7f04a5b7ee4cd0b2600c8f53fa9739be653625/original.jpeg" alt="Northern Light Brights (Skittles)"  
        />
        <div>
          <p>Northern Light Brights (Skittles)</p>
          <p >$4.00 - $10.00</p>
          <Link to="https://square.link/u/ssXJLXxf?src=embed" >
            
            <button className="btn">Buy now</button></Link>
        </div>
      </div>
      <div className="card">
        <img
          className="container-image"
          src="https://items-images-production.s3.us-west-2.amazonaws.com/files/d39a5b6464c34812193990d4ed2631094a023f06/original.png" alt="Saturn's Rings (Peach Rings)"  
        />
        <div>
          <p>Saturn's Rings (Peach Rings)</p>
          <p >$4.00 - $8.00</p>
          <Link to="https://square.link/u/sqduCqlz?src=embed" >
            
            <button className="btn">Buy now</button></Link>
        </div>
      </div>
      <div className="card">
        <img
          className="container-image"
          src="https://items-images-production.s3.us-west-2.amazonaws.com/files/84ed82ee2f665a31c3ff7939914f21d2fb1602e5/original.png" alt="Space Balls (Snickers)"  
        />
        <div>
          <p>Space Balls (Snickers)</p>
          <p >$3.00</p>
          <Link to="https://square.link/u/ssXJLXxf?src=embed" >
            
            <button className="btn">Buy now</button></Link>
        </div>
      </div>
      <div className="card">
        <img
          className="container-image"
          src="https://items-images-production.s3.us-west-2.amazonaws.com/files/2a629cab26c35e525f3d8d63ed56a4f8eed97c0e/original.png" alt="Space Bars (air head)"   
        />
        <div>
          <p>Space Bars (Air Heads)</p>
          <p >$1.00 - $5.00</p>
          <Link to="https://square.link/u/q3dmVVAj?src=embed" >
            
            <button className="btn">Buy now</button></Link>
        </div>
      </div>
    </div>
  );
}
