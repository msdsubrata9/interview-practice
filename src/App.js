import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ParentComponent from "./components/ParentComponent";
import Storage from "./components/Storage";
import Timer from "./components/Timer";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import withAuth from "./utils/withAuth";
import useFetch from "./utils/useFetch";

function App() {
  const AuthenticatedDashboard = withAuth(Dashboard);
  const AuthenticatedProfile = withAuth(Profile);
  const BASE_URL = "https://jsonplaceholder.typicode.com/posts";
  const { data, loading, error } = useFetch(BASE_URL);

  if (loading) <h1>loading....</h1>;
  if (error) <h1>error...</h1>;
  return (
    <div className="App">
      {/* <h1>Creating Timer Component</h1>
      <Timer /> */}
      {/* <Storage /> */}
      {/* <ParentComponent /> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<AuthenticatedDashboard />} />
          <Route path="/profile" element={<AuthenticatedProfile />} />
          <Route path="/" element={<h1>Home Page</h1>} />
        </Routes>
      </BrowserRouter> */}
      <h1>Posts</h1>
      <ul>
        {data &&
          data.map((post) => {
            return <li key={post.id}>{post.title}</li>;
          })}
      </ul>
    </div>
  );
}

export default App;
