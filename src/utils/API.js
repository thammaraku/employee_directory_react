import axios from "axios";

export default {
  randomUsers: function (query) {
    return axios.get("https://randomuser.me/api/?results=50&nat=us");
  }
};


