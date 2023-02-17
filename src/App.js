import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Users from "./pages/Users";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
