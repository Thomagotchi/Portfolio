import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import { Header } from "./components/header/Header";

import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { Contact } from "./pages/contact/Contact";
import { Projects } from "./pages/projects/Projects";
import { Error } from "./pages/error/Error";

export function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/A-Propos" element={<About />} />
        <Route path="/Realisations" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />

        {/* Pour gérer les erreurs */}
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
