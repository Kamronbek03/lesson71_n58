import { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Header = lazy(() => import("./components/header/Header"));
const Footer = lazy(() => import("./components/footer/Footer"));
const Single = lazy(() => import("./pages/Single"));
const Cart = lazy(() => import("./pages/Cart"));

import "./App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Single />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
