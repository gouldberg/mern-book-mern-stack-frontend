// ------------------------------------------------------------------------------
// p.85
// ------------------------------------------------------------------------------
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// const UpdateItem = () => {
//   const params = useParams();

//   const [title, setTitle] = useState("");
//   const [price, setPrice] = useState("");
//   const [image, setImage] = useState("");
//   const [description, setDescription] = useState("");

//   useEffect(() => {
//     const getSingleItem = async () => {
//       // params.id is used by useParams
//       const response = await fetch(`http://localhost:5000/item/${params.id}`);
//       const jsonResponse = await response.json();

//       setTitle(jsonResponse.singleItem.title);
//       setPrice(jsonResponse.singleItem.price);
//       setImage(jsonResponse.singleItem.image);
//       setDescription(jsonResponse.singleItem.description);
//     };

//     getSingleItem();
//   }, [params.id]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(
//         `http://localhost:5000/item/update/${params.id}`,
//         {
//           method: "PUT",
//           headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//             authorizaion: `Bearer ${localStorage.getItem("token")}`,
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
//       alert("アイテム編集失敗");
//     }
//   };

//   return (
//     <div>
//       <h1>アイテム編集</h1>
//       <form on Submit={handleSubmit}>
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
//         <button>編集</button>
//       </form>
//     </div>
//   );
// };

// export default UpdateItem;

// ------------------------------------------------------------------------------
// p.98 + p.100:  css style by className
// p.122:  change tab name
// ------------------------------------------------------------------------------
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../utils/useAuth";

const UpdateItem = () => {
  const params = useParams();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const [email, setEmail] = useState("");

  useEffect(() => {
    document.title = "編集ページ";

    const getSingleItem = async () => {
      // params.id is used by useParams
      const response = await fetch(`http://localhost:5000/item/${params.id}`);
      const jsonResponse = await response.json();

      setTitle(jsonResponse.singleItem.title);
      setPrice(jsonResponse.singleItem.price);
      setImage(jsonResponse.singleItem.image);
      setDescription(jsonResponse.singleItem.description);
      setEmail(jsonResponse.singleItem.email);
    };

    getSingleItem();
  }, [params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/item/update/${params.id}`,
        {
          method: "PUT",
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
        }
      );
      const jsonData = await response.json();
      alert(jsonData.message);
    } catch (err) {
      alert("アイテム編集失敗");
    }
  };

  const loginUser = useAuth();

  if (loginUser === email) {
    return (
      <div>
        <h1 className="page-title">アイテム編集</h1>
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
          <button>編集</button>
        </form>
      </div>
    );
  } else {
    return <h1>権限がありません</h1>;
  }
};

export default UpdateItem;

// ------------------------------------------------------------------------------
// final
// ------------------------------------------------------------------------------
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import useAuth from "../../utils/useAuth";

// const UpdateItem = () => {
//   const params = useParams();

//   const [title, setTitle] = useState("");
//   const [price, setPrice] = useState("");
//   const [image, setImage] = useState("");
//   const [description, setDescription] = useState("");
//   const [email, setEmail] = useState("");

//   useEffect(() => {
//     document.title = "編集ページ";

//     const getSingleItem = async () => {
//       // const response = await fetch(`http://localhost:5000/item/${params.id}`);
//       const response = await fetch(
//         `https://mern-book-mern-stack-backend.onrender.com/item/${params.id}`
//       );
//       const jsonResponse = await response.json();
//       setTitle(jsonResponse.singleItem.title);
//       setPrice(jsonResponse.singleItem.price);
//       setImage(jsonResponse.singleItem.image);
//       setDescription(jsonResponse.singleItem.description);
//       setEmail(jsonResponse.singleItem.email);
//     };
//     getSingleItem();
//   }, [params.id]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // const response = await fetch(`http://localhost:5000/item/update/${params.id}`, {
//       const response = await fetch(
//         `https://mern-book-mern-stack-backend.onrender.com/item/update/${params.id}`,
//         {
//           method: "PUT",
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
//       alert("アイテム編集失敗");
//     }
//   };

//   const loginUser = useAuth();

//   if (loginUser === email) {
//     return (
//       <div>
//         <h1 className="page-title">アイテム編集</h1>
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
//           <button>編集</button>
//         </form>
//       </div>
//     );
//   } else {
//     return <h1>権限がありません</h1>;
//   }
// };

// export default UpdateItem;
