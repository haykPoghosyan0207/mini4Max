import { CartProvider } from 'react-use-cart';
import { WishlistProvider } from './context/WishlistContext.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Home/Navbar/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Wishlist from './components/Wishlist/Wishlist.jsx';
import Shop from './components/shop/Shop.jsx';
import ProductPage from "./Utils/OneProduct.jsx";
import CartPage from "./components/Home/Cart/Cart.jsx";
import TopProductSlider from "./components/Home/HomeHeader/HomeHeader.jsx";

import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import Profile from "./components/Profile/Profile.jsx";

import ProtectedRoute from "./components/Auth/ProtectedRoute.jsx";
import LoginRedirect from "./components/Auth/LoginRedirect.jsx";
import Contacts from "./components/Home/HomeContacts/Contacts.jsx";
import NewsPage from "./components/NewsPage/NewsPage.jsx";

function App() {
    return (
        <WishlistProvider>
            <CartProvider>
                <Router>
                    <Navbar />
                    {/*<TopProductSlider />*/}
                    <Route path="/home" element={<Home />} />
                    <main>
                        <Routes>
                            <Route path="/home" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/shop" element={<Shop />} />
                            <Route path="/wishlist" element={<Wishlist />} />
                            <Route path="/cartPage" element={<CartPage />} />
                            <Route path="/product/:id" element={<ProductPage />} />
                            <Route path="/contacts" element={<Contacts />} />
                            <Route path="/news" element={<NewsPage />} />

                            {/* ✅ Auth Pages */}
                            <Route
                                path="/login"
                                element={
                                    <LoginRedirect>
                                        <Login />
                                    </LoginRedirect>
                                }
                            />
                            <Route
                                path="/register"
                                element={
                                    <LoginRedirect>
                                        <Register />
                                    </LoginRedirect>
                                }
                            />
                            <Route
                                path="/profile"
                                element={
                                    <ProtectedRoute>
                                        <Profile />
                                    </ProtectedRoute>
                                }
                            />
                        </Routes>
                    </main>
                </Router>
            </CartProvider>
        </WishlistProvider>
    );
}

export default App;
