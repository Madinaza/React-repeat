import { useState } from "react";
import {useUser} from "./UserContext";

function Profile() {
  const { user, setUser } = useUser();
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setUser({ id: 1, username: "madinaza", bio: "lorem impus" });
      setLoading(false);
    }, 1500);
  };

  const handleLogOut = () => {
    setUser(null);
  };
  return (
    <div>
      {!user && (
        <button onClick={handleLogin}>
          {loading ? "loading..." : "login"}
        </button>
      )}

      <code>{JSON.stringify(user)}</code>

      {user && <button onClick={handleLogOut}>Logout</button>}
    </div>
  );
}

export default Profile;
