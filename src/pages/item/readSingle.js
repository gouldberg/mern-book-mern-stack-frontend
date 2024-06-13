// ------------------------------------------------------------------------------
// p.70
// ------------------------------------------------------------------------------
// import { useState } from "react";
// import { useParams } from "react-router-dom";

// const ReadSingleItem = () => {
//   const params = useParams();

//   const [title, setTitle] = useState("");
//   const [price, setPrice] = useState("");
//   const [image, setImage] = useState("");
//   const [description, setDescription] = useState("");

//   const getSingleItem = async () => {
//     // params.id is used by useParams
//     const response = await fetch(`http://localhost:5000/item/${params.id}`);
//     const jsonResponse = await response.json();

//     setTitle(jsonResponse.singleItem.title);
//     setPrice(jsonResponse.singleItem.price);
//     setImage(jsonResponse.singleItem.image);
//     setDescription(jsonResponse.singleItem.description);
//   };

//   return (
//     <div>
//       <div>
//         {image && <img src={require(`../../images$(image)`)} alt="item" />}
//       </div>
//       <div>
//         <h1>{title}</h1>
//         <h2>¥{price}</h2>
//         <hr />
//         <p>{description}</p>
//       </div>
//       {/* <h1>個別アイテムページ{console.log(title)}</h1> */}
//       <button onClick={getSingleItem}>個別データ取得</button>
//     </div>
//   );
// };

// export default ReadSingleItem;

// ------------------------------------------------------------------------------
// p.71
// ------------------------------------------------------------------------------
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// const ReadSingleItem = () => {
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

//   return (
//     <div>
//       <div>
//         {image && <img src={require(`../../images$(image)`)} alt="item" />}
//       </div>
//       <div>
//         <h1>{title}</h1>
//         <h2>¥{price}</h2>
//         <hr />
//         <p>{description}</p>
//       </div>
//       {/* <h1>個別アイテムページ{console.log(title)}</h1> */}
//       {/* <button onClick={getSingleItem}>個別データ取得</button> */}
//     </div>
//   );
// };

// export default ReadSingleItem;

// ------------------------------------------------------------------------------
// p.89
// ------------------------------------------------------------------------------
// import { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";

// const ReadSingleItem = () => {
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

//   return (
//     <div>
//       <div>
//         {image && <img src={require(`../../images$(image)`)} alt="item" />}
//       </div>
//       <div>
//         <h1>{title}</h1>
//         <h2>¥{price}</h2>
//         <hr />
//         <p>{description}</p>
//         <div>
//           <Link to={`/item/update/${params.id}`}>アイテム編集</Link>
//           <Link to={`/item/delete/${params.id}`}>アイテム削除</Link>
//         </div>
//       </div>
//       {/* <h1>個別アイテムページ{console.log(title)}</h1> */}
//       {/* <button onClick={getSingleItem}>個別データ取得</button> */}
//     </div>
//   );
// };

// export default ReadSingleItem;

// ------------------------------------------------------------------------------
// p.100:  css style by className
// ------------------------------------------------------------------------------
// import { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";

// const ReadSingleItem = () => {
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

//   return (
//     <div className="grid-container-si">
//       <div>
//         {image && <img src={require(`../../images$(image)`)} alt="item" />}
//       </div>
//       <div>
//         <h1>{title}</h1>
//         <h2>¥{price}</h2>
//         <hr />
//         <p>{description}</p>
//         <div>
//           <Link to={`/item/update/${params.id}`}>アイテム編集</Link>
//           <Link to={`/item/delete/${params.id}`}>アイテム削除</Link>
//         </div>
//       </div>
//       {/* <h1>個別アイテムページ{console.log(title)}</h1> */}
//       {/* <button onClick={getSingleItem}>個別データ取得</button> */}
//     </div>
//   );
// };

// export default ReadSingleItem;

// ------------------------------------------------------------------------------
// p.118:  revise src in img tag
// p.120:  change tab name
// ------------------------------------------------------------------------------
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const ReadSingleItem = () => {
  const params = useParams();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    document.title = title;

    const getSingleItem = async () => {
      // params.id is used by useParams
      const response = await fetch(`http://localhost:5000/item/${params.id}`);
      const jsonResponse = await response.json();

      setTitle(jsonResponse.singleItem.title);
      setPrice(jsonResponse.singleItem.price);
      setImage(jsonResponse.singleItem.image);
      setDescription(jsonResponse.singleItem.description);
    };

    getSingleItem();
  }, [params.id, title]);

  return (
    <div className="grid-container-si">
      <div>
        {/* {image && <img src={require(`../../images$(image)`)} alt="item" />} */}
        {image && <img src={image} alt="item" />}
      </div>
      <div>
        <h1>{title}</h1>
        <h2>¥{price}</h2>
        <hr />
        <p>{description}</p>
        <div>
          <Link to={`/item/update/${params.id}`}>アイテム編集</Link>
          <Link to={`/item/delete/${params.id}`}>アイテム削除</Link>
        </div>
      </div>
      {/* <h1>個別アイテムページ{console.log(title)}</h1> */}
      {/* <button onClick={getSingleItem}>個別データ取得</button> */}
    </div>
  );
};

export default ReadSingleItem;

// ------------------------------------------------------------------------------
// final
// ------------------------------------------------------------------------------
// import { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";

// const ReadSingleItem = () => {
//   const params = useParams();

//   const [title, setTitle] = useState("");
//   const [price, setPrice] = useState("");
//   const [image, setImage] = useState("");
//   const [description, setDescription] = useState("");

//   useEffect(() => {
//     document.title = title;

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
//     };
//     getSingleItem();
//   }, [params.id, title]);

//   return (
//     <div className="grid-container-si">
//       <div>{image && <img src={image} alt="item" />}</div>
//       <div>
//         <h1>{title}</h1>
//         <h2>¥{price}</h2>
//         <hr />
//         <p>{description}</p>
//         <div>
//           <Link to={`/item/update/${params.id}`}>アイテム編集</Link>
//           <Link to={`/item/delete/${params.id}`}>アイテム削除</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReadSingleItem;
