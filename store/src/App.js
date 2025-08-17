
// src/App.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";

function App() {
  const firstName = "raja"; // Mets ton prénom ici (ou laisse vide "")

  return (
    <div className="container mt-5">
      <Card style={{ width: "22rem", padding: "1rem", borderRadius: "15px", boxShadow: "0 4px 10px rgba(0,0,0,0.2)" }}>
        <Image />
        <Card.Body>
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>

      {/* Message conditionnel */}
      <p className="mt-4 text-lg font-medium">
        {firstName ? `Hello, ${firstName}` : "Hello, there !"}
      </p>

      {/* Image si prénom fourni */}
      {firstName && (
        <img
          src="https://png.pngtree.com/png-clipart/20201226/ourmid/pngtree-avatar-profile-picture-png-image_2634252.jpg"
          alt="Profile"
          className="mt-4 w-32 h-32 rounded-full shadow"
        />
      )}
    </div>
  );
}

export default App;
