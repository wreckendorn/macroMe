import axios from "axios";

const BASEURL = "https://api.nal.usda.gov/ndb/nutrients/?format=json&nutrients=203&nutrients=204&nutrients=205&nutrients=208&ndbno=";
const APIKEY = "&api_key=ag2S7yQRcJbSvWt8unFtxWGeqP21aQxhubZxsYz7";
// const id = "5b8ee6309b8ab83cc3a7ad1d";

export default {
  getMacroInfo: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  },

  getCarbsInfo: function() {
    return axios.get("/api/macros/carbs")
  },

  getProteinInfo: function() {
    return axios.get("/api/macros/protein")
  },

  getFatInfo: function() {
    return axios.get("/api/macros/fat")
  },

  getUserInfo: function(id) {
    console.log("getUserInfo triggered with: " + id)
    return axios.get("/api/users/" + id)
  },

  addTempFood: function(foodData) {
    console.log("addTempFood called with: " + foodData.id)
    return axios.put("/api/users/" + foodData.id, foodData);
  },

  deleteTempFood: function(data) {
    return axios.put("/api/users/remove/" + data.id, data.data);
  },

  changeDietRatio: function(data) {
    console.log("changeDietRatio called with: " + data.id + "and " + data.macroRatio)
    return axios.put("/api/users/ratio/" + data.id, data.macroRatio)
  },

  getMacroDB: function() {
    return axios.get("/api/macros");
  },

  resetTempFood: function(id) {
    return axios.delete("/api/users/" + id)
  },

  registerUser: function(userData) {
    return axios.post("/api/auth/register", userData);
  },

  loginUser: function(userData) {
    return axios.post("/api/auth/login", userData);
  }

};