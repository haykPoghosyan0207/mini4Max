import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import { OurProjects } from "./components/OurProjects.jsx";
import OurTrends from "./components/OurTrends.jsx";
import { ServiceSection } from "./components/YourGoals.jsx";
import Partners from "./components/Partners.jsx";
import ContactsSection from "./components/ContactsSection.jsx";
import AboutPage from "./components/pages/AboutPage.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import Services from "./components/pages/Services.jsx";
import Contacts from "./components/pages/Contacts.jsx";
import PricePlan from "./components/PricePlans.jsx";
import Blog from "./components/pages/blog.jsx";
import OneBlog from "./components/pages/OneBlog.jsx";
import DemoSection from "./components/DemoSection.jsx";

function DemoIframe() {
    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <iframe
                src="/demo/clothersShop/"
                title="Demo Clothers"
                style={{ border: 'none', width: '100%', height: '100%' }}
            />
        </div>
    );
}

function JewelryDemoIframe() {
    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <iframe
                src="/demo/jewelry/"
                title="Demo Jewelry"
                style={{ border: 'none', width: '100%', height: '100%' }}
            />
        </div>
    );
}

function App() {
    return (
        <Router>
            <Navbar />
            <ScrollToTop />

            <Routes>
                <Route path="/oneBlog" element={<OneBlog />} />
                <Route
                    path="/"
                    element={
                        <>
                            <Header />
                            <ServiceSection />
                            {/* <Partners /> */}
                            <OurProjects />
                            <DemoSection />
                            <About />
                            <OurTrends />
                            <PricePlan />
                        </>
                    }
                />
                <Route path="/aboutPage" element={<AboutPage />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/blog" element={<Blog />} />

            </Routes>

            <ContactsSection />
        </Router>
    );
}

export default App;
