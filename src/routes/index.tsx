import { MemoryRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Sites from "../pages/Sites";
import Movies from "../pages/Movies";

export default function index() {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sites" element={<Sites />} />
        <Route path="/movies/:provider" element={<Movies />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </MemoryRouter>
  );
}
