import './Home.css'
import '@fontsource/pacifico'
import '@fontsource/roboto'

export default function Home () {
    return (
        <div>

        <div className="homewrapper">
        <img className="logo" src="./logomimunchies.png" alt="" />

             <h1 className='treats'>Freeze Dried Treats</h1>   
<div className="buttoncontainer">
<button className='orderbutton'>Order your Treats</button>

</div>
             
        </div>
        <div class="container">
  <div class="text-column">
    <h1 className="perfect">Perfect for</h1>
  <h1 className="treats"> Special Occasions</h1>
  <div className='call perfect'>
  <span>We do all kinds of events. Not sure if we'll do it? Give us a call!</span>
  <button className='contactbutton'>Contact us today!</button>
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