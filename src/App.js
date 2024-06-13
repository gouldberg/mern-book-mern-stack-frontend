// ------------------------------------------------------------------------------
// p.19
// ------------------------------------------------------------------------------
// import { Route, Routes, BrowserRouter } from "react-router-dom";
// import Register from "./pages/user/register";
// import Login from "./pages/user/login";
// import "./App.css";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/user/register" element={<Register />} />
//         <Route path="/user/login" element={<Login />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;

// ------------------------------------------------------------------------------
// p.87
// ------------------------------------------------------------------------------
// import { Route, Routes, BrowserRouter } from "react-router-dom";
// import Register from "./pages/user/register";
// import Login from "./pages/user/login";
// import ReadAll from "./pages/item/readAll";
// import ReadSingle from "./pages/item/readSingle";
// import Create from "./pages/item/create";
// import Update from "./pages/item/update";
// import Delete from "./pages/item/delete";
// import "./App.css";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/user/register" element={<Register />} />
//         <Route path="/user/login" element={<Login />} />
//         <Route path="/" element={<ReadAll />} />
//         <Route path="/item/:id" element={<ReadSingle />} />
//         <Route path="/item/create" element={<Create />} />
//         <Route path="/item/update/:id" element={<Update />} />
//         <Route path="/item/delete/:id" element={<Delete />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;

// ------------------------------------------------------------------------------
// p.104:  apply header + footer to all App
// p.119:  Not Found
// ------------------------------------------------------------------------------
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Register from "./pages/user/register";
import Login from "./pages/user/login";
import ReadAll from "./pages/item/readAll";
import ReadSingle from "./pages/item/readSingle";
import Create from "./pages/item/create";
import Update from "./pages/item/update";
import Delete from "./pages/item/delete";

import Header from "./components/header";
import Footer from "./components/footer";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/user/register" element={<Register />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/" element={<ReadAll />} />
          <Route path="/item/:id" element={<ReadSingle />} />
          <Route path="/item/create" element={<Create />} />
          <Route path="/item/update/:id" element={<Update />} />
          <Route path="/item/delete/:id" element={<Delete />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

// ------------------------------------------------------------------------------
// final
// ------------------------------------------------------------------------------
// import { Route, Routes, BrowserRouter } from "react-router-dom";
// import Register from "./pages/user/register";
// import Login from "./pages/user/login";
// import ReadAll from "./pages/item/readAll";
// import ReadSingle from "./pages/item/readSingle";
// import Create from "./pages/item/create";
// import Update from "./pages/item/update";
// import Delete from "./pages/item/delete";
// import Header from "./components/header";
// import Footer from "./components/footer";
// import "./App.css";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <div className="container">
//         <Header />
//         <Routes>
//           <Route path="/user/register" element={<Register />} />
//           <Route path="/user/login" element={<Login />} />
//           <Route path="/" element={<ReadAll />} />
//           <Route path="/item/:id" element={<ReadSingle />} />
//           <Route path="/item/create" element={<Create />} />
//           <Route path="/item/update/:id" element={<Update />} />
//           <Route path="/item/delete/:id" element={<Delete />} />
//           <Route path="*" element={<h1>Page Not Found</h1>} />
//         </Routes>
//         <Footer />
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;
