import './topbar.scss'
import { Mail, PhoneAndroid, GitHub, LinkedIn } from '@material-ui/icons'

export default function Topbar({ menuOpen, setMenuOpen }) {



    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className='wrapper'>
                <div className="left">
                    <a href="#intro" className='logo'>Portfoilo.</a>
                    <div className="itemContainer">
                        <PhoneAndroid />
                        <span>052-6100-351</span>
                    </div>
                    <div className="itemContainer">
                        <Mail />
                        <span>elad28100@gmail.com</span>
                    </div>
                    <div className="itemContainer">
                        <a href='https://github.com/eladg123'> <GitHub /></a>
                        <span >GitHub Profile</span>
                    </div>
                    <div className="itemContainer">
                        <a href='https://www.linkedin.com/in/elad-gabay-388b63209/'><LinkedIn /> </a>
                        <span >Linkedin Profile</span>
                    </div>
                </div>

                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
        </div >
    )
}
