// ------------------------------------------------------------------------------
// p.89
// ------------------------------------------------------------------------------
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// const DeleteItem = () => {
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
//         `http://localhost:5000/item/delete/${params.id}`,
//         {
//           method: "DELETE",
//           headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//             authorizaion: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );
//       const jsonData = await response.json();
//       alert(jsonData.message);
//     } catch (err) {
//       alert("アイテム削除失敗");
//     }
//   };

//   return (
//     <div>
//       <h1>アイテム削除</h1>
//       <form on Submit={handleSubmit}>
//         <h2>{title}</h2>
//         {image && <img src={require(`../../images${image}`)} alt="item" />}
//         <h3>¥{price}</h3>
//         <p>{description}</p>
//         <button>削除</button>
//       </form>
//     </div>
//   );
// };

// export default DeleteItem;

// ------------------------------------------------------------------------------
// p.99 + p.100:  css style by className
// ------------------------------------------------------------------------------
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import useAuth from "../../utils/useAuth";

// const DeleteItem = () => {
//   const params = useParams();

//   const [title, setTitle] = useState("");
//   const [price, setPrice] = useState("");
//   const [image, setImage] = useState("");
//   const [description, setDescription] = useState("");

//   const [email, setEmail] = useState("");

//   useEffect(() => {
//     const getSingleItem = async () => {
//       // params.id is used by useParams
//       const response = await fetch(`http://localhost:5000/item/${params.id}`);
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
//       const response = await fetch(
//         `http://localhost:5000/item/delete/${params.id}`,
//         {
//           method: "DELETE",
//           headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//             authorizaion: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );
//       const jsonData = await response.json();
//       alert(jsonData.message);
//     } catch (err) {
//       alert("アイテム削除失敗");
//     }
//   };

//   const loginUser = useAuth();

//   if (loginUser === email) {
//     return (
//       <div className="delete-page">
//         <h1 className="page-title">アイテム削除</h1>
//         <form on Submit={handleSubmit}>
//           <h2>{title}</h2>
//           {image && <img src={require(`../../images${image}`)} alt="item" />}
//           <h3>¥{price}</h3>
//           <p>{description}</p>
//           <button>削除</button>
//         </form>
//       </div>
//     );
//   } else {
//     return <h1>権限がありません</h1>;
//   }
// };

// export default DeleteItem;

// ------------------------------------------------------------------------------
// p.118:  revise src in img tag
// p.122:  change tab name
// ------------------------------------------------------------------------------
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../utils/useAuth";

const DeleteItem = () => {
  const params = useParams();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const [email, setEmail] = useState("");

  useEffect(() => {
    document.title = "削除ページ";

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
        `http://localhost:5000/item/delete/${params.id}`,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            authorizaion: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const jsonData = await response.json();
      alert(jsonData.message);
    } catch (err) {
      alert("アイテム削除失敗");
    }
  };

  const loginUser = useAuth();

  if (loginUser === email) {
    return (
      <div className="delete-page">
        <h1 className="page-title">アイテム削除</h1>
        <form on Submit={handleSubmit}>
          <h2>{title}</h2>
          {/* {image && <img src={require(`../../images${image}`)} alt="item" />} */}
          {image && <img src={image} alt="item" />}
          <h3>¥{price}</h3>
          <p>{description}</p>
          <button>削除</button>
        </form>
      </div>
    );
  } else {
    return <h1>権限がありません</h1>;
  }
};

export default DeleteItem;

// ------------------------------------------------------------------------------
// final
// ------------------------------------------------------------------------------
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import useAuth from "../../utils/useAuth";

// const DeleteItem = () => {
//   const params = useParams();

//   const [title, setTitle] = useState("");
//   const [price, setPrice] = useState("");
//   const [image, setImage] = useState("");
//   const [description, setDescription] = useState("");
//   const [email, setEmail] = useState("");

//   useEffect(() => {
//     document.title = "編集ページ";

//     const getSingleItem = async () => {
//       // const response = await fetch(`http://localhost:5000/item/${params.id}`)
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
//       const response = await fetch(
//         // `http://localhost:5000/item/delete/${params.id}`,
//         `https://mern-book-mern-stack-backend.onrender.com/item/delete/${params.id}`,
//         {
//           method: "DELETE",
//           headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//             authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );
//       const jsonData = await response.json();
//       alert(jsonData.message);
//     } catch (err) {
//       alert("アイテム削除失敗");
//     }
//   };

//   const loginUser = useAuth();

//   if (loginUser === email) {
//     return (
//       <div className="delete-page">
//         <h1 className="page-title">アイテム削除</h1>
//         <form onSubmit={handleSubmit}>
//           <h2>{title}</h2>
//           {image && <img src={image} alt="item" />}
//           <h3>¥{price}</h3>
//           <p>{description}</p>
//           <button>削除</button>
//         </form>
//       </div>
//     );
//   } else {
//     return <h1>権限がありません</h1>;
//   }
// };

// export default DeleteItem;
