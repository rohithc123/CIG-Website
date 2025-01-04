import React, { useEffect } from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import Event from './pages/Event';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import AdminPanel from "./pages/AdminPanel/store/AdminPanel";
import AdminLogin from "./pages/Admin-Login";
import AdminLogout from "./pages/Admin-Logout";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="event" element={<Event />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/Admin" element={<AdminLogin />} />
        <Route path="/AdminLogout" element={<AdminLogout />} />
        <Route path="/AdminPanel/*" element={<AdminPanel />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;
