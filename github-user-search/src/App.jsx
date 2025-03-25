import "./App.css";
import Search from "./components/Search";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "16px",
        backgroundColor: "#f4f4f4",
      }}
    >
      <h1
        style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}
      >
        GitHub User Search
      </h1>
      <Search />
    </div>
  );
}

export default App;
