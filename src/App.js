import { Routes, Route } from "react-router-dom";
import Catalog from "./components/Catalog/Catalog";
import Footer from "./components/Common/Footer/Footer";
import Header from "./components/Common/Header/Header";
import Create from "./components/Create/Create";
import Delete from "./components/Delete/Delete";
import Details from "./components/Details/Details";
import Edit from "./components/Edit/Edit";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import NotFound from "./components/Not Found/NotFound";
import Profile from "./components/Profile/Profile";
import Register from "./components/Register/Register";
import SearchResults from "./components/Search Results/SearchResults";
import { AuthProvider } from "./contexts/AuthContext";
import RouteGuard from "./guards/PrivateGuard";
import PrivateRoute from "./guards/PrivateRoute";

function App() {
    return (
        <>
            <AuthProvider>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/search/:criteria" element={<SearchResults />} />
                    <Route path="*" element={<NotFound />} />

                    <PrivateRoute>
                        <Route
                            path="/login"
                            element={<Login />}
                        />
                    </PrivateRoute>

                    <PrivateRoute>
                        <Route
                            path="/register"
                            element={<Register />}
                        />
                    </PrivateRoute>

                    <RouteGuard>
                        <Route
                            path="/create"
                            element={<Create />}
                        />
                    </RouteGuard>

                    <RouteGuard>
                        <Route
                            path="/profile/:id"
                            element={<Profile />}
                        />
                    </RouteGuard>

                    <RouteGuard>
                        <Route
                            path="/logout"
                            element={<Logout />}
                        />
                    </RouteGuard>

                    <RouteGuard>
                        <Route
                            path="/details/:publicationId"
                            element={<Details />}
                        />
                    </RouteGuard>

                    <RouteGuard>
                        <Route
                            path="/delete/:publicId"
                            element={<Delete />}
                        />
                    </RouteGuard>

                    <RouteGuard>
                        <Route
                            path="/edit/:publicId"
                            element={<Edit />}
                        />
                    </RouteGuard>
                </Routes>
                <Footer />
            </AuthProvider>
        </>
    );
}

export default App;
