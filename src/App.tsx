import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FetchComponent from "./components/FetchComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <FetchComponent />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
