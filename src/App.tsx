import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import HistoriaPage from './pages/HistoriaPage';
import EquipoPage from './pages/EquipoPage';
import GaleriaPage from './pages/GaleriaPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import ContactoPage from './pages/ContactoPage';
import LoginPage from './pages/LoginPage';

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || 'YOUR_GOOGLE_CLIENT_ID';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <AuthProvider>
        <ThemeProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/" element={<Layout><HomePage /></Layout>} />
              <Route path="/historia" element={<Layout><HistoriaPage /></Layout>} />
              <Route path="/equipo" element={<Layout><EquipoPage /></Layout>} />
              <Route path="/galeria" element={<Layout><GaleriaPage /></Layout>} />
              <Route path="/blog" element={<Layout><BlogPage /></Layout>} />
              <Route path="/blog/:slug" element={<Layout><BlogPostPage /></Layout>} />
              <Route path="/contacto" element={<Layout><ContactoPage /></Layout>} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
}
