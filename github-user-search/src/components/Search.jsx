import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    setError(false);
    setUser(null);

    try {
      const data = await fetchUserData(query);
      setUser(data);
    } catch {
      setError(true);
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "24px",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        width: "100%",
        maxWidth: "400px",
      }}
    >
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="GitHub username"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            backgroundColor: "#007bff",
            color: "white",
            padding: "8px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </form>

      {loading && (
        <p style={{ textAlign: "center", marginTop: "16px" }}>Loading...</p>
      )}
      {error && (
        <p style={{ textAlign: "center", color: "red", marginTop: "16px" }}>
          Looks like we cant find the user
        </p>
      )}
      {user && (
        <div
          style={{
            marginTop: "16px",
            padding: "16px",
            border: "1px solid #ddd",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={user.avatar_url}
            alt={user.login}
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              marginRight: "12px",
            }}
          />
          <div>
            <h2 style={{ fontSize: "18px", fontWeight: "bold" }}>
              {user.login}
            </h2>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#007bff" }}
            >
              View Profile
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
