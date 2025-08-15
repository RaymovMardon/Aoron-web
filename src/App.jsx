import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";
export default function App() {
  return (
    <div>
      <Header />
      <main className="mt-16 min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
