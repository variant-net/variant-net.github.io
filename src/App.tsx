// src/App.tsx
import { Routes, Route, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import useIdleTimer from "./hooks/useIdleTimer";

import VideoBackground from "./components/VideoBackground";
import ProjectOverview from "./components/ProjectOverview";
import FeatureCards from "./components/Features";
import FeaturedLinks from "./components/FeaturedLinks";
import Deliverables from "./components/Deliverables";
import MeetTheTeam from "./components/MeetTheTeam";
import Footer from "./components/Footer";
import Logbooks from "./components/Logbooks";
import Login from "./components/Login";
import UnderConstruction from "./components/UnderConstruction";
import NotFound from "./components/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

const App: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth); // Sign out the user using Firebase Authentication
    navigate("/login"); // Redirect to login after logging out
  };

  // Log out the user after 10 minutes (600000 ms) of inactivity
  useIdleTimer(handleLogout, 600000 /* 10 minutes */);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <VideoBackground />
            <ProjectOverview />
            <FeatureCards />
            <FeaturedLinks />
            <Deliverables />
            <MeetTheTeam />
            <Footer />
          </>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route
        path="/logbooks"
        element={
          <ProtectedRoute>
            <Logbooks />
          </ProtectedRoute>
        }
      />
      <Route path="/no-style" element={<UnderConstruction />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
