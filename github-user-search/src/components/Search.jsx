import React, { useState } from "react";
import { Button, Input } from "@material-tailwind/react";
import { fetchAdvancedUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUserData([]);

    try {
      const data = await fetchAdvancedUserData(username, location, minRepos);
      setUserData(data);
    } catch (err) {
      setError("Looks like we can't find any users with that criteria.");
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
        <Input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter Location (optional)"
          size="lg"
        />
        <Input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Minimum Repositories"
          size="lg"
        />
        <Button type="submit" color="blue" size="lg">
          Search
        </Button>
      </form>

      {loading && <p className="mt-4 text-center">Loading...</p>}

      {error && <p className="mt-4 text-center text-red-500">{error}</p>}

      {userData.length > 0 && (
        <div className="mt-4">
          {userData.map((user) => (
            <div key={user.id} className="mb-4 text-center">
              <img
                src={user.avatar_url}
                alt={user.login}
                className="rounded-full w-32 h-32 mx-auto"
              />
              <h3 className="text-xl mt-2">{user.name || user.login}</h3>
              <p className="text-sm text-gray-600">{user.location}</p>
              <p className="text-sm text-gray-600">
                Repositories: {user.public_repos}
              </p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mt-2 inline-block"
              >
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
