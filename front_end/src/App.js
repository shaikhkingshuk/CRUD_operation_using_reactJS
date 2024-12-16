import { useState } from "react";
import AddUser from "./components/AddUser";
import User from "./components/User";
import Sidebar from "./components/Sidebar";

function App() {
  const [newUser, setNewUser] = useState(null);

  // Callback to receive the newly added user
  const handleUserAdded = (user) => {
    setNewUser(user);
  };
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <AddUser onUserAdded={handleUserAdded} />
        <User newUser={newUser} />
      </div>
    </div>
  );
}

export default App;
