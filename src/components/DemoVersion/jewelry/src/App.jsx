import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from 'react-use-cart'
import { WishlistProvider } from "./context/WishlistContext.jsx"
// import { AuthProvider } from "../context/AuthContext"


import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Home from "./pages/Home.jsx"
import Wishlist from "./components/Wishlist.jsx"
import CartPage from "./components/Cart.jsx"
import About from "./pages/AboutUs.jsx"
import BlogList from "./Sections/BlogList.jsx"
import BlogDetails from "./pages/BlogDetails.jsx"
import Contact from "./pages/Contact.jsx"
import Shop from "./pages/Shop.jsx"
import ProductPage from "./pages/ProductPage.jsx"

// import Login from "./pages/Login.jsx"
// import Register from "./pages/Register.jsx"
// import Dashboard from "./pages/Dashboard.jsx"
// import ProtectedRoute from "./components/ProtectedRoute.jsx"

function App() {
    return (
        // <AuthProvider>
            <WishlistProvider>
                <CartProvider>
                    <Router basename="/demo-2">
                        <Header />

                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/index.html" element={<Home />} />
                            <Route path="/wishlist" element={<Wishlist />} />
                            <Route path="/cart" element={<CartPage />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/blog" element={<BlogList />} />
                            <Route path="/blog-details" element={<BlogDetails />} />
                            <Route path="/shop" element={<Shop />} />
                            <Route path="/product/:id" element={<ProductPage />} />
                            <Route path="/contact" element={<Contact />} />

                            {/*<Route path="/login" element={<Login />} />*/}
                            {/*<Route path="/register" element={<Register />} />*/}

                            {/*<Route*/}
                            {/*    path="/dashboard"*/}
                            {/*    element={*/}
                            {/*        <ProtectedRoute>*/}
                            {/*            <Dashboard />*/}
                            {/*        </ProtectedRoute>*/}
                            {/*    }*/}
                            {/*/>*/}
                        </Routes>

                        <Footer />
                    </Router>
                </CartProvider>
            </WishlistProvider>
        // </AuthProvider>
    )
}

export default App
