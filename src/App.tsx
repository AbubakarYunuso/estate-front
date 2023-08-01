import { Routes, Route } from "react-router-dom";
import Estate from "./components/Estates/Estate";
import Auth from "./pages/Authorization/Auth";
import Login from "./pages/Authorization/Login";
import Header from "./components/Header/Header";
import Comments from "./pages/Comments/Comments";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Comparison from "./components/Comparison/Comparison";
import Footer from "./components/Footer/Footer"
import BuldingObject from "./components/BuldingObject/BuldingObject";


function App() {
  return (
    <>
      <div className="container">
        <Header />
      </div>
      <Routes>
        <Route path="/comments" element={<Comments />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/" element={<BuldingObject />} />
        <Route path="/comparison" element={<Comparison />} />
        <Route path="/estate" element={<Estate />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
