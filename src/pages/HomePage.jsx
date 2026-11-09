import Header from '../components/Header'
import Hero from '../components/Hero'
import ProductUnits from '../components/ProductUnits'
import WhyUs from '../components/WhyUs'
import Testimonials from '../components/Testimonials'
import Careers from '../components/Careers'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductUnits />
      <WhyUs />
      <Testimonials />
      <Careers />
    </>
  )
}

export function HomePageLayout() {
  return (
    <>
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
    </>
  )
}
