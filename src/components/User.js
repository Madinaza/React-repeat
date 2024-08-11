// import PropTypes from "prop-types";

// function User({ name, surname, isLoggin, friends, adress }) {
//   if (!isLoggin) {
//     return <h1>Give me correct data please</h1>;
//   }
//   return (
//     <>
//       <h1>{name}</h1>
//       <h3>{adress.zip}</h3>
//       {friends.map((friend, index) => (
//         <h1 key={index}>{friend}</h1>
//       ))}
//     </>
//   );
// }
// User.propTypes = {
//   name: PropTypes.string.isRequired,
//   surname: PropTypes.string.isRequired,
//   friends: PropTypes.array,
//   adress: PropTypes.shape({
//     title: PropTypes.string,
//     zip: PropTypes.number,
//   }),
// };

// export default User;

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function User() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`).then((resp) => {
      setUser(resp.data);
    });
  }, [id]);

  return (
    <>
      <div>
        <hi>Name:{user.name}</hi>
      </div>

    <Link to={`/user/${parseInt(user.id)+1}`}>Next User : {parseInt(user.id)+1}</Link>
    </>
  );
}

export default User;
