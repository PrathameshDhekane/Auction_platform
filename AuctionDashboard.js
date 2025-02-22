import React from "react";
import { useNavigate } from "react-router-dom";

const AuctionDashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token"); // Remove token on logout
        navigate("/signin"); // Redirect to Sign In
    };

    return (
        <div style={{ textAlign: "center", padding: "50px" }}>
            <h2>Welcome to the Auction Dashboard!</h2>
            <p>Here, you can bid on exciting items and participate in auctions.</p>
            <button onClick={handleLogout} style={{ padding: "10px", fontSize: "16px", cursor: "pointer" }}>
                Logout
            </button>
        </div>
    );
};

export default AuctionDashboard;
