import './Home.css'
import '@fontsource/pacifico'

export default function Home () {
    return (
        <div>

        <div className="homewrapper">
        <img className="logo" src="./logomimunchies.png" alt="" />

             <h1 className='treats'>Freeze Dried Treats</h1>   
             <button className='orderbutton'>Order your Treats</button>
        </div>
        <div class="container">
  <div class="text-column">
  <h1 className="treats"> Events? No problem!</h1>
  <div className='call'>
  <span>We do all kinds of events. Not sure if we'll do it? Give us a call!</span>
  <button>Contact us today!</button>
  </div>
  </div>
  <div class="image-column">
    <img src="./treattrays.jpeg" alt="Image" className='trays'/>
  </div>
</div>
        <div className='midsection'>
        <h2>Anything you can imagine!</h2>
        </div>
        </div>
    )
}