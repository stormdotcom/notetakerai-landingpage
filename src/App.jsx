
import Home from './page/Home'
import { Routes, Route, HashRouter } from 'react-router-dom';
import PrivacyPolicy from './page/privacy/PrivacyPolicy'
import LandingPage from './page/landing/LandingPage';
import './App.css'

function App() {
  return (
    <HashRouter>
    <Routes>
        <Route path="/" element={<Home />}>
        <Route index element={<LandingPage />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Route>
      </Routes>
   </HashRouter>
  )
}

export default App
