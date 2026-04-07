import Hero from '../components/Hero';
import About from '../components/About';
import Stats from '../components/Stats';
import WhyChooseUs from '../components/WhyChooseUs';
import SafetyStandards from '../components/SafetyStandards';
import EmergencyService from '../components/EmergencyService';
import Services from '../components/Services';
import TestingCommissioning from '../components/TestingCommissioning';
import Gallery from '../components/Gallery';
import Owner from '../components/Owner';
import Team from '../components/Team';
import Reviews from '../components/Reviews';
import Clients from '../components/Clients';
import Contact from '../components/Contact';
import PageTransition from '../components/PageTransition';

export default function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <About />
      <Stats />
      <WhyChooseUs />
      <SafetyStandards />
      <EmergencyService />
      <Services />
      <TestingCommissioning />
      <Gallery />
      <Owner />
      <Team />
      <Reviews />
      <Clients />
      <Contact />
    </PageTransition>
  );
}
