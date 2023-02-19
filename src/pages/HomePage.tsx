import NavBar from '../components/shared/Navbar/Navbar'
import Home from '../components/Home'
import Benefits from '../components/Benefits/Benefits'
import Slider from '../components/Slider'
import Cta from '../components/Cta'
import Footer from '../components/shared/Footer/Footer'


const HomePage = () => {
  


 
    return (
        <div className="app">
            <NavBar />
            <Home />
            <Benefits />
            <Slider />
            <Cta/>
            <Footer/>
        </div>
    )
}

export default HomePage