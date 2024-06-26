// ------------------------------------------------------------------------------
// p.78
// ------------------------------------------------------------------------------
// import { useState } from "react";

// const CreateItem = () => {
//   const [title, setTitle] = useState("");
//   const [price, setPrice] = useState("");
//   const [image, setImage] = useState("");
//   const [description, setDescription] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:5000/item/create", {
//         method: "POST",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//           authorizaion: `Bearer ${localStorage.getItem("token")}`,
//         },
//         body: JSON.stringify({
//           title: title,
//           price: price,
//           image: image,
//           description: description,
//         }),
//       });
//       const jsonData = await response.json();
//       alert(jsonData.message);
//     } catch (err) {
//       alert("アイテム作成失敗");
//     }
//   };
//   return (
//     <div>
//       <h1>アイテム作成</h1>
//       <form on Submit={handleSubmit}>
//         {/* <input type="text" name="title" placeholder="アイテム名" required /> */}
//         {/* <input type="text" name="price" placeholder="価格" required /> */}
//         {/* <input type="text" name="image" placeholder="画像" required /> */}
//         {/* <textarea
//           type="text"
//           name="description"
//           rows="15"
//           placeholder="商品説明"
//           required
//         ></textarea> */}
//         <input
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           type="text"
//           name="title"
//           placeholder="アイテム名"
//           required
//         />
//         <input
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//           type="text"
//           name="price"
//           placeholder="価格"
//           required
//         />
//         <input
//           value={image}
//           onChange={(e) => setImage(e.target.value)}
//           type="text"
//           name="image"
//           placeholder="画像"
//           required
//         />
//         <textarea
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           type="text"
//           name="description"
//           rows="15"
//           placeholder="商品説明"
//           required
//         ></textarea>
//         <button>作成</button>
//       </form>
//     </div>
//   );
// };

// export default CreateItem;

// ------------------------------------------------------------------------------
// p.96 + p.100:  css style by className
// ------------------------------------------------------------------------------
// import { useState } from "react";
// import useAuth from "../../utils/useAuth";

// const CreateItem = () => {
//   const [title, setTitle] = useState("");
//   const [price, setPrice] = useState("");
//   const [image, setImage] = useState("");
//   const [description, setDescription] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:5000/item/create", {
//         method: "POST",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//           authorizaion: `Bearer ${localStorage.getItem("token")}`,
//         },
//         body: JSON.stringify({
//           title: title,
//           price: price,
//           image: image,
//           description: description,
//         }),
//       });
//       const jsonData = await response.json();
//       alert(jsonData.message);
//     } catch (err) {
//       alert("アイテム作成失敗");
//     }
//   };

//   const loginUser = useAuth();

//   if (loginUser) {
//     return (
//       <div>
//         <h1 className="page-title">アイテム作成</h1>
//         <form on Submit={handleSubmit}>
//           {/* <input type="text" name="title" placeholder="アイテム名" required /> */}
//           {/* <input type="text" name="price" placeholder="価格" required /> */}
//           {/* <input type="text" name="image" placeholder="画像" required /> */}
//           {/* <textarea
//             type="text"
//             name="description"
//             rows="15"
//             placeholder="商品説明"
//             required
//           ></textarea> */}
//           <input
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             type="text"
//             name="title"
//             placeholder="アイテム名"
//             required
//           />
//           <input
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             type="text"
//             name="price"
//             placeholder="価格"
//             required
//           />
//           <input
//             value={image}
//             onChange={(e) => setImage(e.target.value)}
//             type="text"
//             name="image"
//             placeholder="画像"
//             required
//           />
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             type="text"
//             name="description"
//             rows="15"
//             placeholder="商品説明"
//             required
//           ></textarea>
//           <button>作成</button>
//         </form>
//       </div>
//     );
//   }
// };

// export default CreateItem;

// ------------------------------------------------------------------------------
// p.117:  imgInput
// p.120:  change tab name
// ------------------------------------------------------------------------------
import { useState, useEffect } from "react";
import useAuth from "../../utils/useAuth";
import ImgInput from "../../components/imgInput";

const CreateItem = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/item/create", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorizaion: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          title: title,
          price: price,
          image: image,
          description: description,
        }),
      });
      const jsonData = await response.json();
      alert(jsonData.message);
    } catch (err) {
      alert("アイテム作成失敗");
    }
  };

  useEffect(() => {
    document.title = "作成ページ";
  }, []);

  const loginUser = useAuth();

  if (loginUser) {
    return (
      <div>
        <h1 className="page-title">アイテム作成</h1>
        <ImgInput setImage={setImage} />
        <form on Submit={handleSubmit}>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            name="title"
            placeholder="アイテム名"
            required
          />
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="text"
            name="price"
            placeholder="価格"
            required
          />
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            type="text"
            name="image"
            placeholder="画像"
            required
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            name="description"
            rows="15"
            placeholder="商品説明"
            required
          ></textarea>
          <button>作成</button>
        </form>
      </div>
    );
  }
};

export default CreateItem;

// ------------------------------------------------------------------------------
// final
// ------------------------------------------------------------------------------
// import { useState, useEffect } from "react";
// import useAuth from "../../utils/useAuth";
// import ImgInput from "../../components/imgInput";

// const CreateItem = () => {
//   const [title, setTitle] = useState("");
//   const [price, setPrice] = useState("");
//   const [image, setImage] = useState("");
//   const [description, setDescription] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // const response = await fetch("http://localhost:5000/item/create", {
//       const response = await fetch(
//         "https://mern-book-mern-stack-backend.onrender.com/item/create",
//         {
//           method: "POST",
//           headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//             authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//           body: JSON.stringify({
//             title: title,
//             price: price,
//             image: image,
//             description: description,
//           }),
//         }
//       );
//       const jsonData = await response.json();
//       alert(jsonData.message);
//     } catch (err) {
//       alert("アイテム作成失敗");
//     }
//   };

//   useEffect(() => {
//     document.title = "作成ページ";
//   }, []);

//   const loginUser = useAuth();

//   if (loginUser) {
//     return (
//       <div>
//         <h1 className="page-title">アイテム作成</h1>
//         <ImgInput setImage={setImage} />
//         <form onSubmit={handleSubmit}>
//           <input
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             type="text"
//             name="title"
//             placeholder="アイテム名"
//             required
//           />
//           <input
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             type="text"
//             name="price"
//             placeholder="価格"
//             required
//           />
//           <input
//             value={image}
//             onChange={(e) => setImage(e.target.value)}
//             type="text"
//             name="image"
//             placeholder="画像"
//             required
//           />
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             type="text"
//             name="description"
//             rows="15"
//             placeholder="商品説明"
//             required
//           ></textarea>
//           <button>作成</button>
//         </form>
//       </div>
//     );
//   }
// };

// export default CreateItem;
