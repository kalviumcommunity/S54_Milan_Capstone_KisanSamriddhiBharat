import './App.css'
import BgVideo from './BgVideo'
import LiveChat from './Components/Livechat'
import Postform from './Components/Postform'
import Scheme from './Components/Scheme'
import Footer from './Footer'
// import Homepage from './Home'
import Navbar from './nav'

function App() {

  return (
    <>
   {/* <Homepage/> */}
   <Navbar/>
   <BgVideo/>
   <Scheme/>
   <Footer/>
   <LiveChat/>
   <Postform/>
    </>
  )
}

export default App
