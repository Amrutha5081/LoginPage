import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import "./Home.css";
const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container">
      <div className="welcome-box">
      <h1 class='text-center large-bold-text'>HELLO there!</h1>
        <h2 className="mb-3 text-center">Welcome</h2>
        {user && (
          <div className="user-info text-center">
            <p>Username: <p>{user.email}</p></p>
            {/* Add more user information if needed */}
          </div>
        )}
      </div>

      <div className="button-container">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </div>
  );
};

export default Home;
