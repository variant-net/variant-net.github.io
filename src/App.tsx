import { Routes, Route } from "react-router-dom";
import MeetTheTeam from "./components/Team";
//import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <div style={{
            width: '100vw',    // 100% of the viewport width
            height: '100vh',   // 100% of the viewport height
            display: 'flex',   // centers content
            flexDirection: 'column',  // Stack elements vertically
            justifyContent: 'center',   // centers horizontally
            alignItems: 'center',       // centers vertically
          }}
        >
          <h1>Welcome to variant-net</h1>
          <p>
            This page is under construction. Please check back later.
          </p>
        </div>
      } />
      <Route path="/team" element={<MeetTheTeam />} />
      <Route path="/no-style" element={null} />
    </Routes>
  );
}

export default App;
