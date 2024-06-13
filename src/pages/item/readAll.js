// ------------------------------------------------------------------------------
// p.71
// ------------------------------------------------------------------------------
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const ReadAll = () => {
//   const [allItems, setAllItems] = useState();

//   useEffect(() => {
//     const getAllItems = async () => {
//       const response = await fetch("https://localhost:5000");
//       const jsonResponse = await response.json();
//       setAllItems(jsonResponse);
//     };
//     getAllItems();
//   }, []);

//   return (
//     <div>
//       <div>
//         {/* <h1>すべてのアイテムデータ</h1> */}
//         {/* {console.log(allItems)} */}
//         {/* {allItems && allItems.allItems.map(item => console.log(item))} */}
//         {allItems &&
//           allItems.allItems.map((item) => (
//             // <Link to="" key={item._id}>
//             <Link to={`/item/${item._id}`} key={item._id}>
//               <img src={require(`../../images${item.image}`)} alt="item" />
//               <div>
//                 <h2>¥{item.price}</h2>
//                 <h3>{item.title}</h3>
//                 <p>{item.description.substring(0, 80)}...</p>
//               </div>
//             </Link>
//           ))}
//         {/* <button onClick={getAllItems}>全データ取得</button> */}
//       </div>
//     </div>
//   );
// };

// export default ReadAll;

// ------------------------------------------------------------------------------
// p.100:  css style by className
// ------------------------------------------------------------------------------
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const ReadAll = () => {
//   const [allItems, setAllItems] = useState();

//   useEffect(() => {
//     const getAllItems = async () => {
//       const response = await fetch("https://localhost:5000");
//       const jsonResponse = await response.json();
//       setAllItems(jsonResponse);
//     };
//     getAllItems();
//   }, []);

//   return (
//     <div>
//       <div className="grid-container-in">
//         {/* <h1>すべてのアイテムデータ</h1> */}
//         {/* {console.log(allItems)} */}
//         {/* {allItems && allItems.allItems.map(item => console.log(item))} */}
//         {allItems &&
//           allItems.allItems.map((item) => (
//             // <Link to="" key={item._id}>
//             <Link to={`/item/${item._id}`} key={item._id}>
//               <img src={require(`../../images${item.image}`)} alt="item" />
//               <div className="text-area">
//                 <h2>¥{item.price}</h2>
//                 <h3>{item.title}</h3>
//                 <p>{item.description.substring(0, 80)}...</p>
//               </div>
//             </Link>
//           ))}
//         {/* <button onClick={getAllItems}>全データ取得</button> */}
//       </div>
//     </div>
//   );
// };

// export default ReadAll;

// ------------------------------------------------------------------------------
// p.118:  revise src in img tag
// p.121:  change tab name
// ------------------------------------------------------------------------------
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ReadAll = () => {
  const [allItems, setAllItems] = useState();

  useEffect(() => {
    document.title = "MERN MARKET";

    const getAllItems = async () => {
      const response = await fetch("https://localhost:5000");
      const jsonResponse = await response.json();
      setAllItems(jsonResponse);
    };
    getAllItems();
  }, []);

  return (
    <div>
      <div className="grid-container-in">
        {/* <h1>すべてのアイテムデータ</h1> */}
        {/* {console.log(allItems)} */}
        {/* {allItems && allItems.allItems.map(item => console.log(item))} */}
        {allItems &&
          allItems.allItems.map((item) => (
            // <Link to="" key={item._id}>
            <Link to={`/item/${item._id}`} key={item._id}>
              {/* <img src={require(`../../images${item.image}`)} alt="item" /> */}
              <img src={item.image} alt="item" />
              <div className="text-area">
                <h2>¥{item.price}</h2>
                <h3>{item.title}</h3>
                <p>{item.description.substring(0, 80)}...</p>
              </div>
            </Link>
          ))}
        {/* <button onClick={getAllItems}>全データ取得</button> */}
      </div>
    </div>
  );
};

export default ReadAll;

// ------------------------------------------------------------------------------
// final
// ------------------------------------------------------------------------------
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const ReadAll = () => {
//   const [allItems, setAllIetms] = useState();

//   useEffect(() => {
//     document.title = "MERN Market";

//     const getAllItems = async () => {
//       // const response = await fetch("http://localhost:5000")
//       const response = await fetch(
//         "https://mern-book-mern-stack-backend.onrender.com"
//       );
//       const jsonResponse = await response.json();
//       setAllIetms(jsonResponse);
//     };
//     getAllItems();
//   }, []);

//   return (
//     <div>
//       <div className="grid-container-in">
//         {allItems &&
//           allItems.allItems.map((item) => (
//             <Link to={`/item/${item._id}`} key={item._id} className="card">
//               <img src={item.image} alt="item" />
//               <div className="texts-area">
//                 <h2>¥{item.price}</h2>
//                 <h3>{item.title}</h3>
//                 <p>{item.description.substring(0, 80)}...</p>
//               </div>
//             </Link>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default ReadAll;
