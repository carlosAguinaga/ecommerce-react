import "./App.css";
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoaderPage from "./components/custom/loaderPage/LoaderPage.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProductListProvider } from "./context/ProductListContext";
import { ShopCartProvider } from "./context/ShopCartContext";
import Main from "./layouts/Main";

// import Home from "./views/Home";
// import Tienda from "./views/Tienda";
const Home = lazy(() => import("./views/Home/Home"));
const ShopCart = lazy(() => import("./views/ShopCart/ShopCart"));

function App() {
  return (
    <>
      <ProductListProvider>
        <ShopCartProvider>
          <Router>
            <Main>
              <Switch>
                <Route path="/" exact>
                  <Suspense fallback={<LoaderPage />}>
                    <Home />
                  </Suspense>
                </Route>

                <Route path="/shop-cart" exact>
                  <Suspense fallback={<LoaderPage />}>
                    <ShopCart />
                  </Suspense>
                </Route>
                <Route path="*">
                  <h1>404 Not Found</h1>
                </Route>
              </Switch>
            </Main>
          </Router>
        </ShopCartProvider>
      </ProductListProvider>
    </>
  );
}

export default App;
