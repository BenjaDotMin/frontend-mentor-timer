import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">

      <Header></Header>
      
      <main>
        <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        </div>
      </main>
     
    </div>
  );
}

export default App;
