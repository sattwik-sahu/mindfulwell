import * as React from "react";
import { auth } from "../../../data/firebase";
import { onAuthStateChanged } from "firebase/auth";

const Header = () => {
  const [user, setUser] = React.useState(auth.currentUser);
  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  return (
    <div className="Header">
      <section className="brand">MindfulWell</section>
      {user && (
        <section className="user_image">
          <img
            src={user?.photoURL}
            alt={`Photo of ${user?.displayName || "User photo"}`}
          />
        </section>
      )}
    </div>
  );
};

export default Header;
