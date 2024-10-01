import { Routes, Route } from "react-router-dom";

import VideoBackground from "./components/VideoBackground";
import ProjectOverview from "./components/ProjectOverview";
import FeaturedLinks from "./components/FeaturedLinks";
import Deliverables from "./components/Deliverables";
import MeetTheTeam from "./components/MeetTheTeam";
import Footer from "./components/Footer";

import Logbooks from "./components/Logbooks";
import NotFound from "./components/NotFound";

//import "./App.css";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <VideoBackground />
            <ProjectOverview />
            <FeaturedLinks />
            <Deliverables />
            <MeetTheTeam />
            <Footer />
          </>
        }
      />
      <Route path="/logbooks" element={<Logbooks />} />
      <Route path="/no-style" element={null} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
