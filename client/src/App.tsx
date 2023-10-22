import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="mx-auto">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
