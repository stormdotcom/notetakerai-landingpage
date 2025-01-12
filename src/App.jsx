import { BrowserRouter } from 'react-router-dom'

import Home from './page/Home'
import { Routes, Route } from 'react-router-dom';
import PrivacyPolicy from './page/privacy/PrivacyPolicy'
import LandingPage from './page/landing/LandingPage';
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />}>
        <Route index element={<LandingPage />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Route>
      </Routes>
   </BrowserRouter>
  )
}

export default App
