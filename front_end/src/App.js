import CompleteTable from "./Components/CompleteTable";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import DetailedCards from "./Components/DetailedCards";

function App() {
  return (
    <>
    <Navbar />

    <Router>
        <Routes>
          <Route path="/card" exact element={<DetailedCards />} /> 
                
        </Routes>
      </Router>
    <CompleteTable />
    <div className="App">
    </div>
    </>
  );
}

export default App;
