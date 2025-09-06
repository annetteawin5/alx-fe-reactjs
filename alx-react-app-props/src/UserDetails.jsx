import UserContext from "./UserContext";
import { useContext } from "react";

function UserDetails() {
const Data = useContext(UserContext)
  return (
    <div>
      <p>Name: {Data.name}</p>
      <p>Email: {Data.email}</p>
    </div>
  );
}

export default UserDetails;