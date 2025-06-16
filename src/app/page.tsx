
import Footer from './components/acceuil/footer'
import Hero from './components/acceuil/heroes';
import Jumbotron from './components/acceuil/jumbotron';
import Products from './components/acceuil/products'
import Features from './components/acceuil/features';
import Testimonials from './components/acceuil/testimonials';
import CallToAction from './components/acceuil/cta';
import Faq from './components/acceuil/faq';
import Partners from './components/acceuil/partenaires';


export default function Home() {
  return (
    <>   
    <Hero />
    <Jumbotron />
    <Products />
    <Features />
    <Testimonials />
    <Partners />
    <CallToAction />
    <Faq />
    <Footer />   
    </>
  );
}
