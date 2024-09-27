import { Routes, Route } from "react-router-dom";
import MeetTheTeam from "./components/Team";
import VideoBackground from "./components/VideoBackground";
//import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <VideoBackground />
          <MeetTheTeam />
        </>
      } />
      <Route path="/no-style" element={null} />
    </Routes>
  );
}

export default App;
