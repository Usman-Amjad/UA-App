import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from './components/About';
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#333";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <BrowserRouter>
        <NavBar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container m-3">
          <Routes>
            <Route path="/about" element={<about />}>
              <About />
            </Route>
            <Route path="/" element=''>
              <TextForm
                showAlert={showAlert}
                heading="Enter Text Below To Analyze"
                mode={mode}
              />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
