import React, { useState } from "react";

function Contactus() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    address: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted:\n" + JSON.stringify(formData, null, 2));
    window.location.reload();
  };

  return (
    <section id="contact"> {/* <-- Linkable section */}
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#6f4e36", // Coffee brown background
          fontFamily: "Segoe UI, sans-serif"
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            backgroundColor: "#fdf6f0", // Beige form background
            padding: "40px",
            borderRadius: "12px",
            boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
            width: "350px",
            color: "#333"
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#6f4e37" }}>
            Contact Us
          </h2>

          <label style={{ fontWeight: "500" }}>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            style={inputStyle}
          />

          <label style={{ fontWeight: "500" }}>Phone Number:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Enter your phone number"
            style={inputStyle}
          />

          <label style={{ fontWeight: "500" }}>Address:</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            placeholder="Enter your address"
            style={{ ...inputStyle, height: "80px", resize: "none" }}
          />

          <button
            type="submit"
            style={{
              marginTop: "15px",
              width: "100%",
              padding: "10px",
              backgroundColor: "#5a3928",
              color: "#fdf6f0",
              border: "none",
              borderRadius: "5px",
              fontWeight: "bold",
              cursor: "pointer"
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#4a2c1f")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#5a3928")}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "5px",
  marginBottom: "15px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  fontSize: "14px"
};

export default Contactus;
