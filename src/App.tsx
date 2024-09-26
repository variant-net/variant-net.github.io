import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MeetTheTeam from "./components/Team";
//import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={null} />
        <Route path="/team" element={
            <MeetTheTeam />
          }
        />
        <Route path="/no-style" element={null} />
      </Routes>
    </Router>
  );
}

export default App;
