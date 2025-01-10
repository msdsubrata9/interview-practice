import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ParentComponent from "./components/ParentComponent";
import Storage from "./components/Storage";
import Timer from "./components/Timer";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import withAuth from "./utils/withAuth";

function App() {
  const AuthenticatedDashboard = withAuth(Dashboard);
  const AuthenticatedProfile = withAuth(Profile);
  return (
    <div className="App">
      {/* <h1>Creating Timer Component</h1>
      <Timer /> */}
      {/* <Storage /> */}
      {/* <ParentComponent /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<AuthenticatedDashboard />} />
          <Route path="/profile" element={<AuthenticatedProfile />} />
          <Route path="/" element={<h1>Home Page</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
