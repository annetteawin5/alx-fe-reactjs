import React from "react";
import UserContext from "./components/UserContext";
function UserProfile  () {
const data = useContext(UserContext);
   return (
     <div>
       <h2>{data.name}</h2>
       <p>Age: {data.age}</p>
       <p>Bio: {data.bio}</p>
     </div>
   );
 };

 export default UserProfile;