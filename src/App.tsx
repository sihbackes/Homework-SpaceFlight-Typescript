import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FetchComponent from "./components/FetchComponent";
import DetailsComponent from "./components/DetailsComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<FetchComponent />} path="/" />
          <Route element={<DetailsComponent />} path="/details/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
