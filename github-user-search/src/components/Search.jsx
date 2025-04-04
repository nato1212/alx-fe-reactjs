import { useState } from "react";
import { fetchUsers } from "../services/githubService";

function Search() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUsers([]);

    try {
      const data = await fetchUsers(query, location, minRepos);
      if (data.length > 0) {
        setUsers(data);
      } else {
        setError(true);
      }
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
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <input
          type="number"
          placeholder="Min Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
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
          Looks like we can't find users
        </p>
      )}
      {users.length > 0 && (
        <div style={{ marginTop: "16px" }}>
          {users.map((user) => (
            <div
              key={user.id}
              style={{
                border: "1px solid #ddd",
                padding: "16px",
                borderRadius: "4px",
                marginBottom: "8px",
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
                <p>Location: {user.location || "N/A"}</p>
                <p>Repositories: {user.public_repos || "N/A"}</p>
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
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
