import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./page/guest/HomePage";
import CoworkingsPage from "./page/guest/CoworkingsPage";
import CoworkingDetailsPage from "./page/guest/CoworkingDetailsPage";
import DashboardPage from "./page/admin/DashboardPage";
import LoginPage from "./page/guest/LoginPage";
import AdminCoworkingsPage from "./page/admin/AdminCoworkingsPage";
import CreateCoworking from "./page/admin/adminCoworkingCreate";
import CoworkingUpdater from "./page/admin/adminUpdateCoworkings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coworkings" element={<CoworkingsPage />} />
        <Route path="/coworking/details/:id" element={<CoworkingDetailsPage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/admin/" element={<DashboardPage />} />
        <Route path="/admin/coworkings" element={<AdminCoworkingsPage />} />
          <Route path="/admin/createCoworking" element={<CreateCoworking />} />
        <Route path="/admin/updateCoworkings/:id" element={<CoworkingUpdater />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
