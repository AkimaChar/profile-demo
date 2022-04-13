import axios from "axios";

const instance = axios.create({
	baseURL: "https://bizdevim.com/proxy.php?url=",
	responseType: "json",
});

//https://bizdevim.com/proxy.php?url=API_url

instance.interceptors.request.use(function (config) {
	config.headers["Access-Control-Allow-Origin"] = "*";
	return config;
});

export default instance;
