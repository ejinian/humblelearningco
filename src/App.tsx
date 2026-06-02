import { Navigate, Route, Routes } from "react-router-dom";

import { Layout } from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Reviews from "@/pages/Reviews";
import Contact from "@/pages/Contact";
import FAQ from "@/pages/FAQ";
import NeighborhoodPage from "@/pages/NeighborhoodPage";
import NotFound from "@/pages/NotFound";

// Redirects from old bare-city slugs → new keyword-rich slugs
const neighborhoodRedirects: Record<string, string> = {
  "encino": "encino-tutoring",
  "tarzana": "tarzana-tutoring",
  "sherman-oaks": "sherman-oaks-tutoring",
  "studio-city": "studio-city-tutoring",
  "woodland-hills": "woodland-hills-tutoring",
  "calabasas": "calabasas-tutoring",
  "porter-ranch": "porter-ranch-tutoring",
  "northridge": "northridge-tutoring",
  "westlake-village": "westlake-village-tutoring",
  "agoura-hills": "agoura-hills-tutoring",
  "hidden-hills": "hidden-hills-tutoring",
  "glendale": "glendale-tutoring",
  "burbank": "burbank-tutoring",
  "pasadena": "pasadena-tutoring",
  "south-pasadena": "south-pasadena-tutoring",
  "san-marino": "san-marino-tutoring",
  "la-canada-flintridge": "la-canada-flintridge-tutoring",
  "beverly-hills": "beverly-hills-tutoring",
  "bel-air": "bel-air-tutoring",
  "holmby-hills": "holmby-hills-tutoring",
  "brentwood": "brentwood-tutoring",
  "pacific-palisades": "pacific-palisades-tutoring",
  "santa-monica": "santa-monica-tutoring",
  "marina-del-rey": "marina-del-rey-tutoring",
  "culver-city": "culver-city-tutoring",
  "manhattan-beach": "manhattan-beach-tutoring",
  "redondo-beach": "redondo-beach-tutoring",
  "hermosa-beach": "hermosa-beach-tutoring",
  "palos-verdes-estates": "palos-verdes-estates-tutoring",
  "rancho-palos-verdes": "rancho-palos-verdes-tutoring",
  "rolling-hills": "rolling-hills-tutoring",
  "malibu": "malibu-tutoring",
  "westwood": "westwood-tutoring",
  "los-feliz": "los-feliz-tutoring",
  "hancock-park": "hancock-park-tutoring",
  "thousand-oaks": "thousand-oaks-tutoring",
  "torrance": "torrance-tutoring",
  "granada-hills": "granada-hills-tutoring",
  "chatsworth": "chatsworth-tutoring",
  "hollywood-hills": "hollywood-hills-tutoring",
};

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
        {/* Permanent redirects from old bare-city URLs to new keyword slugs */}
        {Object.entries(neighborhoodRedirects).map(([from, to]) => (
          <Route key={from} path={from} element={<Navigate to={`/${to}`} replace />} />
        ))}
        {/* Neighborhood pages — getNeighborhood returns undefined for unknown slugs → 404 */}
        <Route path=":slug" element={<NeighborhoodPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
