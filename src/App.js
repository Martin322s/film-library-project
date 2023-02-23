import { Routes, Route } from "react-router-dom";
import Footer from "./components/Common/Footer/Footer";
import Header from "./components/Common/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

function App() {
    return (
        <>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                </Routes>    
            <Footer />
        </>
    );
}

export default App;
