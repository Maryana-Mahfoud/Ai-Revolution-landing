import AiBenefits from "../components/AiBenefets/AiBenefets"
import AiTypes from "../components/AiTypes/AiTypes"
import Contact from "../components/Contact/Contact"
import Footer from "../components/Footer/footer"
import HeroSection from "../components/Hero/HeroSection"
import NavBar from "../components/NavBar/NavBar"


const Home = () => {
    return (
        <>
            <NavBar />
            <main>
                <HeroSection />
                <AiTypes />
                <AiBenefits />
                <Contact />
            </main>
            <Footer/>
            
        </>
    )
}

export default Home