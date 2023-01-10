import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import Header from '../Header/Header';
import './App.css';
import CategoryNav from '../Header/CategoryNav';
import styles from '../Header/CategoryNav.module.css';
import Category from '../Category/Category';
import Home from '../Home/Home';
import Product from '../Product/Product';
// import Footer from '../Footer/Footer';
import { lazy, useEffect } from 'react';
import { Suspense } from 'react';
import Spinner from '../Spinner/Spinner';

// const Home = lazy(async () => {
//   return new Promise(resolve => setTimeout(resolve, 2000)).then(
//     () => import("../Home/Home")
//   );
// });

function App() {

  return (
    <div className="App">
        <BrowserRouter>
            <Header />
            <CategoryNav styles={styles} />
                <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/:categoryTitle/" element={<Category />} />
                      <Route path="/:catTitle/:subID/:productID/" element={<Product />} />
                </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
