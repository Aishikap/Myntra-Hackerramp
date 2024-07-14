import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
import Details from "./components/DetailsPage/Details";
import HomePage from "./components/Product/HomePage";
import TryOn from "./components/Try-On/Tryon.jsx";
import FashionChallenges from "./components/FashionChallenges/FashionChallenges.jsx";
import ProfileForm from "./pages/ProfileForm.jsx";
import Trending from "./components/Trending/Trending.jsx";

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/tryon" element={<TryOn />} />
                <Route path="/challenges" element={<FashionChallenges />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/details/:detailslug" element={<Details />} />
                <Route path="/profile" element={<ProfileForm />} />
                <Route path="/Trending" element={<Trending/>}/>
            </Routes>
        </>
    );
};

export default App;
