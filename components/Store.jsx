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
          <Link to="https://square.link/u/6VgTqAiW?src=embed">Buy now</Link>
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
          <Link to="https://square.link/u/qogrxIur?src=embed">Buy now</Link>
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
          <Link to="https://square.link/u/K6tO8LVP?src=embed">Buy now</Link>
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
          <Link to="https://square.link/u/K6tO8LVP?src=embed">Buy now</Link>
        </div>
      </div>
    </div>
  );
}
