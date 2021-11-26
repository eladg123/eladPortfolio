import './contact.scss'
import { useState } from 'react'

export default function Contact() {
    const [message, setMessage] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }
    return (
        <div className='contact' id='contact'>
            <div className="left">
                <img src='assets/shake.svg' />
            </div>
            <div className="right">
                <h1>Contact.</h1>
                <div className='details'>
                    <strong>Phone</strong>: 052-6100-351 <br></br>
                    <strong>Email</strong>: elad28100@gmail.com <br></br>
                    <strong>Linkedin Profile:</strong> <a href='https://www.linkedin.com/in/elad-gabay-388b63209/'>My Linkedin Profile</a>
                </div>
            </div>

        </div>
    )
}
