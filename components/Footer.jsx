import './Footer.css'
export default function Footer () {
    return (
        <div className='footwrap'>
            <div className='logowrap'>
                <img className="footlogo" src="/logomimunchies.png" alt="" />
                <h3>MI Munchies</h3>
            </div>
            <div className='breadcrumbs'>
                <ul>
                    <li>Home</li>
                    <li>Our Menu</li>
                    <li>Contact</li>
                    <li>About</li>

                </ul>
            </div>
          <h3>Follow Us</h3>
        </div>
    )
}