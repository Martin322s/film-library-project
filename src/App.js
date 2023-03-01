import { Routes, Route } from "react-router-dom";
import Catalog from "./components/Catalog/Catalog";
import Footer from "./components/Common/Footer/Footer";
import Header from "./components/Common/Header/Header";
import Create from "./components/Create/Create";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Register from "./components/Register/Register";

function App() {
    return (
        <>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>    
            <Footer />
        </>
    );
}

export default App;
