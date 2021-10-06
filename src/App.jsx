import "./App.css";
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoaderPage from "./components/custom/loaderPage/LoaderPage.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProductListProvider } from "./context/ProductListContext";
import { ShopCartProvider } from "./context/ShopCartContext";
import { UserProvider } from "./context/UserContext";
import Main from "./layouts/Main";
import MyAccount from "./views/MyAccount/MyAccount";

// import Home from "./views/Home";
// import Tienda from "./views/Tienda";
const Home = lazy(() => import("./views/Home/Home"));
const ShopCart = lazy(() => import("./views/ShopCart/ShopCart"));
const LoginForm = lazy(() => import("./views/Login/LoginForm"));

function App() {
  return (
    <>
      <UserProvider>
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
                  <Route path="/login" exact>
                    <Suspense fallback={<LoaderPage />}>
                      <LoginForm />
                    </Suspense>
                  </Route>
                  <Route path="/account" exact>
                    <Suspense fallback={<LoaderPage />}>
                      <MyAccount />
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
      </UserProvider>
    </>
  );
}

export default App;
