// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link, Route, Routes, useParams } from "react-router-dom";
// import User from "./User";

// function Users() {
//   const [users, setUsers] = useState([]);
//   const { id } = useParams();

//   useEffect(() => {
//     axios(`https://jsonplaceholder.typicode.com/users`).then((resp) => {
//       setUsers(resp.data);
//     });
//   }, []);
//   return (
//     <div>
//       <h1>List of Users:</h1>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>
//             <Link to={`/users/${user.id}`}>{user.name}</Link>
//           </li>
//         ))}
//       </ul>

//       <Routes>
//         <Route path="/" element={<h3>Please select a user.</h3>} />
//         <Route path="/users/:id" element={<User />} />
//       </Routes>
//     </div>
//   );
// }

// export default Users;
