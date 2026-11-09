import Header from '../components/Header'
import Careers from '../components/Careers'
import CareersExtraSections from '../components/CareersExtraSections'
import Footer from '../components/Footer'

export default function CareersPage() {
  return (
    <>
      <Header />
      <main>
        <Careers variant="page" />
        <CareersExtraSections />
      </main>
      <Footer />
    </>
  )
}
