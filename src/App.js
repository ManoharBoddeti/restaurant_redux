import React from "react";
import "./App.css";
 import Layout from "./components/Layout";
 import Navbar from "./components/Navbar";
// import Table from "./components/Table";
import { Provider } from "react-redux";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        {/* <Table /> */}
        <Layout />
      </div>
    </Provider>
  );
}

export default App;
