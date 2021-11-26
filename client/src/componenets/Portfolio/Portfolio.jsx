import './portfolio.scss'

export default function Portfolio() {
    return (

        <div className='portfolio' id='portfolio'>
            <br></br><br></br><br></br><br></br>
            <h1>Portfolio</h1>
            <br></br><br></br><br></br>
            <div className="container">
                <a href='https://eladfootshop.herokuapp.com/'>
                    <div className="item">
                        <img src='assets/footshop.png' alt='' />
                        <h3>eCommerce Sport App</h3>
                    </div>
                </a>
                <a href='https://github.com/eladg123/Cinema-Site'>
                    <div className="item">
                        <img src='assets/cinema.png' alt='' />
                        <h3>Cinema App</h3>
                    </div>
                </a>
                <a href='https://github.com/eladg123/Mern-Chicago-Bulls-Client'>
                    <div className="item">
                        <img src='assets/chicago.png' alt='' />
                        <h3>Chicago Bulls App</h3>
                    </div>
                </a>
                <br></br> <br></br>
                <a href='https://github.com/eladg123/College-site-Client-only-with-React-'>
                    <div className="item">
                        <img src='assets/studentreact.png' alt='' />
                        <h3>College App (React)</h3>
                    </div>
                </a>
                <a href='https://github.com/eladg123/Students-site'>
                    <div className="item">
                        <img src='assets/studentsite.png' alt='' />
                        <h3>Students Site (HTML)</h3>
                    </div>
                </a>
                <a href='https://github.com/eladg123/tictactoe/tree/main/tictoeproject'>
                    <div className="item">
                        <img src='assets/tictactoe.png' alt='' />
                        <h3>Tic Tac Toe(HTML)</h3>
                    </div>
                </a>
                <a className='down' href='#contact'>
                    <img src='assets/down.png' alt='' />
                </a>
            </div>

        </div>
    )
}
