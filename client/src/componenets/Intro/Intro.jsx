import './intro.scss'
import { useEffect, useRef } from 'react'
import { init } from 'ityped'

export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            backDelay: 1000,
            strings: ["FullStack Web Developer"]
        });
    }, [])
    return (
        <div className='intro' id='intro'>

            <div className="left">
                <div className="imageContainer">
                    <img src='assets/elad.jpg' alt='My Photo' />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Elad Gabay</h1>
                    <h3><span ref={textRef}></span></h3>
                </div>
                <a href='#about'>
                    <img src='assets/down.png' alt='' />
                </a>
            </div>
        </div>
    )
}
