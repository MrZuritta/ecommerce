// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./global_components/header/Header";
import Hero from "./home_components/hero/Hero";
import Categories from "./home_components/categories/Categories";
import MostSearched from "./home_components/MostSearched/MostSearched";
import ProductList from "./home_components/productList/productlist";
import Rectangle from "./home_components/rectangle/Rectangle";
import Testimonials from "./home_components/testimonials/Testimonials";
import Footer from "./home_components/footer/Footer";
import ModelList from "./products_components/products/ModelList.jsx";
import ProductMostSearched from "./products_components/MostSearched/MostSearched.jsx"
import InformationProducts from "./products_components/information/information.jsx";
import ProductList_ProductsPath from "./products_components/productList/productlist.jsx";
import Footer_ProductsPath from "./products_components/footer/Footer.jsx";

import "./App.css";

const Home = () => (
  <div className="Home">
    <Header />
    <Hero />
    <Categories />
    <MostSearched />
    <ProductList />
    <Rectangle />
    <Testimonials />
    <Footer />
  </div>
);

const Products = () => (
  <div className="Products">
    <Header />
    <ModelList />
    <ProductMostSearched />
    <InformationProducts />
    <ProductList_ProductsPath />
    <Footer_ProductsPath />
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

// const App = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const getProducts = async () => {
//       try {
//         const productsData = await fetchProducts();
//         setProducts(productsData); // Assuming productsData is a list of products
//         setLoading(false);
//       } catch (error) {
//         setError(error);
//         setLoading(false);
//       }
//     };

//     getProducts();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error fetching products: {error.message}</div>;

//   return (
//     <div>
//       <h1>Product List</h1>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             <h2>{product.title}</h2>
//             <p>Vendor: {product.vendor}</p>
//             {product.images.length > 0 && (
//               <img
//                 src={product.images[0].src}
//                 alt={product.title}
//                 width="200"
//               />
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
