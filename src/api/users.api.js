import axios from "axios";

const URL_API = "https://reqres.in/api/login";

const UserAPI = {
  login: (data) => axios.post(URL_API, data),
};

export default UserAPI;
