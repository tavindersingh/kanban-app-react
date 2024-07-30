import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/:boardSlug" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
