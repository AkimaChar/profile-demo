import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Account from "./pages/account/index";

const Index = () => {
	return <Account />;
};

ReactDOM.render(<Index />, document.getElementById("root"));
