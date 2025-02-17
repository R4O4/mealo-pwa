import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome"
import Login from "./pages/Login"

function App() {
  
  console.log(screen.width);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Welcome />} />
        <Route path="Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
