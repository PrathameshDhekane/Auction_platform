import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // For styling

const Home = () => {
    return (
        <div className="container">
            <nav className="navbar">
                <h1 className="title">Auction App</h1>
                <div className="nav-links">
                    <Link to="/signup">Signup</Link>
                    <Link to="/signin">Signin</Link>
                </div>
            </nav>
            <div className="content">
                <h2>Welcome to Auction App</h2>
                <p>
                    An auction is a process of buying and selling goods by bidding.
                    The highest bidder wins the item!
                </p>
                <p>Start bidding today!</p>
            </div>
        </div>
    );
};

export default Home;
