import axios from "axios";

export default {
  randomUsers: function (query) {
    return axios.get("https://randomuser.me/api/?results=400&nat=us");
  }
};


