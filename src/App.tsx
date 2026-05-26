import { Route, Routes } from "react-router-dom";

import { Layout } from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Reviews from "@/pages/Reviews";
import Contact from "@/pages/Contact";
import FAQ from "@/pages/FAQ";
import NeighborhoodPage from "@/pages/NeighborhoodPage";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<FAQ />} />
        {/* Neighborhood pages — getNeighborhood returns undefined for unknown slugs → 404 */}
        <Route path=":slug" element={<NeighborhoodPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
