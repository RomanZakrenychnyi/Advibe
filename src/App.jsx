import { BrowserRouter, Route, Routes } from 'react-router'
import { ApplyModalProvider } from './context/ApplyModalProvider'
import LanguageLayout from './layouts/LanguageLayout'
import { HomePageLayout } from './pages/HomePage'
import CareersPage from './pages/CareersPage'
import AboutPage from './pages/AboutPage'
import ApplyModal from './components/ApplyModal'
import SeoMeta from './components/SeoMeta'
import ScrollToHash from './components/ScrollToHash'
import RootRedirect from './components/RootRedirect'
import { getBasename } from './utils/routing'

function HomeRoute() {
  return (
    <>
      <SeoMeta page="home" />
      <HomePageLayout />
    </>
  )
}

function CareersRoute() {
  return (
    <>
      <SeoMeta page="careers" />
      <CareersPage />
    </>
  )
}

function AboutRoute() {
  return (
    <>
      <SeoMeta page="about" />
      <AboutPage />
    </>
  )
}

export default function App() {
  const basename = getBasename()

  return (
    <ApplyModalProvider>
      <BrowserRouter basename={basename || undefined}>
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<RootRedirect />} />
          <Route path="/:lang" element={<LanguageLayout />}>
            <Route index element={<HomeRoute />} />
            <Route path="careers" element={<CareersRoute />} />
            <Route path="about" element={<AboutRoute />} />
          </Route>
          <Route path="*" element={<RootRedirect />} />
        </Routes>
        <ApplyModal />
      </BrowserRouter>
    </ApplyModalProvider>
  )
}
