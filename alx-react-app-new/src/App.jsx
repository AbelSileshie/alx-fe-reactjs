import react from "react";
import "./App.css";
import Counter from "./components/Counter";
import ProfilePage from "./components/ProfilePage";
function App() {
  const userData = {
    name: "John Doe",
    email: "john@example.com",
    // add more user data as needed
  };

  return (
    <>
      <Counter />
      <UserContext.Provider value={userData}>
        <ProfilePage />
      </UserContext.Provider>
    </>
  );
}

export default App;
