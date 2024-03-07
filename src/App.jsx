import Banner from "./Pages/Banner/Banner"
import Blog from "./Pages/Blog/Blog"
import Destination from "./Pages/Destination/Destination"
import Footer from "./Pages/Footer/Footer"
import Navbar from "./Pages/Navbar/Navbar"
import News from "./Pages/News/News"
import Offer from "./Pages/Offer/Offer"
import Popular from "./Pages/Popular/Popular"
import Testimonial from "./Pages/Testimonial/Testimonial"


function App() {

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Destination></Destination>
    <Offer></Offer>
    <Popular></Popular>
    <Testimonial></Testimonial>
    <Blog></Blog>
    <News></News>
    <Footer></Footer>
    </>
  )
}

export default App
