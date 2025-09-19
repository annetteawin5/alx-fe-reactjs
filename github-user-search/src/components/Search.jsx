
import React, { useState } from "react";

function Search() {
  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  return (
    <>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setError("");
          setUser(null);
          if (username.trim()) {
            setLoading(true);
            try {
              const res = await fetch(
                `https://api.github.com/users/${username.trim()}`
              );
              if (!res.ok) {
                throw new Error("User not found");
              }
              const data = await res.json();
              setUser(data);
            } catch {
              setError("User not found");
            } finally {
              setLoading(false);
            }
          }
        }}
        
      >
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={handleChange}
         
        />
        <button
          type="submit"
        >
          Search
        </button>
      </form>
      {loading && (
        <div >Loading...</div>
      )}
      {!loading && error && (
        <div >
          Looks like we cant find the user
        </div>
      )}
      {!loading && user && (
        <div
        >
          <img
            src={user.avatar_url}
            alt={user.login}
            width={50}
            
          />
          <h2>{user.name ? user.name : user.login}</h2>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </>
  );
}

export default Search;
