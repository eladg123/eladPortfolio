import { useState } from 'react'
import Topbar from './componenets/Topbar/Topbar'
import Intro from './componenets/Intro/Intro'
import Portfolio from './componenets/Portfolio/Portfolio'
import About from './componenets/About/About'
import Contact from './componenets/Contact/Contact'
import Menu from './componenets/Menu/Menu'
import './app.scss'


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <About />
        <Portfolio />
        <Contact />

      </div>
    </div>
  );
}

export default App;
