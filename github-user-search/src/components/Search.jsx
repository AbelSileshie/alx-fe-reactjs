import React, { useState } from "react";
import { button, Input } from "@material-tailwind/react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError("Looks like we can't find the user.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-12 p-4">
      <form
        onSubmit={handleSearch}
        className="flex flex-col items-center space-y-4"
      >
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          size="lg"
        />
        <button type="submit" color="blue" size="lg">
          Search
        </buttonutton>
      </form>

      {loading && <p className="mt-4 text-center">Loading...</p>}

      {error && <p className="mt-4 text-center text-red-500">{error}</p>}

      {userData && (
        <div className="mt-4 text-center">
          <img
            src={userData.avatar_url}
            alt={userData.login}
            className="rounded-full w-32 h-32 mx-auto"
          />
          <h3 className="text-xl mt-2">{userData.name || userData.login}</h3>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 mt-2 inline-block"
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
