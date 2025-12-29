import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("olive");

  return (
    <div
      style={{
        backgroundColor: bgColor,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        paddingBottom: "40px",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "10px 20px",
          borderRadius: "25px",
          display: "flex",
          gap: "10px",
        }}
      >
        <button onClick={() => setBgColor("red")} style={buttonStyle("red")}>
          Red
        </button>

        <button onClick={() => setBgColor("pink")} style={buttonStyle("pink")}>
          pink
        </button>

        <button
          onClick={() => setBgColor("green")}
          style={buttonStyle("green")}
        >
          Green
        </button>

        <button
          onClick={() => setBgColor("orange")}
          style={buttonStyle("orange")}
        >
          Orange
        </button>

        <button onClick={() => setBgColor("blue")} style={buttonStyle("blue")}>
          Blue
        </button>
      </div>
    </div>
  );
}

const buttonStyle = (color) => ({
  backgroundColor: color,
  color: "white",
  border: "none",
  padding: "8px 16px",
  borderRadius: "20px",
  cursor: "pointer",
});

export default App;
