import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <ProtectedRoute>
        <Route path="/*" element={<Home />} />
        </ProtectedRoute>
      </Routes>
    </BrowserRouter>
  );
};