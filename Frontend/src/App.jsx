import Home from "./pages/Home";
import NavBar from "./components/navbar/NavBar";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" Component={Home} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
