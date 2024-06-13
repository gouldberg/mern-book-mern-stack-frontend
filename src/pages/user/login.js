// ------------------------------------------------------------------------------
// p.44
// ------------------------------------------------------------------------------
// import { useState } from "react";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:5000/user/login", {
//         method: "POST",
//         headers: {
//           Accpet: "application/json",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email: email,
//           password: password,
//         }),
//       });
//       const jsonResponse = await response.json();
//       // jsonResponse have message and token
//       // console.log(jsonResponse);
//       // save token in Local Storage
//       localStorage.setItem("token", jsonResponse.token);
//       alert(jsonResponse.message);
//     } catch (err) {
//       alert("ログイン失敗");
//     }
//   };
//   return (
//     <div>
//       <h1>ログイン</h1>
//       <form onSubmit={handleSubmit}>
//         {/* <input type="text" name="email" placeholder="メールアドレス" required /> */}
//         {/* <input type="text" name="password" placeholder="パスワード" required /> */}
//         <input
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           type="text"
//           name="email"
//           placeholder="メールアドレス"
//           required
//         />
//         <input
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           type="text"
//           name="password"
//           placeholder="パスワード"
//           required
//         />
//         <button>ログイン</button>
//       </form>
//     </div>
//   );
// };

// export default Login;

// ------------------------------------------------------------------------------
// p.100:  css style by className
// p.120:  change tab name
// ------------------------------------------------------------------------------
import { useState, useEffect } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/user/login", {
        method: "POST",
        headers: {
          Accpet: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const jsonResponse = await response.json();
      // jsonResponse have message and token
      // console.log(jsonResponse);
      // save token in Local Storage
      localStorage.setItem("token", jsonResponse.token);
      alert(jsonResponse.message);
    } catch (err) {
      alert("ログイン失敗");
    }
  };

  useEffect(() => {
    document.title = "ログインページ";
  }, []);

  return (
    <div>
      <h1 className="page-title">ログイン</h1>
      <form onSubmit={handleSubmit}>
        {/* <input type="text" name="email" placeholder="メールアドレス" required /> */}
        {/* <input type="text" name="password" placeholder="パスワード" required /> */}
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          name="email"
          placeholder="メールアドレス"
          required
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          name="password"
          placeholder="パスワード"
          required
        />
        <button>ログイン</button>
      </form>
    </div>
  );
};

export default Login;

// ------------------------------------------------------------------------------
// final
// ------------------------------------------------------------------------------
// import { useState, useEffect } from "react";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // const response = await fetch("http://localhost:5000/user/login", {
//       const response = await fetch(
//         "https://mern-book-mern-stack-backend.onrender.com/user/login",
//         {
//           method: "POST",
//           headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             email: email,
//             password: password,
//           }),
//         }
//       );
//       const jsonResponse = await response.json();
//       localStorage.setItem("token", jsonResponse.token);
//       alert(jsonResponse.message);
//     } catch (err) {
//       alert("ログイン失敗");
//     }
//   };

//   useEffect(() => {
//     document.title = "ログインページ";
//   }, []);

//   return (
//     <div>
//       <h1 className="page-title">ログイン</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           type="text"
//           name="email"
//           placeholder="メールアドレス"
//           required
//         />
//         <input
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           type="text"
//           name="password"
//           placeholder="パスワード"
//           required
//         />
//         <button>ログイン</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
