import React from "react";
import "./App.css";
import { Layout, Menu } from "antd";
import CartBadge from "./components/cart-badge";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import ListPage from "./components/routes/list";
import MapPage from "./components/routes/map";
import MenuPage from "./components/routes/menu";
import Counter from "./components/counter";
import OrderPage from "./components/routes/order";
import OrderCompletePage from "./components/routes/order-complete";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Layout className="App">
        <Header className="header">
          <Menu theme="dark" mode="horizontal" style={{ lineHeight: "64px" }}>
            <Menu.Item>
              <NavLink to={"/restaurants"} activeStyle={{ color: "lightgrey" }}>
                List
              </NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink
                to={"/restaurant-map"}
                activeStyle={{ color: "lightgrey" }}
              >
                Map
              </NavLink>
            </Menu.Item>
            <CartBadge />
          </Menu>
        </Header>
        <Content>
          <Switch>
            <Route path={"/restaurants"} component={ListPage} />
            <Route path={"/restaurants/counter"} component={Counter} />
            <Route path={"/restaurant-map/:restaurantId"} component={MapPage} />
            <Route path={"/restaurant-map/"} component={MapPage} />
            <Route
              path={"/restaurant-menu/:restaurantId"}
              component={MenuPage}
            />
            <Route path={"/order-complete"} component={OrderCompletePage} />
            <Route path={"/order"} component={OrderPage} />
            <Route path={"/"} render={() => <h2>Page not found</h2>} />
          </Switch>
        </Content>
        <Footer>{/*<Counter />*/}</Footer>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
