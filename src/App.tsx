import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Toaster } from "../components/ui/sonner"
import Home from "./public/Home";
import About from "./public/About";
import Contact from "./public/Contact";
import Login from "./auth/Login";
import Signup from "./auth/signup";
import Profile from "./public/profile";
import Properties from "./public/properties";
import Layout from "./public/Layout";
import PropertyDetails from "./public/PropertyDetails";
import Agent from "./public/Agents";
import Services from "./public/Services";
import NotFound from "./public/NotFound";
import ProtectedRoute from "./components/protectedRoute";
import AdminDashbooard from "./dashboards/admindashboard/AdminDashbooard";
import AdminLayout from "./components/adminLayout";
import AgentLogin from "./dashboards/admindashboard/AdminLogin";
import ProtectedAdminRoute from "./components/adminProtectedroute";
import AgentSignup from "./public/AgentSighnup";
import PendingAgents from "./dashboards/admindashboard/Pendingregistration";
import AgentDashoard from "./dashboards/AgentDashoard";
import AllUsers from "./dashboards/admindashboard/users";

function App() {
  return (
    <BrowserRouter>
      <Toaster richColors position="top-right" />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/agent/dashboard" element={<AgentDashoard />} />

        <Route
          element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/agents" element={<Agent />} />
          <Route
            element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/properties/:propertyId" element={<PropertyDetails />} />
          </Route>
          <Route path="/services" element={<Services />} />
        </Route>
        <Route
          path="/agent/signup"
          element={<AgentSignup />}
        />

        {/* Admin Route */}
        <Route element={<ProtectedAdminRoute />}>
          <Route
            path="/admin"
            element={
              <AdminLayout />
            }
          >
            <Route
              path="dashboard" element={<AdminDashbooard />} />
            <Route
              path="pendingagents" element={<PendingAgents />} />
            <Route
              path="users" element={<AllUsers />} />
          </Route>
        </Route>
        <Route
          path="/admin-secret-login-2098"
          element={<AgentLogin />}
        />

        <Route path="/*" element={<NotFound />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;