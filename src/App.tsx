import { Routes, Route } from "react-router-dom";
import VideoBackground from "./components/VideoBackground";
import ProjectOverview from "./components/ProjectOverview";
import Deliverables from "./components/Deliverables";
import MeetTheTeam from "./components/MeetTheTeam";
import Footer from "./components/Footer";
//import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <VideoBackground />
          <ProjectOverview />
          <Deliverables />
          <MeetTheTeam />
          <Footer />
        </>
      } />
      <Route path="/no-style" element={null} />
    </Routes>
  );
}

export default App;
