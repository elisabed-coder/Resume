import React, { useEffect } from "react";
import "./App.css";
import Parent from "./parent";
import { useState } from "react";
import Users from "./Users";
import Products from "./Products";

const App = () => {
  // let [count, setCount] = useState(0);
  // const increment = () => {
  //   setCount(count + 1);
  // };

  // const decrement = () => {
  //   if (count != 0) {
  //     setCount(count - 1);
  //   }
  // };

  return (
    // <div>
    //   <p>{count}</p>
    //   <button onClick={increment}>Increase </button>
    //   <button onClick={decrement}>Decrease</button>
    // </div>
    <div>
      <h1>Products from fakestroepi</h1>
      <Users />
    </div>
  );
};
// const App = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const handleusernameChange = (event) => {
//     setUsername(event.target.value);
//   };
//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };
//   const handleSubmit = (event) => {
//     event.precentDefault();
//     console.log("submiit", { username, email });
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>
//           username:
//           <input
//             type="text"
//             value={username}
//             onChange={handleusernameChange}
//           ></input>
//         </label>
//         <label>
//           email:
//           <input
//             type="email"
//             value={email}
//             onChange={handleEmailChange}
//           ></input>
//         </label>
//         <button type="submit">Submit</button>
//       </div>
//     </form>
//   );
// };

export default App;
