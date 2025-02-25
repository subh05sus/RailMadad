import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "./layouts/Layout";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Homepage/></Layout>} />
        <Route path="/search" element={<Layout>Search Page</Layout>} />
        <Route path="/register" element={<Layout><Register/></Layout>} />
        <Route path="/sign-in" element={<Layout><SignIn/></Layout>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
