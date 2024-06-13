// ------------------------------------------------------------------------------
// p.35
// ------------------------------------------------------------------------------
// import { useState } from "react";

// const Register = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:5000/user/register", {
//         method: "POST",
//         headers: {
//           Accept: "application/json",
//           "Content-type": "application/json",
//         },
//         body: JSON.stringify({
//           name: name,
//           email: email,
//           password: password,
//         }),
//       });
//       const jsonResponse = await response.json();
//       alert(jsonResponse.message);
//     } catch (err) {
//       alert("ユーザー登録失敗");
//     }
//   };

//   return (
//     <div>
//       <h1>ユーザー登録ページ</h1>
//       <form onSumbit={handleSubmit}>
//         {/* <input type="text" name="name" placeholder="名前" required /> */}
//         {/* <input type="text" name="email" placeholder="メールアドレス" required /> */}
//         {/* <input type="text" name="password" placeholder="パスワード" required /> */}
//         <input
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           type="text"
//           name="name"
//           placeholder="名前"
//           required
//         />
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
//         <button>登録</button>
//       </form>
//     </div>
//   );
// };

// export default Register;

// ------------------------------------------------------------------------------
// p.101:  css style by className
// p.120:  change tab name
// ------------------------------------------------------------------------------
import { useState, useEffect } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/user/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });
      const jsonResponse = await response.json();
      alert(jsonResponse.message);
    } catch (err) {
      alert("ユーザー登録失敗");
    }
  };

  useEffect(() => {
    document.title = "登録ページ";
  }, []);

  return (
    <div>
      <h1 className="page-title">ユーザー登録</h1>
      <form onSumbit={handleSubmit}>
        {/* <input type="text" name="name" placeholder="名前" required /> */}
        {/* <input type="text" name="email" placeholder="メールアドレス" required /> */}
        {/* <input type="text" name="password" placeholder="パスワード" required /> */}
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          placeholder="名前"
          required
        />
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
        <button>登録</button>
      </form>
    </div>
  );
};

export default Register;

// ------------------------------------------------------------------------------
// final
// ------------------------------------------------------------------------------
// import { useState, useEffect } from "react";

// const Register = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // const response = await fetch("http://localhost:5000/user/register", {
//       const response = await fetch(
//         "https://mern-book-mern-stack-backend.onrender.com/user/register",
//         {
//           method: "POST",
//           headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             name: name,
//             email: email,
//             password: password,
//           }),
//         }
//       );
//       const jsonResponse = await response.json();
//       alert(jsonResponse.message);
//     } catch (err) {
//       alert("ユーザー登録失敗");
//     }
//   };

//   useEffect(() => {
//     document.title = "登録ページ";
//   }, []);

//   return (
//     <div>
//       <h1 className="page-title">ユーザー登録ページ</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           type="text"
//           name="name"
//           placeholder="名前"
//           required
//         />
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
//         <button>登録</button>
//       </form>
//     </div>
//   );
// };

// export default Register;
