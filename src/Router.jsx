import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import { Header } from "./components/header/Header";
import { Background } from "./components/background/Background";

import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { Contact } from "./pages/contact/Contact";
import { Projects } from "./pages/projects/Projects";
import { Error } from "./pages/error/Error";

export function Router() {
  return (
    <BrowserRouter>
      <div className="content-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/realisations" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />

          {/* Pour gérer les erreurs */}
          <Route path="*" element={<Navigate to="/404" />} />
          <Route path="/404" element={<Error />} />
        </Routes>
        <Background />
      </div>
    </BrowserRouter>
  );
}
